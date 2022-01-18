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

const Filter: React.FC = () => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name"></input>
      <select name="status" id="status">
        <option value="">Select Status</option>
        {STATUS}
      </select>
      <select name="gender" id="gender">
        <option value="">Select Gender</option>
        {GENDER}
      </select>
      <select name="species" id="species">
        <option value="">Select Species</option>
        {SPECIES}
      </select>
    </div>
  );
};

export { Filter };
