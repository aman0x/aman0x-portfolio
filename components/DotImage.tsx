'use client';

import { useEffect, useRef, useState } from 'react';

interface DotImageProps {
  src: string;
  width?: number;
  height?: number;
  dotSize?: number;
  dotGap?: number;
  color?: string;
}

export default function DotImage({
  src,
  width = 200,
  height = 200,
  dotSize = 2,
  dotGap = 3,
  color = '#3fb950',
}: DotImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;

      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = width;
      tempCanvas.height = height;

      const aspectRatio = img.width / img.height;
      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (aspectRatio > 1) {
        drawHeight = width / aspectRatio;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * aspectRatio;
        offsetX = (width - drawWidth) / 2;
      }

      tempCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      const imageData = tempCtx.getImageData(0, 0, width, height);
      const pixels = imageData.data;

      ctx.fillStyle = '#0d1117';
      ctx.fillRect(0, 0, width, height);

      const step = dotSize + dotGap;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const i = (y * width + x) * 4;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const a = pixels[i + 3];

          if (a < 50) continue;

          const brightness = (r + g + b) / 3 / 255;
          const radius = (dotSize / 2) * brightness * 1.5;

          if (radius > 0.3) {
            ctx.beginPath();
            ctx.arc(x + dotSize / 2, y + dotSize / 2, radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.3 + brightness * 0.7;
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1;
      setLoaded(true);
    };

    img.src = src;
  }, [src, width, height, dotSize, dotGap, color]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          imageRendering: 'pixelated',
        }}
      />
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center text-[var(--terminal-green)]"
          style={{ width, height }}
        >
          Loading...
        </div>
      )}
    </div>
  );
}
