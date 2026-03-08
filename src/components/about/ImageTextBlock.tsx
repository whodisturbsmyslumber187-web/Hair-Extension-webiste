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
        <h3 className="text-2xl font-bold text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {title}
        </h3>
        <p className="text-foreground font-semibold leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ImageTextBlock;