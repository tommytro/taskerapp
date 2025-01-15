import { gql } from 'apollo-angular';

const CREATE_USER = gql`
    mutation CreateUser($userName: String!, $email: String!, $password: String!) {
        createUser(userName: $userName, email: $email, password: $password) {
            id
            userName
            email
            password
        }
    }
`;

export { CREATE_USER };