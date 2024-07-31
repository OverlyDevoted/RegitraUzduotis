export interface BaseCar {
  id: string;
  registrationNumber: string;
  code: string;
}

export type NamedBaseCar = Omit<BaseCar, 'code'> & { typeName: string };

export type NamedBaseCars = NamedBaseCar[];
export type BaseCars = BaseCar[];

export interface DetailedCar {
  id: string;
  brand: string;
  model: string;
  manufactureYear: number;
}
