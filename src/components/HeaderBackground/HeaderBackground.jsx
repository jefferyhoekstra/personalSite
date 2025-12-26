import { useEffect, useMemo, useState } from "react";
import "./HeaderBackground.css";

export default function HeaderBackground({ images, intervalMs = 6000 }) {
  const resolvedImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [showA, setShowA] = useState(true);

  useEffect(() => {
    if (resolvedImages.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % resolvedImages.length);
      setShowA((value) => !value);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [resolvedImages.length, intervalMs]);

  const currentImage = resolvedImages[activeIndex] ?? null;
  const otherIndex =
    resolvedImages.length > 0
      ? (activeIndex - 1 + resolvedImages.length) % resolvedImages.length
      : 0;
  const previousImage = resolvedImages[otherIndex] ?? null;

  // Keep a stable DOM structure for smooth crossfade.
  return (
    <div className="headerBackground" aria-hidden="true">
      <div
        className={
          showA
            ? "headerBackground__layer headerBackground__layer--visible"
            : "headerBackground__layer headerBackground__layer--hidden"
        }
        style={
          showA && currentImage
            ? { backgroundImage: `url(${currentImage})` }
            : { backgroundImage: `url(${previousImage})` }
        }
      />
      <div
        className={
          showA
            ? "headerBackground__layer headerBackground__layer--hidden"
            : "headerBackground__layer headerBackground__layer--visible"
        }
        style={
          showA && previousImage
            ? { backgroundImage: `url(${previousImage})` }
            : { backgroundImage: `url(${currentImage})` }
        }
      />
    </div>
  );
}
