// src/components/ui/image.tsx


const Image = ({ src, alt, className }: { src: string, alt: string, className?: string }) => (
  <img src={src} alt={alt} className={className} />
);

export default Image;
