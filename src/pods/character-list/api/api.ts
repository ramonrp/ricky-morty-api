import { Character } from './api.model';
interface Response {
  results: Character[];
  info: {
    pages: number;
  };
}
export function getCharacters(url: string): Promise<Response> {
  return fetch(url).then(resp => resp.json());
}
