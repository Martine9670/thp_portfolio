export async function fetchPage(slug) {
  const response = await fetch(
    `http://localhost:1337/api/pages?filters[slug][$eq]=${slug}&populate=content`
  );

  const data = await response.json();
  return data.data[0];
}
