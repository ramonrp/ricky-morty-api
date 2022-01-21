import * as React from 'react';
import styled from 'styled-components';
import heroImg from '../../assets/statics/RickyMorty.jpg';
import starsImg from '../../assets/statics/star.png';

const useClipPathOnScroll = () => {
  const ref = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      ref.current.style.clipPath = `circle(${value * 3}px at center)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return ref;
};

const Hero: React.FC = () => {
  const imgRef = useClipPathOnScroll();
  return (
    <Wrapper>
      <Img ref={imgRef} src={heroImg}></Img>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${starsImg});
  background-size: 450px;
`;

const Img = styled.img`
  width: 100%;
  clip-path: circle(8vw at center);
  transition: clip-path 1.5s;
`;
export { Hero };
