import { generatePath } from 'react-router-dom';
interface SwitchRoutes {
  characterList: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  characterList: '/',
  characterDetail: '/:id',
};

interface Routes extends Omit<SwitchRoutes, 'characterDetail'> {
  characterDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  characterDetail: id => generatePath(switchRoutes.characterDetail, { id }),
};
