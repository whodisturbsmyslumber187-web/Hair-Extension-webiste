interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="pr-6 py-16 border-b border-border">
      <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '0.5px currentColor' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg font-bold text-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;