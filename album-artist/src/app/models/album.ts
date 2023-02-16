import { Artist } from "./artist";
import { Image } from "./image";

export class Album {
    artists!: Artist[];
    id!: string;
    name!: string;
    release_date!: "YYYY MM DD";
    total_tracks!: number;
    images!: Image[];

}