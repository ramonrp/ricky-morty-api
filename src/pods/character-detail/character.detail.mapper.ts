import * as api from './api';
import * as vm from './character-detail.vm';

export const characterFromApiToVM = (character: api.Character): vm.Character => {
  return {
    id: character.id,
    name: character.name,
    image: character.image,
    episodes: character.episode.length,
    status: character.status,
    species: character.species,
    gender: character.gender,
    origin: character.origin.name,
    location: character.location.name,
  };
};
