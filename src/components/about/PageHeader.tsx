interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="pr-6 py-16 border-b border-border">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg font-semibold text-foreground drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;