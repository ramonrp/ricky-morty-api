import { Character } from './api.model';
interface Response {
  results?: Character[];
  info?: {
    pages: number;
    count: number;
    next: 'string';
    prev: 'string';
  };
  error?: string;
}
export function getCharacters(
  url: string,
  name: string,
  gender: string,
  specie: string,
  status: string,
  page: string
): Promise<Response> {
  const queryName = name ? `&name=${name}` : '';
  const queryGender = gender ? `&gender=${gender}` : '';
  const querySpecie = specie ? `&species=${specie}` : '';
  const queryStatus = status ? `&status=${status}` : '';
  const queryPage = page ? `&page=${page}` : '';
  const endpointQuery = url + '?' + queryName + queryGender + querySpecie + queryStatus + queryPage;
  const hasQueries = queryName || queryGender || querySpecie || queryStatus || queryPage;
  const endpoint = hasQueries ? endpointQuery : url;
  console.log(endpoint);
  return fetch(endpoint).then(resp => resp.json());
}
