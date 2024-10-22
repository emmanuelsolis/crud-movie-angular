export class Movie {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public image: string,
        public releaseYear: number,
        public genre: string,
        public director: string,
        public duration: number,
        public rating: number
    ) {}
    
}