export function utilSlugToTitle(slug: string): string {
  const splitted = slug.split("-");
  const capitalized = splitted.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join(" ");
}

export function utilRemoveTrailSlash(slug: string): string {
  // Remove trailing slash at the end of the slug
  if (slug === "/") {
    return slug;
  }
  if (slug.charAt(slug.length - 1) === "/") {
    return slug.slice(0, slug.length - 1);
  }
  return slug;
}
