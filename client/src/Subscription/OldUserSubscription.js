import gql from 'graphql-tag';

const OldUserSubscription = gql`
  subscription {
    oldUser
  }
`;

export { OldUserSubscription };
