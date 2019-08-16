import gql from 'graphql-tag';

const CreateUserMutation = gql`
mutation($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    name
    email
    id
    messages {
      message
      senderMail
      receiverMail
    }
  }
}
`;

export { CreateUserMutation };