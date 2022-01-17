export function getCharacterById(url, id) {
  return fetch(url + id).then(resp => console.log(resp));
}
