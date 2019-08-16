import gql from 'graphql-tag';

const MessageQuery = gql`
  query {
    messages {
      id
      message
      senderMail
      receiverMail
      timestamp
      users {
        name
        email
      }
    }
  }
`;

export { MessageQuery };