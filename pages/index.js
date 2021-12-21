import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MainApp from "../components/MainApp";
import { useTmdb } from "../context/TmdbContext";
import axios from "axios";
import { useEffect } from "react";

export default function Home({
  session,
  popularMoviesRes,
  popularShowsRes,
  topRatedMoviesRes,
  topRatedShowsRes,
}) {
  const {
    setPopularMovies,
    setPopularShows,
    setTopRatedMovies,
    setRatedShows,
  } = useTmdb();


  useEffect(() => {
    setPopularMovies(popularMoviesRes);
    setPopularShows(popularShowsRes);
    setTopRatedMovies(topRatedMoviesRes);
    setRatedShows(topRatedShowsRes);
  }, []);

  return (
    <div>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? <Hero /> : <MainApp />}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const [
    { data: popularMoviesRes },
    { data: popularShowsRes },
    { data: topRatedMoviesRes },
    { data: topRatedShowsRes },
    ,
  ] = await Promise.all([
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page-1`
    ),
    axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page-1`
    ),
    axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page-1`
    ),
    axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US `
    ),
  ]);

  console.log(popularShowsRes);

  return {
    props: {
      session,
      popularMoviesRes,
      popularShowsRes,
      topRatedMoviesRes,
      topRatedShowsRes,
    },
  };
}
