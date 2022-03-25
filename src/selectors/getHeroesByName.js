import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {

    console.log('ger heroe by name called')

  if (name.length===0)  return [];

  name=name.toLowerCase();

  return heroes.filter((p) => p.superhero.toLowerCase().includes(name));

  
  
};
