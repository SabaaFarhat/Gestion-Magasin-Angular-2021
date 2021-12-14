import { ImagesStock } from "./ImagesStock";

export class Stock {
  idStock!: number;
  qteStock!: number;
  qteMin!: number;
  libelleStock!: string;
  imgs !: ImagesStock[];
  createdAt!: Date;
	updatedAt!: Date;
  state!:Boolean;
}
