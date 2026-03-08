interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <section className={`pr-6 py-16 ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold text-foreground mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default ContentSection;