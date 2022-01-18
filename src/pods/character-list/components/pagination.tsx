import { PropsWithChildren } from 'react';

interface Props {
  page: number;

  handleNext: () => void;
  handlePrev: () => void;
}
const Pagination: React.FC<Props> = props => {
  const { page, handleNext, handlePrev } = props;
  return (
    <div>
      <button onClick={handlePrev}>prev</button>
      {page}
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export { Pagination };
