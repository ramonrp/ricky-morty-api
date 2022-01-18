import useSWR from 'swr';
import { getCharacters } from '../api';
import { CharacterListFromApiToVm } from '../character-list.mapper';

const URL = process.env.BASE_RICKY_API;

const useCharacterListToVM = (name: string) => {
  const result = useSWR([URL, name], getCharacters);
  return {
    ...result,
    data: result.data !== undefined ? CharacterListFromApiToVm(result.data.results) : undefined,
  };
};

export { useCharacterListToVM };
