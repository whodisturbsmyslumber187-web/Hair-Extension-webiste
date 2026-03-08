interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <section className={`pr-6 py-16 ${className}`}>
      {title && (
        <h2 className="text-4xl font-black uppercase tracking-wide text-foreground mb-8" style={{ WebkitTextStroke: '1px currentColor', textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default ContentSection;