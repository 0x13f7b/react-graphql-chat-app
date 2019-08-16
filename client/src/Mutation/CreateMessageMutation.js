import gql from 'graphql-tag';

const CreateMessageMutation = gql`
  mutation(
    $message: String!
    $senderMail: String!
    $receiverMail: String!
    $timestamp: Float!
  ) {
    createMessage(
      message: $message
      senderMail: $senderMail
      receiverMail: $receiverMail
      timestamp: $timestamp
    ) {
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

export { CreateMessageMutation };
