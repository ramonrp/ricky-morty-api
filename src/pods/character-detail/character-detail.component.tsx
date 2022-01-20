import { Character } from './character-detail.vm';
import styled from 'styled-components';
interface Props {
  character: Character;
}
const CharacterDetail: React.FC<Props> = ({ character }) => {
  const { name, image, episodes, status, species, gender, origin, location } = character;
  return (
    <Wrapper>
      <CharacterWrapper>
        <Title>{name}</Title>
        <div>
          <Img src={image}></Img>
        </div>
        <p>Episodes: {episodes}</p>
        <p>Status: {status}</p>
        <p>Specie: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
        <p>Last known location: {location}</p>
      </CharacterWrapper>
    </Wrapper>
  );
};

export { CharacterDetail };

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
`;

const CharacterWrapper = styled.div`
  max-width: 300px;
`;
