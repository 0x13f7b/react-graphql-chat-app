import gql from 'graphql-tag';

const UserTypingSubscription = gql`
  subscription($receiverMail: String!) {
    userTyping(receiverMail: $receiverMail)
  }
`;

export { UserTypingSubscription };