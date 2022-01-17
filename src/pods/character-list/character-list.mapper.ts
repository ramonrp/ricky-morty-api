import * as api from './api';
import * as vm from './character-list.vm';

const characterFromApiToVM = (character: api.Character): vm.Character => {
  return {
    id: character.id,
    name: character.name,
    image: character.image,
  };
};

export const CharacterListFromApiToVm = (characterList: api.Character[]): vm.Character[] => {
  return characterList.map(character => characterFromApiToVM(character));
};
