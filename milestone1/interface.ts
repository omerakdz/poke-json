export interface Pokemon {
    id: number;
    name: string;
    description: string;
    level: number;
    isActive: boolean;
    birthDate: string; 
    imageUrl: string;
    type: string;
    abilities: string[];
    trainer: Trainer;
  }
  
  export interface Trainer {
    id: number;
    name: string;
    age: number;
    region: string;
    hasChampionTitle: boolean;
  }