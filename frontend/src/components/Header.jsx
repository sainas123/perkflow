import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const username = "User"; // In a real app, this would come from auth state

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Offers', path: '/offers' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Withdraw', path: '/withdraw' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 bg-purple-50/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-black text-purple-900 tracking-tighter">
            PerkFlow
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 shadow-sm bg-white/50 px-6 py-2 rounded-full border border-purple-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-all duration-200 ${isActive(link.path)
                  ? 'text-purple-700 bg-purple-100/50 px-3 py-1 rounded-md'
                  : 'text-purple-600/80 hover:text-purple-900 hover:bg-purple-100/30 px-3 py-1 rounded-md'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-purple-600 hover:text-purple-900 hover:bg-purple-100 rounded-full transition-colors flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full animate-pulse border border-purple-50"></span>
          </button>

          <div className="flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-purple-100 rounded-full cursor-pointer hover:bg-purple-100/50 transition-colors shadow-sm">
            <div className="bg-purple-200 p-1.5 rounded-full text-purple-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="text-sm font-bold text-purple-900">{username}</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
