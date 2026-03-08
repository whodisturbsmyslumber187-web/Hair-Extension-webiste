interface ImageTextBlockProps {
  image: string;
  imageAlt: string;
  title: string;
  content: string;
  imagePosition?: 'left' | 'right';
}

const ImageTextBlock = ({ 
  image, 
  imageAlt, 
  title, 
  content, 
  imagePosition = 'left' 
}: ImageTextBlockProps) => {
  return (
    <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
      <div className="flex-1">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full aspect-square lg:aspect-auto lg:h-[800px] object-cover"
        />
      </div>
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl font-black uppercase text-foreground" style={{ WebkitTextStroke: '1px currentColor', textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}>
          {title}
        </h3>
        <p className="text-lg text-foreground font-extrabold leading-relaxed" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default ImageTextBlock;