import * as React from 'react';
const AppLayout: React.FC = ({ children }) => {
  return (
    <div>
      <header>Header</header>
      <div>Hero</div>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export { AppLayout };
