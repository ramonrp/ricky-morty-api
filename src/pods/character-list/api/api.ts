import { Character } from './api.model';

export function getCharacters(url) {
  return fetch(url).then(resp => resp.json());
}
