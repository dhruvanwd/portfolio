import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarCss() {
  const location = useLocation();
  console.log(location);

  const TABS = [
    {
      name: 'Timeline',
      path: '/',
    },
    {
      name: 'Skills and Languages',
      path: '/skills',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
  ];
  return (
    <nav className="bg-gray-800 ml-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-14">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              {TABS.map((t) => (
                <>
                  <Link
                    to={t.path}
                    key={t.name}
                    className={`${
                      location.pathname === t.path
                        ? 'bg-green-800 hover:bg-gray-900'
                        : ' hover:bg-gray-700'
                    } text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm font-medium`}
                  >
                    {t.name}
                  </Link>
                </>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}