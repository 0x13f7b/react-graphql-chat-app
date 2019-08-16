import gql from 'graphql-tag';

const NewMessageSubscription = gql`
  subscription($receiverMail: String!) {
    newMessage(receiverMail: $receiverMail) {
      message
      senderMail
      receiverMail
      id
      timestamp
      users {
        name
        email
      }
    }
  }
`;

export { NewMessageSubscription };