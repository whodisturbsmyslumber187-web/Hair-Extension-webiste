interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <section className={`pr-6 py-16 ${className}`}>
      {title && (
        <h2 className="text-3xl font-black text-foreground mb-8 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '0.5px currentColor' }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default ContentSection;