import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Character } from './character-list.vm';
interface Props {
  characters: Character[];
}
const characterCard = (character: Character): JSX.Element => {
  return (
    <Article key={character.id}>
      <CharacterLink to={`/${character.id}`}>
        <Figure>
          <ImgWrapper>
            <Img src={character.image} alt={character.name}></Img>
          </ImgWrapper>
          <figcaption>{character.name}</figcaption>
        </Figure>
      </CharacterLink>
    </Article>
  );
};

const CharacterList: React.FC<Props> = props => {
  const { characters } = props;
  return <Wrapper>{characters.map(characterCard)}</Wrapper>;
};

export { CharacterList };

const Wrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--text-color);
  background-color: var(--background-color);
`;

const CharacterLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  &:hover {
    text-decoration: underline;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
`;

const Article = styled.article`
  max-width: 500px;
  opacity: 0.5;
  transition: opacity 300ms;
  position: relative;
  &:hover {
    opacity: 1;
  }
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: -5px;
    background: var(--border-linear-gradient);
    z-index: -1;
    filter: blur(40px);
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: -3px;
    background: var(--border-linear-gradient);
    z-index: -1;
  }
`;
