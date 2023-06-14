// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// export const client = createClient({
//   projectId: "8euly06w",
//   dataset: "production",
//   apiVersion: "2023-05-05",
//   useCdn: true,
//   token: process.env.REACT_APP_SANITY_TOKEN,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = source => builder.image(source);

// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "8euly06w",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2021-10-21", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
