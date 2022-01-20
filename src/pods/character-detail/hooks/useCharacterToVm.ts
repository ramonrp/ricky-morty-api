import useSWR from 'swr';
import { Character } from '../character-detail.vm';
import { characterFromApiToVM } from '../character.detail.mapper';
import { getCharacterById } from '../api';
const URL = 'https://rickandmortyapi.com/api/character/';
const useCharacterToVM = (id: string) => {
  const result = useSWR([URL, id], getCharacterById);
  return {
    ...result,
    data: result.data !== undefined ? characterFromApiToVM(result.data) : undefined,
  };
};

export { useCharacterToVM };
