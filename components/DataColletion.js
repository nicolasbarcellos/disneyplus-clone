import { useRouter } from "next/router";
import React from "react";
import { useTmdb } from "../context/TmdbContext";
import DataThumbnail from "./DataThumbnail";

export default function DataCollection() {
  const { popularMovies, topRatedMovies, popularShows, topRatedShows } =
    useTmdb();
  const router = useRouter();

  return (
    <section
      className="relative flex flex-col space-y-4
    my-10 px-8 max-w-[1400px] mx-auto"
    >
      <h2 className="font-semibold">Popular Movies</h2>
      <div
        className="flex space-x-6 overflow-y-hidden overflow-x-scroll
      scrollbar-hide p-2 -m-2 mask-image"
      >
        {popularMovies?.results.map((movie) => (
          <div
            key={movie.id}
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
            <DataThumbnail
              title={movie.title}
              imageThumbnail={movie.poster_path || movie.backdrop_path}
            />
          </div>
        ))}
      </div>

      <h2 className="font-semibold">Top Rated Movies</h2>
      <div
        className="flex space-x-6 overflow-y-hidden overflow-x-scroll
      scrollbar-hide p-2 -m-2 mask-image"
      >
        {topRatedMovies?.results.map((movie) => (
          <div
            key={movie.id}
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
            <DataThumbnail
              title={movie.title}
              imageThumbnail={movie.poster_path || movie.backdrop_path}
            />
          </div>
        ))}
      </div>

      <h2 className="font-semibold">Popular Shows</h2>
      <div
        className="flex space-x-6 overflow-y-hidden overflow-x-scroll
      scrollbar-hide p-2 -m-2 mask-image"
      >
        {popularShows?.results.map((movie) => (
          <div
            key={movie.id}
            onClick={() => router.push(`/show/${movie.id}`)}
          >
            <DataThumbnail
              title={movie.title}
              imageThumbnail={movie.poster_path || movie.backdrop_path}
            />
          </div>
        ))}
      </div>

      <h2 className="font-semibold">Top Rated Shows</h2>
      <div
        className="flex space-x-6 overflow-y-hidden overflow-x-scroll
      scrollbar-hide p-2 -m-2 mask-image"
      >
        {topRatedShows?.results.map((movie) => (
          <div
            key={movie.id}
            onClick={() => router.push(`/show/${movie.id}`)}
          >
            <DataThumbnail
              title={movie.title}
              imageThumbnail={movie.poster_path || movie.backdrop_path}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
