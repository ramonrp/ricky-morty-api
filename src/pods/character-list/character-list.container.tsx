import { Link } from 'react-router-dom';
import { useCharacterListToVM } from './hooks/useCharacterListToVM';

const CharacterListContainer: React.FC = () => {
  const { data: characters, error } = useCharacterListToVM();
  if (error) return <h1>There was an error fetching characters</h1>;
  if (!characters) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul>
      {characters.map(character => (
        <Link to={`/${character.id}`} key={character.id}>
          <li>{character.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export { CharacterListContainer };
