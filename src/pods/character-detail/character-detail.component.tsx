import { Character } from './character-detail.vm';
interface Props {
  character: Character;
}
const CharacterDetail: React.FC<Props> = ({ character }) => {
  const { name, image, episodes, status, species, gender, origin, location } = character;
  return (
    <div>
      <img src={image}></img>
      <p>name: {name}</p>
      <p>episodes: {episodes}</p>
      <p>status: {status}</p>
      <p>specie: {species}</p>
      <p>gender: {gender}</p>
      <p>origin: {origin}</p>
      <p>last known location: {location}</p>
    </div>
  );
};

export { CharacterDetail };
