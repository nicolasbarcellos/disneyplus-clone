import { createContext, useContext, useState } from "react";

export const TmdbContext = createContext([]);

export const TmdbProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState();

  const [popularShows, setPopularShows] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [topRatedShows, setRatedShows] = useState();

  return (
    <TmdbContext.Provider
      value={{
        setPopularMovies,
        setPopularShows,
        setTopRatedMovies,
        setRatedShows,
        popularMovies,
        popularShows,
        topRatedMovies,
        topRatedShows,
      }}
    >
      {children}
    </TmdbContext.Provider>
  );
};

export const useTmdb = () => {
  const context = useContext(TmdbContext);
  return context;
};
