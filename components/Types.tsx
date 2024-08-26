export interface Asana {
    id: number;
    sanskritName: string;
    englishName: string;
    icon: string;
    description: string;
    [key: string]: any; // If there are any additional unknown properties, otherwise specify them.
  }