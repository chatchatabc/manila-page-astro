export function utilSlugToTitle(slug: string): string {
  const splitted = slug.split("-");
  const capitalized = splitted.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join(" ");
}
