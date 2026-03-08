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
        <h3 className="text-2xl font-black text-primary mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" style={{ WebkitTextStroke: '0.5px currentColor' }}>About</h3>
        {aboutPages.map((page) => (
          <NavLink
            key={page.path}
            to={page.path}
            className={({ isActive }) =>
              `block py-2 text-base font-black transition-all drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] ${
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
