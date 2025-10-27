"use client"
import { useEffect, useState } from "react"

interface Props {
  src: string
  poster: string
  preloadBytes?: number
  className?: string
}

export const HeroVideo = ({
  src,
  poster,
  preloadBytes = 2000000,
  className = "absolute inset-0 w-full h-[80%] lg:h-full object-cover z-0 rounded-b-3xl",
}: Props) => {
  const [prefetched, setPrefetched] = useState(false);

  useEffect(() => {
    async function prefetchVideo() {
      try {
        await fetch(src, {
          headers: { Range: `bytes=0-${preloadBytes}` },
        });
        setPrefetched(true);
      } catch (error) {
        console.error("Error prefetching video:", error);
      }
    }

    prefetchVideo();
  }, [src, preloadBytes]);

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      preload={prefetched ? "auto" : "metadata"}
      className={className}
    >
      <source src={src} type="video/mp4" />
      <source src="/metisoriginvideo.mp4" type="video/mp4" />
    </video>
  )
}