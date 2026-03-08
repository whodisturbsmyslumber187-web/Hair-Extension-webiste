interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="pr-6 py-16 border-b border-white/20">
      <h1 className="text-5xl md:text-6xl uppercase tracking-wide mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
