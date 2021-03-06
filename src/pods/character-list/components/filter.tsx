import * as React from 'react';
import styled from 'styled-components';
const STATUS_OPTIONS = {
  dead: 'Dead',
  alive: 'Alive',
  unknown: 'unknown',
};
const STATUS = Object.values(STATUS_OPTIONS).map(option => (
  <option key={option} value={option}>
    {option}
  </option>
));
const GENDER_OPTIONS = {
  male: 'Male',
  female: 'Female',
  genderless: 'Genderless',
  Unknonw: 'unknown',
};
const GENDER = Object.values(GENDER_OPTIONS).map(option => (
  <option key={option} value={option}>
    {option}
  </option>
));

const SPECIES_OPTIONS = {
  ALIEN: 'Alien',
  ANIMAL: 'Animal',
  HUMAN: 'Human',
  HUMANOID: 'Humanoid',
  MYTHOLOG: 'Mytholog',
  ROBOT: 'Robot',
  UNKNOWN: 'Unknown',
};

const SPECIES = Object.values(SPECIES_OPTIONS).map(option => (
  <option key={option} value={option}>
    {option}
  </option>
));

interface Props {
  name: string;
  gender: string;
  status: string;
  specie: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGender: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSpecie: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: React.FC<Props> = props => {
  const {
    gender,
    status,
    specie,
    onChangeGender,
    onChangeStatus,
    onChangeSpecie,
    name,
    onChangeName,
  } = props;
  return (
    <Wrapper>
      <label htmlFor="name">Name</label>
      <Input id="name" value={name} onChange={e => onChangeName(e)}></Input>
      <Select name="status" id="status" value={status} onChange={e => onChangeStatus(e)}>
        <option value="">Select Status</option>
        {STATUS}
      </Select>
      <Select name="gender" id="gender" value={gender} onChange={e => onChangeGender(e)}>
        <option value="">Select Gender</option>
        {GENDER}
      </Select>
      <Select name="species" id="species" value={specie} onChange={e => onChangeSpecie(e)}>
        <option value="">Select Species</option>
        {SPECIES}
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  flex-wrap: wrap;
`;

const Select = styled.select`
  background-color: var(--background-color);
  color: var(--text-color);
`;

const Input = styled.input`
  background-color: var(--background-color);
  color: var(--text-color);
`;

export { Filter };
