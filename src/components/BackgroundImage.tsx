"use client";
import { FC, useEffect, useState } from 'react';

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  width: number;
  height: number;
}

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1726963121821-ba51f2cc4c10?q=50&w=2000";

const BackgroundImage: FC = () => {
  const [backgroundUrl, setBackgroundUrl] = useState<string>(DEFAULT_IMAGE);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/users/gen035/photos?per_page=50&client_id=bl4vu5C9jNQf2iHhnkdIXn-KpqWYEzRCn4td8CG71bQ'
        );

        if (!response.ok) {
          throw new Error(`Unsplash request failed: ${response.status}`);
        }

        const data: UnsplashImage[] = await response.json();
        const horizontalImages = data.filter((image) => image.width > image.height);

        if (horizontalImages.length > 0) {
          const randomIndex = Math.floor(Math.random() * horizontalImages.length);
          setBackgroundUrl(horizontalImages[randomIndex].urls.regular);
        }
      } catch (error: any) {
        console.error('Error fetching images:', error?.message ?? error);
      }
    };

    fetchImages();
  }, []);

  const styles = {
    backgroundImage: `url(${backgroundUrl})`,
    filter: backgroundUrl === DEFAULT_IMAGE ? 'blur(5px)' : undefined,
    animation: backgroundUrl === DEFAULT_IMAGE ? undefined : 'blurAnimation 1s normal ease-in-out'
  };

  return (
    <>
      <div className="fixed h-full w-full -z-50 bg-cover bg-center" style={styles} />
      <div className="fixed h-full w-full -z-10 bg-black opacity-75" />
    </>
  );
};

export default BackgroundImage;
