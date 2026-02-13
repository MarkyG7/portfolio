export const allProjectsQuery = `
*[_type == "project"] | order(order asc, _createdAt desc) {
  title,
  "slug": slug.current,
  description,
  url,
  brief,
  style,
  features,
  reflection,
  featured,
  order,
  collage,
  gallery
}
`;

export const projectBySlugQuery = `
*[_type == "project" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  description,
  url,
  brief,
  style,
  features,
  reflection,
  featured,
  order,
  collage,
  gallery
}
`;
