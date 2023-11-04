interface Movie {
  _id: string;
  name: string;
  description: string;
  casts: string[];
  trailerUrl: string;
  language: string;
  director: string;
  poster: string;
  releaseDate: string;
  releaseStatus: string;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
}

export default Movie;
