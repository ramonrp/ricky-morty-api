interface CharacterLocation {
  name: string;
  url: string;
}
interface Origin {
  name: string;
  url: string;
}

export interface Character {
  created: string;
  episode: string[];
  gender: 'unknown' | 'Female' | 'Male' | 'Genderless';
  id: number;
  image: string;
  location: CharacterLocation;
  origin: Origin;
  name: string;
  species: string;
  status: 'Dead' | 'Alive' | 'unknown';
  type: string;
  url: string;
}
