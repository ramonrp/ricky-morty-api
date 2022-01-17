import { generatePath } from 'react-router-dom';
interface SwitchRoutes {
  about: string;
  characterList: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  about: '/about',
  characterList: '/',
  characterDetail: 'characters/:id',
};

interface Routes extends Omit<SwitchRoutes, 'characterDetail'> {
  characterDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  characterDetail: id => generatePath(switchRoutes.characterDetail, { id }),
};
