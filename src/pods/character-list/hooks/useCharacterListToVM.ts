import useSWR from 'swr';
import { getCharacters } from '../api';
import { CharacterListFromApiToVm } from '../character-list.mapper';

const URL = 'https://rickandmortyapi.com/api/character/';

const useCharacterListToVM = (
  name: string,
  gender: string,
  specie: string,
  status: string,
  page: string
) => {
  const response = useSWR([URL, name, gender, specie, status, page], getCharacters);
  let characters;
  if (response.data) {
    if (response.data.error === undefined) {
      characters = CharacterListFromApiToVm(response.data.results);
    }
  }
  return {
    ...response,
    characters,
  };
};

export { useCharacterListToVM };
