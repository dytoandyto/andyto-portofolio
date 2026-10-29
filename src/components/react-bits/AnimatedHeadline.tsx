"use client";

import React from "react";
import { SplitText, SplitTextProps } from "./SplitText";

export type AnimatedHeadlineProps = SplitTextProps;

/**
 * AnimatedHeadline
 * High-performance, visible Split Text headline component powered by Motion for React.
 * Splits text into deliberate editorial lines and words with spring physics reveal.
 */
export function AnimatedHeadline(props: AnimatedHeadlineProps) {
  return (
    <SplitText
      as="h1"
      trigger="load"
      variant="rise"
      {...props}
    />
  );
}

export default AnimatedHeadline;
