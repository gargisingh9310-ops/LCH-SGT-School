import React, { useEffect, useRef, useState } from 'react';

export default function CountUp({
  to = 40,
  from = 0,
  duration = 2,
  suffix = '+',
  prefix = '',
  className = '',
  startOnView = true,
}) {
  const [count, setCount] = useState(from);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();
      const durationMs = duration * 1000;

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        
        // Ease out expo
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(from + (to - from) * easeOutExpo);
        
        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(to);
        }
      };

      requestAnimationFrame(updateCount);
    };

    if (!startOnView) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [to, from, duration, startOnView]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
