import { sanityClient } from "@/lib/sanity.client";
import { allProjectsQuery, projectBySlugQuery } from "@/lib/sanity.queries";

export async function getAllProjects() {
  return await sanityClient.fetch(allProjectsQuery);
}

export async function getProjectBySlug(slug: string) {
  return await sanityClient.fetch(projectBySlugQuery, { slug });
}
