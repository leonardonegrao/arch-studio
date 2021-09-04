import { gql } from '../CMSClient';

export default gql`
query {
  allProjects {
    id
    title
    description,
    date
    slug
    images {
      alt
      url
      id
      customData
    }
    carousel
  }
}`;
