import React from "react";

export default function Music() {
  return (
    <article className="text-center mx-2 mb-1 font-arvo text-lg">
      <p className="my-2 text-white">Featured Tracks</p>
      <iframe
        title="featuredTrack"
        className="rounded-[12px] my-2"
        src="https://open.spotify.com/embed/track/4DbrK5ETabZgaIXTG0dLG9?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        title="track2"
        className="rounded-[12px] my-2"
        src="https://open.spotify.com/embed/track/6LMkB8GY1O8qkSGNe7h7Pd?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        title="track3"
        className="rounded-[12px] my-2 mb-4"
        src="https://open.spotify.com/embed/track/5kN37s0i2hMoyFiGt7IBn3?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </article>
  );
}
