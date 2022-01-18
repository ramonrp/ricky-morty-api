import useSWR from 'swr';
import { getCharacters } from '../api';
import { CharacterListFromApiToVm } from '../character-list.mapper';

const URL = process.env.BASE_RICKY_API;

const useCharacterListToVM = () => {
  const result = useSWR(URL, getCharacters);
  return {
    ...result,
    data: result.data !== undefined ? CharacterListFromApiToVm(result.data.results) : undefined,
  };
};

export { useCharacterListToVM };
