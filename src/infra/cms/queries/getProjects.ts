export default `query {
  allProjects() {
    id,
    title,
    description,
    date,
    slug,
    images {
      alt,
      url,
      id,
      customData
    },
    carousel
  }
}`;
