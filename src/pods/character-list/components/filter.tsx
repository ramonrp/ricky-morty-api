import * as React from 'react';
const STATUS_OPTIONS = {
  dead: 'Dead',
  alive: 'Alive',
  unknown: 'unkown',
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
  Unknonw: 'Unknown',
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
  setName: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setSpecie: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<Props> = props => {
  const { gender, status, specie, setGender, setStatus, setSpecie, name, setName } = props;
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={e => setName(e.target.value)}></input>
      <select name="status" id="status" value={status} onChange={e => setStatus(e.target.value)}>
        <option value="">Select Status</option>
        {STATUS}
      </select>
      <select name="gender" id="gender" value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        {GENDER}
      </select>
      <select name="species" id="species" value={specie} onChange={e => setSpecie(e.target.value)}>
        <option value="">Select Species</option>
        {SPECIES}
      </select>
    </div>
  );
};

export { Filter };
