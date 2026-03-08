import { NavLink } from 'react-router-dom';

const aboutPages = [
  { name: 'Our Story', path: '/about/our-story' },
  { name: 'Hair Quality', path: '/about/sustainability' },
  { name: 'Length Guide', path: '/about/size-guide' },
  { name: 'Customer Care', path: '/about/customer-care' },
  { name: 'Shipping & Info', path: '/about/store-locator' }
];

const AboutSidebar = () => {
  return (
    <aside className="hidden md:block w-64 sticky top-32 h-fit px-6">
      <nav className="space-y-1">
        <h3 className="text-lg font-bold text-primary mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">About</h3>
        {aboutPages.map((page) => (
          <NavLink
            key={page.path}
            to={page.path}
            className={({ isActive }) =>
              `block py-2 text-sm font-bold transition-all drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] ${
                isActive
                  ? 'text-primary underline decoration-2 underline-offset-4'
                  : 'text-foreground hover:text-primary hover:underline hover:decoration-1 hover:underline-offset-4'
              }`
            }
          >
            {page.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AboutSidebar;
