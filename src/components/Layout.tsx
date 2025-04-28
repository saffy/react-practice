import { Outlet, NavLink } from 'react-router';
import './layout.css'

const Layout = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <header className="flex-none">
        <h1>Rose's App</h1>
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            viewTransition
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            viewTransition
          >
            Blog
          </NavLink>
        </nav>
      </header>

      <main className="flex flex-grow flex-col justify-center items-center">
        <Outlet />
      </main>

      <footer className="flex-none bg-white">
        <span className="text-sm">
          © Rose's App 2025
        </span>
      </footer>
    </div>
  );
};

export default Layout; 