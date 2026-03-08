interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="pr-6 py-16 border-b border-border">
      <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wide text-foreground mb-4" style={{ WebkitTextStroke: '1.5px currentColor', textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl font-black text-foreground" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}>
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;