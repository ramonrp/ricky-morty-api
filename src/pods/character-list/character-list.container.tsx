import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { useCharacterListToVM } from './hooks/useCharacterListToVM';
import { Filter } from './components/filter';
const CharacterListContainer: React.FC = () => {
  const [name, setName] = useState('');
  const [nameDebounced] = useDebounce(name, 500);
  const [gender, setGender] = useState('');
  const [specie, setSpecie] = useState('');
  const [status, setStatus] = useState('');
  const { data: characters, error } = useCharacterListToVM(nameDebounced, gender, specie, status);
  if (error) return <h1>There was an error fetching characters</h1>;
  if (!characters) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Filter
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
        specie={specie}
        setSpecie={setSpecie}
        name={name}
        setName={setName}
      />
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
