"use client"
import { useEffect, useState } from "react"

interface Props {
  src: string,
  poster: string,
  preloadBytes?: number
  className?: string
}

export const HeroVideo = ({ src, poster, preloadBytes = 2000000, className = "absolute inset-0 w-full h-[80%] lg:h-full object-cover z-0 rounded-b-3xl" }: Props) => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    async function prefetchVideo() {
      try {
        const res = await fetch(src, {
          headers: { Range: `bytes=0-${preloadBytes}` },
        });
        const blob = await res.blob();
        const objectUrl = URL.createObjectURL(blob);
        setVideoUrl(objectUrl);
      } catch (error) {
        console.error("Error prefetching video:", error);
      }
    }

    prefetchVideo();

    //clean memory on component unmount
    return () => {
      if (videoUrl) URL.revokeObjectURL(videoUrl);
    };
  }, [src, preloadBytes]);

    return (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className={className}
          >
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
          <source src="/metisoriginvideo.mp4" type="video/mp4"/>
          
        </video>
    
    );
}

