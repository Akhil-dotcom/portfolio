import React from 'react';
import Header from './Header';

interface Layout{
    children: React.ReactNode
}

function Layout({ children }: Layout) {
  return <div>
      <Header />
      <div>{children}</div>
  </div>;
}

export default Layout;
