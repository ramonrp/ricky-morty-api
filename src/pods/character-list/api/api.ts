import { Character } from './api.model';
interface Response {
  results?: Character[];
  info?: {
    pages: number;
  };
  error?: string;
}
export function getCharacters(
  url: string,
  name: string,
  gender: string,
  specie: string,
  status: string
): Promise<Response> {
  const queryName = name ? `&name=${name}` : '';
  const queryGender = gender ? `&gender=${gender}` : '';
  const querySpecie = specie ? `&specie=${specie}` : '';
  const queryStatus = status ? `&status=${status}` : '';
  const endpointQuery = url + '?' + queryName + queryGender + querySpecie + queryStatus;
  const hasQueries = queryName || queryGender || querySpecie || queryStatus;
  const endpoint = hasQueries ? endpointQuery : url;
  console.log(endpoint);
  return fetch(endpoint).then(resp => resp.json());
}
