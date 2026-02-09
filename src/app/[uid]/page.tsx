import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export const dynamicParams = false;

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  // const page = await client
  //   .getByUID("page", params.uid)
  //   .catch(() => notFound());
  // mock page data
  const page = {
    data: {
      slices: [],
      meta_title: "Medcan",
      meta_description: "Medcan is the relaxing app for you.",
      meta_image: { url: "https://Medcan.com/og-image.png" },
    },
  };

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  // const page = await client.getByUID("page", params.uid);
  // mock page data
  const page = {
    data: {
      meta_title: "Medcan",
      meta_description: "Medcan is the relaxing app for you.",
      meta_image: { url: "https://Medcan.com/og-image.png" },
    },
  };

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
