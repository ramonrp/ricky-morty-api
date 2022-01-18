import { Character } from './api.model';
interface Response {
  results: Character[];
  info: {
    pages: number;
  };
  error?: string;
}
export function getCharacters(url: string, name: string): Promise<Response> {
  const queryName = name ? `?name=${name}` : '';
  const endpoint = url + queryName;
  return fetch(endpoint).then(resp => resp.json());
}
