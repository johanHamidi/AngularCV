export class Experiencespro {
  // @ts-ignore
  nameCompany: string;
  // @ts-ignore
  lieu: string;
  // @ts-ignore
  date: string;
  // @ts-ignore
  descriptif: string;

  constructor(obj?: Partial<Experiencespro>) {
    Object.assign(this, obj);
  }

}
