import React, { useState, useRef, useEffect } from "react";

interface VariableProximityProps {
  label: string;
  className?: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef?: React.RefObject<HTMLElement>;
  radius?: number;
  falloff?: "linear" | "ease";
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function VariableProximity({
  label,
  className = "",
  fromFontVariationSettings = "'wght' 400, 'opsz' 9",
  toFontVariationSettings = "'wght' 1000, 'opsz' 40",
  containerRef,
  radius = 100,
  falloff = "linear",
}: VariableProximityProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [variation, setVariation] = useState(fromFontVariationSettings);

  useEffect(() => {
    const handleMove = (e: Event) => {
      if (!spanRef.current) return;
      // Only handle MouseEvent
      if (!(e instanceof MouseEvent)) return;
      const rect = spanRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let t = Math.max(0, Math.min(1, 1 - dist / radius));
      if (falloff === "ease") t = t * t * (3 - 2 * t); // ease in-out
      // Parse font-variation-settings
      const from = fromFontVariationSettings.match(/\d+/g)?.map(Number) || [400, 9];
      const to = toFontVariationSettings.match(/\d+/g)?.map(Number) || [1000, 40];
      const wght = Math.round(lerp(from[0], to[0], t));
      const opsz = Math.round(lerp(from[1], to[1], t));
      setVariation(`'wght' ${wght}, 'opsz' ${opsz}`);
    };
    const target = containerRef?.current || window;
    target.addEventListener("mousemove", handleMove);
    return () => target.removeEventListener("mousemove", handleMove);
  }, [fromFontVariationSettings, toFontVariationSettings, radius, falloff, containerRef]);

  return (
    <span ref={spanRef} className={className} style={{ fontVariationSettings: variation, transition: "font-variation-settings 0.2s" }}>
      {label}
    </span>
  );
}
