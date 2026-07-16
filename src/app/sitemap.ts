import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tam-hoang-tran.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date() },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
