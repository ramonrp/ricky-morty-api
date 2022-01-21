import { PropsWithChildren } from 'react';
import styled from 'styled-components';
interface Props {
  page: number;
  totalPages: number;
  handleNext: () => void;
  handlePrev: () => void;
}
const Pagination: React.FC<Props> = props => {
  const { page, handleNext, handlePrev, totalPages } = props;
  return (
    <Wrapper>
      <Button onClick={handlePrev}>prev</Button>
      {page} / {totalPages}
      <Button onClick={handleNext}>next</Button>
    </Wrapper>
  );
};

export { Pagination };

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  gap: 16px;
`;

const Button = styled.button`
  background-color: var(--background-color);
  color: var(--text-color);
  cursor: pointer;
  border: var(--text-color) solid 1px;
`;
