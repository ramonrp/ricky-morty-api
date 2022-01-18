import useSWR from 'swr';
import { getCharacters } from '../api';
import { CharacterListFromApiToVm } from '../character-list.mapper';

const URL = process.env.BASE_RICKY_API;

const useCharacterListToVM = (
  name: string,
  gender: string,
  specie: string,
  status: string,
  page: string
) => {
  const response = useSWR([URL, name, gender, specie, status, page], getCharacters);
  return {
    ...response,
    characters:
      response.data !== undefined ? CharacterListFromApiToVm(response.data.results) : undefined,
  };
};

export { useCharacterListToVM };
