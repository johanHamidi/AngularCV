export class Profil {
  // @ts-ignore
  nom: string;
  // @ts-ignore
  prenom: string;
  ddn?: string;
  // @ts-ignore
  mail: string;
  // @ts-ignore
  adresse: string;
  // @ts-ignore
  permis: string;
  // @ts-ignore
  num: string;

  constructor(obj?: Partial<Profil>) {
    Object.assign(this, obj);
  }

}
