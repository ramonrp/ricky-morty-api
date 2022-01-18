import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacterListToVM } from './hooks/useCharacterListToVM';

const CharacterListContainer: React.FC = () => {
  const [name, setName] = useState('');
  const { data: characters, error } = useCharacterListToVM(name);
  console.log(error);
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
