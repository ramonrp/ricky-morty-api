import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterList, CharacterDetail, About } from 'scenes';
import { AppLayout } from 'layouts';
const AppRouter: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path={switchRoutes.characterList} element={<CharacterList />}></Route>
          <Route path={switchRoutes.about} element={<About />}></Route>
          <Route path={switchRoutes.characterDetail} element={<CharacterDetail />}></Route>
        </Routes>
      </AppLayout>
    </Router>
  );
};

export { AppRouter };
