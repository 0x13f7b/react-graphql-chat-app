import gql from 'graphql-tag';

const DeleteUserMutation = gql`
mutation($email: String!) {
  deleteUser(email: $email)
}
`;

export { DeleteUserMutation };