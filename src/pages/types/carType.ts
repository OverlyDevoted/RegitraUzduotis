export interface Car {
  id: string;
  brand: string;
  model: string;
  manufactureYear: number;
  registrationNumber: string;
  code: string;
}

export type Cars = Car[];
