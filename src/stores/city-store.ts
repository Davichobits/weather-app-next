import { createStore } from 'zustand';

export type CityState = {
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  }
}

export type CityActions = {
  updateCity: ({city, country, coordinates}: CityState)=> void;
}

export type CityStore = CityState & CityActions;

export const initCityStore = (): CityState => {
  return {
    city: 'Berlin',
    country: 'Germany',
    coordinates: {
      latitude: 52.52437,
      longitude: 13.41053,
    }
  }
}

export const defaultInitState: CityState = {
  city: 'Berlin',
  country: 'Germany',
  coordinates: {
    latitude: 52.52437,
    longitude: 13.41053,
  }
}

export const createCityStore = (initState: CityState = defaultInitState) => {
  return createStore<CityStore>()((set)=>({
    ...initState,
    updateCity: ({city, country, coordinates}: CityState) => set(()=>({
      city,
      country,
      coordinates
    }))
  }))
}