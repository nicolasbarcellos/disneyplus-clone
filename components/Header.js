import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/client";
import ReactTooltip from "react-tooltip";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function Header() {
  const [session] = useSession();
  const router = useRouter();

  return (
    <header
      className="sticky bg-disneyHeader top-0 z-[1000]
    h-[72px] flex items-center px-10 md:px-12"
    >
      <Image
        className="cursor-pointer"
        src="/images/logo.svg"
        alt="Disney Logo"
        width={80}
        height={80}
        onClick={() => router.push("/")}
      />
      {session && (
        <div className="ml-10 hidden md:flex items-center space-x-6">
          <a href="#" className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a
            onClick={() => router.push("/")}
            href="#"
            className="header-link group"
          >
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a href="#" className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a href="#" className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a href="#" className="header-link group">
            <Image
              width={20}
              height={20}
              src="/images/movie-icon.svg"
              alt="movies"
            />
            <span className="span">Movies</span>
          </a>
          <a href="#" className="header-link group">
            <Image
              width={20}
              height={20}
              src="/images/series-icon.svg"
              alt="series"
            />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {session ? (
        <div onClick={signOut} className="ml-auto cursor-pointer mt-4">
          <Image
            data-tip
            data-for="signOutTip"
            width={48}
            height={48}
            className="rounded-full border object-cover"
            src={session.user.image}
            alt="User"
          />
          <ReactTooltip
            className="text-[60px] text-white bg-black/50 rounded p-2"
            id="signOutTip"
            place="left"
            effect="solid"
          >
            Sign out
          </ReactTooltip>
        </div>
      ) : (
        <button
          onClick={signIn}
          className="ml-auto uppercase border px-4 py-1.5
      rounded font-medium tracking-wide hover:bg-white hover:text-black
      transition duration-300"
        >
          Login
        </button>
      )}
    </header>
  );
}
