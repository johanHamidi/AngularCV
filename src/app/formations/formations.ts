export class Formations {
  // @ts-ignore
  ecole: string;
  // @ts-ignore
  formationsName: string;
  // @ts-ignore
  anneeEcole: string;

  constructor(obj?: Partial<Formations>) {
    Object.assign(this, obj);
  }

}
