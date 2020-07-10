import { CognitoUserPool } from 'amazon-cognito-identity-js';
import poolData from './pollData';

export default () => {
  const userPool = new CognitoUserPool(poolData);
  const cognitoUser = userPool.getCurrentUser();
  cognitoUser.signOut();
};
