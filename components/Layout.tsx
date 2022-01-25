import React from 'react';
import Header from './Header';
import { useRouter } from 'next/router'

interface Layout{
    children: React.ReactNode
}

function Layout({ children }: Layout) {
  const router = useRouter()
  return <div>
      {router.pathname === "/" && <Header /> }
      <div>{children}</div>
  </div>;
}

export default Layout;
