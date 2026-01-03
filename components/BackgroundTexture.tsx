import React from 'react';

export const BackgroundTexture: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply">
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};