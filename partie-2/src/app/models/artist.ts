import { Image } from "./image";

export class Artist {
    followers !: { total: number };
    id!: string;
    images !: Image[];
    name!: string;
}
