"use client";

import { useState } from "react";

export function FallbackImage({ src, alt, className, fallbackSrc }: any) {
  const [error, setError] = useState(false);
  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
