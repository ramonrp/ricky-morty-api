import * as React from 'react';
import { Header } from './components';
import { Hero } from './components';
const AppLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export { AppLayout };
