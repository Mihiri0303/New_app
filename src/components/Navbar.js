import React from 'react';

function Nav() {
  return(
  <div className="bg-green-900">
    <div className="max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="relative flex items-center gap-2 py-4">
          <div className="text-2xl font-mono font-bold mr-5 text-white">
            Senadeera Groom Design
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <input class="border-2 w-1/4 border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="search" name="search" placeholder="Search"/>
      </div>
    </div>
  </div>
  );
}

export default Nav;