import { Character } from './api.model';
export async function getCharacterById(url: string, id: string): Promise<Character> {
  const endpoint = url + id;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('something went wrong', err);
  }
}
