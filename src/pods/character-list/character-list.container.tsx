import { useState, ChangeEvent } from 'react';
import { useDebounce } from 'use-debounce';
import styled from 'styled-components';
import { useCharacterListToVM } from './hooks/useCharacterListToVM';
import { Filter } from './components/filter';
import { Pagination } from './components/pagination';
import { CharacterList } from './character-list.component';
const CharacterListContainer: React.FC = () => {
  const [name, setName] = useState('');
  const [nameDebounced] = useDebounce(name, 500);
  const [gender, setGender] = useState('');
  const [specie, setSpecie] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);
  const { data, characters, error } = useCharacterListToVM(
    nameDebounced,
    gender,
    specie,
    status,
    String(page)
  );
  const { characters: nextCharacters, data: nextData } = useCharacterListToVM(
    nameDebounced,
    gender,
    specie,
    status,
    String(page + 1)
  );
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setPage(1);
  };
  const handleGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
    setPage(1);
  };
  const handleSpecie = (e: ChangeEvent<HTMLSelectElement>) => {
    setSpecie(e.target.value);
    setPage(1);
  };
  const handleStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    setPage(1);
  };
  const handleNext = () => {
    if (!nextData?.info?.next) return;
    setPage(page + 1);
  };
  const handlePrev = () => {
    if (!data?.info?.prev) return;
    setPage(page - 1);
  };
  if (error) return <h1>There was an error fetching characters</h1>;
  return (
    <>
      <Filter
        gender={gender}
        onChangeGender={handleGender}
        status={status}
        onChangeStatus={handleStatus}
        specie={specie}
        onChangeSpecie={handleSpecie}
        name={name}
        onChangeName={handleName}
      />
      <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext} />
      {!data && <Loading>Loading...</Loading>}
      <CharacterList characters={characters} />
      {/* Improve UI experience download next page info */}
      <div style={{ display: 'none' }}>
        <CharacterList characters={nextCharacters} />
      </div>
      <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext} />
    </>
  );
};

export { CharacterListContainer };

const Loading = styled.div`
  text-align: center;
  font-size: 3rem;
  padding: 32px;
`;
