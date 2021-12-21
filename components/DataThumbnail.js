import Image from "next/image";
import React from "react";

export default function DataThumbnail({ title, imageThumbnail }) {
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="thumbnail">
        <Image
          src={`${BASE_URL_IMAGE}${imageThumbnail}`}
          width={220}
          height={300}
          objectFit="cover"
          className="rounded-lg"
          alt={title}
        />

    </div>
  );
}
