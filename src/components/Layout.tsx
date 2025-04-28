import { Outlet, Link } from 'react-router';

const Layout = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <header className="flex-none">
        <h1>Rose's App</h1>
        <nav>
          <Link to="/">Home</Link>
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