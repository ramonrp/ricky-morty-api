import { Character } from './api.model';

export function getCharacterById(url: string): Promise<Character> {
  return fetch(url).then(resp => resp.json());
}
