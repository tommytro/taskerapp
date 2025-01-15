import { gql } from 'apollo-angular';

const GET_USERS = gql`
    query GetUsers{
        users{
            id
            userName
        }
    }
`;

const GET_USER_BY_ID = gql`
    query GetUserById($id: ID!){
        user(id: $id){
            id
            userName
            password
        }
    }
`;

const CHECK_USERNAME = gql`
    query CheckUsername($username: String!){
        checkUsername(username: $username){
            id
            userName
        }
    }
`;

export { GET_USERS, GET_USER_BY_ID, CHECK_USERNAME };