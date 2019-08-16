import gql from 'graphql-tag';

const NewUserSubscription = gql`
subscription {
  newUser {
    name
    email
    id
    messages {
      message
      senderMail
      receiverMail
      timestamp
    }
  }
}
`;

export { NewUserSubscription };