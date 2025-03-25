
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function BlurImage({ 
  src, 
  alt, 
  className, 
  width, 
  height 
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-all duration-500 ease-in-out w-full h-full object-cover",
          isLoading ? "scale-110 blur-md" : "scale-100 blur-0"
        )}
      />
    </div>
  );
}

export default BlurImage;
