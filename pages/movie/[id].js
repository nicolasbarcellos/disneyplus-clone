import axios from "axios";
import { useSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PlusIcon, XIcon } from "@heroicons/react/solid";
import ReactPlayer from "react-player";
import Loader from '../../components/Loader'

export default function Data({ detail }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original/";
  const [session] = useSession();
  const router = useRouter();


  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  if (detail) {
    const index = detail.videos.results.findIndex(
      (element) => element.type === "Trailer"
    );
  }

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div>
      <Head>
        <title>Disney | {detail.title}</title>
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)] 
           opacity-80">
            <Image
              src={`${BASE_URL_IMAGE}${
                detail.backdrop_path || detail.poster_path
              }`}
              layout="fill"
              objectFit='cover'
              alt={detail.title}
            />
          </div>
          <div
            className="absolute inset-y-28 md:inset-y-auto 
          md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50"
          >
            <h1
              className="text-3xl sm:text-4xl
            md:text-5xl font-bold"
            >
              {detail.title || detail.original_name}
            </h1>

            <div className="flex items-center space-x-3 md:space-x-5">
              <button
                className="text-xs md:text-base bg-bodyText text-black
              flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              >
                <img
                  className="h-6 md:h-8"
                  src="/images/play-icon-black.svg"
                  alt="Play"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>
              <button
                onClick={() => setShowPlayer(true)}
                className="text-xs md:text-base bg-black/30 text-bodyText
                border border-bodyText flex items-center justify-center 
                py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              >
                <img
                  className="h-6 md:h-8"
                  src="/images/play-icon-white.svg"
                  alt="Trailer"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>
              <div
                className="rounded-full border-2 border-white cursor-pointer
              h-11 w-11 flex items-center justify-center bg-black/60"
              >
                <PlusIcon className="h-6" />
              </div>
              <div
                className="rounded-full border-2 border-white cursor-pointer
              h-11 w-11 flex items-center justify-center bg-black/60"
              >
                <img src="/images/group-icon.svg" alt="group" />
              </div>
            </div>

            <p>
              {detail.release_date || detail.first_air_date} •{" "}
              {Math.floor(detail.runtime / 60)}h {detail.runtime % 60}m •{" "}
              {detail.genres.map((genre) => genre.name + " ")}
            </p>
            <h4 className="text-sm md:text-lg max-w-4xl">{detail.overview}</h4>
          </div>

          {/* bg overlay */}
          {showPlayer && (
            <div
            onClick={() => setShowPlayer(false)}
              className="absolute inset-0 bg-black opacity-50 h-full w-full 
            z-50"
            />
          )}
          <div
         
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded 
            overflow-hidden transition duration-1000 ${
              showPlayer ? "opacity-100 z-50" : "opacity-0"
            }`}
          >
            <div
              className="flex items-center justify-between bg-black text-bodyText
            p-3.5"
            >
              <span className="font-semibold">Play Trailer</span>
              <div
                className="cursor-pointer hover:opacity-75 transition duration-300"
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className="h-5" />
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${detail.videos?.results[index]?.key}`}
                style={{ position: "absolute", top: "0", left: "0" }}
                width="100%"
                height="100%"
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const { data: detail } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`
  );

  return {
    props: {
      detail,
    },
    revalidate: 3600, // 1 hour
  };
};

// 1 - colocar loading usando react spinner
// 2 - arrumar fetch dos shows
// 3 - arrumar mobile
// 4 - colocar opacity no canto da lista
// 5 - fazer botão de search igual do tmdb-ish
// 6 - fechar trailer ao clicar fora 
// 7 - fazer janela de signup ao hover a foto
// 8 - mudar imagems dos filmes igual do tmdb-ish