import { gql } from '../CMSClient';

export default gql`
query {
  allLeaders {
    id
    fullName
    companyRole
    profilePicture {
      url
    }
    linkedinUrl
    twitterUrl
  }
}`;
