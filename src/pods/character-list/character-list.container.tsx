import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacterListToVM } from './hooks/useCharacterListToVM';
import { useDebounce } from 'use-debounce';
const CharacterListContainer: React.FC = () => {
  const [name, setName] = useState('');
  const [nameDebounced] = useDebounce(name, 500);
  const { data: characters, error } = useCharacterListToVM(nameDebounced);
  if (error) return <h1>There was an error fetching characters</h1>;
  if (!characters) {
    return <h1>Loading...</h1>;
  }
  console.log(!Array.isArray(characters));

  return (
    <>
      <input
        onChange={e => {
          setName(e.target.value);
        }}
        value={name}
      ></input>
      <ul>
        {characters.map(character => (
          <Link to={`/${character.id}`} key={character.id}>
            <li>{character.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export { CharacterListContainer };
