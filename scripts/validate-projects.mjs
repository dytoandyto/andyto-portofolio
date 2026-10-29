#!/usr/bin/env node

/**
 * Portfolio Project Data Validator
 * Enforces authentic, evidence-backed project records and guards against
 * confidential project leaks, dummy placeholder URLs, and malformed data schemas.
 */

import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const projectsFilePath = path.resolve('src/data/projects.ts');

console.log('🔍 Validating portfolio project dataset at src/data/projects.ts...\n');

if (!fs.existsSync(projectsFilePath)) {
  console.error(`❌ Error: File not found: ${projectsFilePath}`);
  process.exit(1);
}

const sourceCode = fs.readFileSync(projectsFilePath, 'utf8');

// Transpile TypeScript to CommonJS in-memory
const transpiled = ts.transpile(sourceCode, {
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.ES2022,
});

const sandboxModule = { exports: {} };
try {
  const runner = new Function('exports', 'module', transpiled);
  runner(sandboxModule.exports, sandboxModule);
} catch (err) {
  console.error('❌ Failed to parse and execute src/data/projects.ts:', err.message);
  process.exit(1);
}

const { projects } = sandboxModule.exports;

if (!Array.isArray(projects)) {
  console.error('❌ Error: `projects` export must be an array.');
  process.exit(1);
}

if (projects.length === 0) {
  console.error('❌ Error: `projects` array cannot be empty.');
  process.exit(1);
}

const errors = [];
const warnings = [];

const allowedStatuses = ['completed', 'in-progress', 'prototype', 'concept'];
const allowedCategories = ['Full-Stack', 'Frontend', 'UI/UX', 'Product'];
const dummyDomains = [
  'example.com',
  'test.com',
  'placeholder.com',
  'localhost',
  'dummy.com',
  'domain.com',
  'myproject.com',
  'username',
];

const seenSlugs = new Set();
const seenTitles = new Set();

// Confidential project guard list
const confidentialSlugs = ['sada-taskly', 'taskly'];
const confidentialTitles = ['sada-taskly', 'taskly', 'sada'];

projects.forEach((p, index) => {
  const identifier = `Project #${index + 1} (${p.slug || p.title || 'unnamed'})`;

  // 1. Confidential check
  if (p.slug && confidentialSlugs.includes(p.slug.toLowerCase())) {
    errors.push(`${identifier}: Confidential project slug "${p.slug}" detected in public dataset!`);
  }
  if (p.title && confidentialTitles.some((t) => p.title.toLowerCase().includes(t))) {
    errors.push(`${identifier}: Confidential project title "${p.title}" detected in public dataset!`);
  }

  // 2. Slug check
  if (!p.slug || typeof p.slug !== 'string') {
    errors.push(`${identifier}: Missing or invalid 'slug'.`);
  } else {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) {
      errors.push(`${identifier}: Slug "${p.slug}" must be lowercase kebab-case (a-z, 0-9, hyphens).`);
    }
    if (seenSlugs.has(p.slug)) {
      errors.push(`${identifier}: Duplicate slug "${p.slug}".`);
    }
    seenSlugs.add(p.slug);
  }

  // 3. Title check
  if (!p.title || typeof p.title !== 'string' || !p.title.trim()) {
    errors.push(`${identifier}: Missing or empty 'title'.`);
  } else {
    if (seenTitles.has(p.title.toLowerCase())) {
      errors.push(`${identifier}: Duplicate title "${p.title}".`);
    }
    seenTitles.add(p.title.toLowerCase());
  }

  // 4. Subtitle and Summary
  if (!p.subtitle || typeof p.subtitle !== 'string' || !p.subtitle.trim()) {
    errors.push(`${identifier}: Missing or empty 'subtitle'.`);
  }
  if (!p.summary || typeof p.summary !== 'string' || !p.summary.trim()) {
    errors.push(`${identifier}: Missing or empty 'summary'.`);
  }

  // 5. Status check
  if (!p.status || !allowedStatuses.includes(p.status)) {
    errors.push(`${identifier}: Invalid status "${p.status}". Must be one of: ${allowedStatuses.join(', ')}.`);
  }
  if (!p.statusLabel || typeof p.statusLabel !== 'string' || !p.statusLabel.trim()) {
    errors.push(`${identifier}: Missing or empty 'statusLabel'.`);
  }

  // 6. Year check
  if (!p.year || typeof p.year !== 'string' || !p.year.trim()) {
    errors.push(`${identifier}: Missing or empty 'year'.`);
  }

  // 7. Categories check
  if (!Array.isArray(p.category) || p.category.length === 0) {
    errors.push(`${identifier}: 'category' must be a non-empty array.`);
  } else {
    p.category.forEach((cat) => {
      if (!allowedCategories.includes(cat)) {
        errors.push(`${identifier}: Invalid category "${cat}". Must be one of: ${allowedCategories.join(', ')}.`);
      }
    });
  }

  // 8. Role & Technologies
  if (!Array.isArray(p.role) || p.role.length === 0) {
    errors.push(`${identifier}: 'role' must be a non-empty array.`);
  }
  if (!Array.isArray(p.technologies) || p.technologies.length === 0) {
    errors.push(`${identifier}: 'technologies' must be a non-empty array.`);
  }

  // 9. Cover Gradient & Mockup Type
  if (!p.coverGradient || !p.coverGradient.from || !p.coverGradient.to || !p.coverGradient.accent) {
    errors.push(`${identifier}: 'coverGradient' must include 'from', 'to', and 'accent' color tokens.`);
  }
  if (!['dashboard', 'kanban', 'portal'].includes(p.mockupType)) {
    errors.push(`${identifier}: Invalid mockupType "${p.mockupType}". Must be 'dashboard', 'kanban', or 'portal'.`);
  }

  // 10. Optional URLs validation
  const validateUrl = (url, fieldName) => {
    if (url === undefined) return; // Legitimate absence is valid

    if (typeof url !== 'string' || url.trim() === '') {
      errors.push(`${identifier}: '${fieldName}' cannot be an empty string. Omit it if unavailable.`);
      return;
    }

    if (!url.startsWith('https://')) {
      errors.push(`${identifier}: '${fieldName}' must start with 'https://' (received: "${url}").`);
      return;
    }

    try {
      const parsed = new URL(url);
      const hostname = parsed.hostname.toLowerCase();
      if (dummyDomains.some((d) => hostname.includes(d))) {
        errors.push(`${identifier}: '${fieldName}' uses forbidden placeholder domain "${hostname}".`);
      }
    } catch {
      errors.push(`${identifier}: '${fieldName}' is a malformed URL ("${url}").`);
    }
  };

  validateUrl(p.liveUrl, 'liveUrl');
  validateUrl(p.repositoryUrl, 'repositoryUrl');

  // 11. Narrative case study sections validation
  const checkStringArray = (arr, fieldName) => {
    if (arr === undefined) return;
    if (!Array.isArray(arr) || arr.length === 0) {
      errors.push(`${identifier}: '${fieldName}' should be omitted or non-empty.`);
      return;
    }
    arr.forEach((item, i) => {
      if (typeof item !== 'string' || !item.trim()) {
        errors.push(`${identifier}: '${fieldName}[${i}]' cannot be empty.`);
      }
    });
  };

  checkStringArray(p.goals, 'goals');
  checkStringArray(p.challenges, 'challenges');
  checkStringArray(p.outcomes, 'outcomes');
  checkStringArray(p.lessons, 'lessons');

  if (p.decisions !== undefined) {
    if (!Array.isArray(p.decisions) || p.decisions.length === 0) {
      errors.push(`${identifier}: 'decisions' should be omitted or non-empty.`);
    } else {
      p.decisions.forEach((d, i) => {
        if (!d.title || !d.explanation || !d.title.trim() || !d.explanation.trim()) {
          errors.push(`${identifier}: 'decisions[${i}]' must have non-empty 'title' and 'explanation'.`);
        }
      });
    }
  }

  // 12. Placeholder text audit
  const allText = JSON.stringify(p).toLowerCase();
  ['lorem ipsum', 'todo:', 'tbd', 'fake user'].forEach((ph) => {
    if (allText.includes(ph)) {
      errors.push(`${identifier}: Contains placeholder text "${ph}".`);
    }
  });
});

console.log(`📊 Validated ${projects.length} public project(s):`);
projects.forEach((p) => {
  console.log(`  • ${p.title} (${p.slug})`);
  console.log(`    - Status: ${p.status} (${p.statusLabel})`);
  console.log(`    - Tech: ${p.technologies.slice(0, 4).join(', ')}...`);
  console.log(`    - Live URL: ${p.liveUrl || '(none - unreleased)'}`);
  console.log(`    - Repository URL: ${p.repositoryUrl || '(none - private/unreleased)'}`);
});
console.log('');

if (warnings.length > 0) {
  console.warn('⚠️ Warnings:');
  warnings.forEach((w) => console.warn(`  - ${w}`));
  console.log('');
}

if (errors.length > 0) {
  console.error('❌ Validation failed with errors:');
  errors.forEach((e) => console.error(`  - ${e}`));
  console.log('');
  process.exit(1);
}

console.log('✅ All public projects passed content integrity and schema validation!\n');
process.exit(0);

