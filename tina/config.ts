import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "master";
export default defineConfig({
  branch,
  clientId: process.env.NUXT_TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.NUXT_TINA_TOKEN || "", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "hero", // Menambahkan collection hero untuk pengaturan hero section
        label: "Hero Section",
        path: "content",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "image",
            name: "backgroundImage",
            label: "Background Image",
          },
          {
            type: "string",
            name: "ctaButtonText",
            label: "CTA Button Text",
          },
          {
            type: "string",
            name: "ctaButtonLink",
            label: "CTA Button Link",
          },
        ],
      },
      
    ],
  },
});
