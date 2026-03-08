interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <section className={`pr-6 py-16 ${className}`}>
      {title && (
        <h2 className="text-4xl uppercase tracking-wide mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default ContentSection;
