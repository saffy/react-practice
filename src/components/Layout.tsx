import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex-none text-lg">
        Rose's App
        <nav>
          {/* Add navigation items here later if needed */}
        </nav>
      </header>

      <main className="flex flex-grow flex-col justify-center">
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