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

// artists (tableau d'Artist)
// id (chaîne de caractère)
// name (chaîne de caractère)
// release_date (chaîne de caractère au format YYYY-MM-DD)
// total_tracks (nombre)
// images (tableau d'Image)
