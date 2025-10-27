"use client";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({
  end,
  duration = 2000,
  decimals = 1,
  suffix = "",
  prefix = "",
}: CounterProps) {
  const [value, setValue] = useState<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = start + progress * (end - start);
      setValue(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration]);

  const formattedValue = (() => {
    // 🔹 Caso 1: entre 1000 y 1999 → convertir a k con decimales
    if (end >= 1000 && end < 2000) {
      const valK = value / 1000;
      const fixed = valK.toFixed(decimals);
      const cleaned = fixed.replace(/\.0+$/, "");
      return `${prefix}${cleaned}k${suffix}`;
    }

    // 🔹 Caso 2: 2000 o más → mostrar número entero sin "k"
    if (end >= 2000) {
      const fixed = value.toFixed(0);
      return `${prefix}${fixed}${suffix}`;
    }

    // 🔹 Caso 3: menor a 1000 → mostrar número normal
    const fixed = value.toFixed(decimals === 0 ? 0 : decimals);
    const cleaned = fixed.replace(/\.0+$/, "");
    return `${prefix}${cleaned}${suffix}`;
  })();

  return <span>{formattedValue}</span>;
}
