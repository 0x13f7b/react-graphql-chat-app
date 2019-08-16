import gql from 'graphql-tag';

const UserTypingMutation = gql`
  mutation($email: String!, $receiverMail: String!) {
    userTyping(email: $email, receiverMail: $receiverMail)
  }
`;

export { UserTypingMutation };