import React, { useEffect, useRef } from 'react';

export default function ParticleText({
  text = "Where Learning Goes Beyond the Classroom",
  className = "",
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    // Color palette: Emerald, Forest, Warm Gold, Amber
    const colors = [
      'rgba(245, 158, 11, 0.7)',   // Warm gold
      'rgba(217, 119, 6, 0.6)',    // Amber
      'rgba(4, 120, 87, 0.65)',    // Forest green
      'rgba(6, 78, 59, 0.8)',      // Deep emerald
      'rgba(251, 191, 36, 0.75)',  // Soft bright gold
    ];

    // Particle count scaled to screen
    const count = Math.min(Math.floor(width / 18), 65);
    const particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        radius: Math.random() * 2.4 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.15 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      particles.forEach((p) => {
        // Natural gentle drift
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse repelling interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x -= (dx / dist) * force * 3;
          p.y -= (dy / dist) * force * 3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative inline-block w-full max-w-full ${className}`}>
      {/* Particle Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 sm:-inset-8 w-full sm:w-[calc(100%+4rem)] h-full sm:h-[calc(100%+4rem)] pointer-events-none z-0 overflow-hidden"
      />
      {/* Main Crisp Readable Heading */}
      <h1 className="relative z-10 text-[22px] xs:text-[26px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.12] font-display text-shadow-md break-words">
        Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Learning</span> Goes Beyond the{' '}
        <span className="relative inline-block">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-100 to-white">
            Classroom
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full opacity-80" />
        </span>
      </h1>
    </div>
  );
}
