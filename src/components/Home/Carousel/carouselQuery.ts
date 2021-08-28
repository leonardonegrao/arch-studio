const QUERY = `query {
  allProjects(filter: { carousel: { eq: true } }) {
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

export { QUERY };
