"use client";

import React, { useEffect, useRef, useState } from "react";

interface DeferredMountProps {
  children: React.ReactNode;
  rootMargin?: string;
  fallback?: React.ReactNode;
  className?: string;
}

/**
 * DeferredMount
 * Delays mounting of resource-heavy canvas and WebGL components until they approach the viewport.
 * Eliminates main-thread blocking (TBT) and improves LCP during initial page load
 * while preserving seamless animations and zero CLS.
 */
export function DeferredMount({
  children,
  rootMargin = "350px",
  fallback = null,
  className = "contents",
}: DeferredMountProps) {
  const [shouldMount, setShouldMount] = useState<boolean>(() => {
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      return true;
    }
    return false;
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldMount) return;
    if (!("IntersectionObserver" in window)) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldMount, rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {shouldMount ? children : fallback}
    </div>
  );
}

export default DeferredMount;
