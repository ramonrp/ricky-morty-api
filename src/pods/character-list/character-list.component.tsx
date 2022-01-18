import { Link } from 'react-router-dom';
import { Character } from './character-list.vm';
interface Props {
  characters: Character[];
}
const characterCard = (character: Character): JSX.Element => {
  return (
    <Link key={character.id} to={`/${character.id}`}>
      <article>
        <figure>
          <img src={character.image} alt={character.name}></img>
          <figcaption>{character.name}</figcaption>
        </figure>
      </article>
    </Link>
  );
};

const CharacterList: React.FC<Props> = props => {
  const { characters } = props;
  return <div>{characters.map(characterCard)}</div>;
};

export { CharacterList };
