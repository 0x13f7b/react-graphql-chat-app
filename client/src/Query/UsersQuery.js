import gql from 'graphql-tag';

const UsersQuery = gql`
  query {
    users {
      id
      name
      email
      messages {
        message
        senderMail
        receiverMail
      }
    }
  }
`;

export { UsersQuery };
