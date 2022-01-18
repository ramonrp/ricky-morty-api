import useSWR from 'swr';
import { Character } from '../character-detail.vm';
import { characterFromApiToVM } from '../character.detail.mapper';
import { getCharacterById } from '../api';
const URL = process.env.BASE_RICKY_API;
const useCharacterToVM = (id: string) => {
  const result = useSWR([URL, id], getCharacterById);
  return {
    ...result,
    data: result.data !== undefined ? characterFromApiToVM(result.data) : undefined,
  };
};

export { useCharacterToVM };
