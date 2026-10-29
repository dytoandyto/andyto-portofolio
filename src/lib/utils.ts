export { cn } from "cn";

/**
 * Normalizes a URL to ensure it has a safe absolute protocol.
 * - Leaves internal routes (/work, #contact, mailto:, tel:) intact.
 * - Prepend https:// to bare hostnames (e.g. www.linkedin.com/...)
 * - Blocks unsafe schemes like javascript: or data:
 */
export function ensureAbsoluteUrl(url?: string | null): string {
  if (!url) return "#";
  const trimmed = url.trim();
  if (!trimmed) return "#";

  // Reject unsafe schemes
  if (/^(javascript|data|vbscript):/i.test(trimmed)) {
    return "#";
  }

  // Preserve internal routes and standard communication protocols
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:")
  ) {
    return trimmed;
  }

  // Preserve already-qualified http/https links
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  // Default bare domains to https://
  return `https://${trimmed}`;
}
