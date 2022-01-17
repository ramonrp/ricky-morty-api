import * as React from 'react';
const AppLayout: React.FC = ({ children }) => {
  return (
    <div>
      <header></header>
      <div></div>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export { AppLayout };
