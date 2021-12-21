import Head from "next/head";
import React from "react";

import { getProviders, signIn as SignIntoProvider } from "next-auth/client";
import Link from "next/link";
import Image from "next/image";

function signIn({ providers }) {
  return (
    <>
      <Head>
        <title>Login | Disney+</title>
      </Head>
      <div className="w-full flex flex-col items-center">
        <div className="w-[150px] h-[150px] sm:w-[200px] md:h-[200px] relative">
          <Link href="/auth/signin" passHref>
            <Image
              className="cursor-pointer"
              alt="Disney"
              src="/images/logo.svg"
              layout="fill"
            />
          </Link>
        </div>

        <p className="font-semibold text-[24px] tracking-wide">
          Log in with your Google account
        </p>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="bg-[#0072d2] uppercase font-bold text-md tracking-wider
            rounded py-2 px-8 mt-4 hover:opacity-95"
              onClick={() =>
                SignIntoProvider(provider.id, { callbackUrl: "/" })
              }
            >
              login
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default signIn;
