export interface IResponse<T> {
  results: T;
}

export interface IHero {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[]; // points to the /species resource, an array of urls
  starships: string[]; // points to the /starships resource, an array of urls
  url: string;
  vehicles: string[]; // points to the /vehicles resource, an array of urls
}

export interface IPlanet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[]; // points to the /films resource, an array of urls
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[]; // points to the /people resource, an array of urls
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IVehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[]; // points to the /people resource, an array of urls
  films: string[]; // points to the /films resource, an array of urls
  url: string;
  vehicle_class: string;
}
