import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import poolData from './pollData';

export default (email, password) => {
  const authenticationData = {
    Username: email,
    Password: password,
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userPool = new CognitoUserPool(poolData);
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess(res) {
        const accessToken = res.getAccessToken().getJwtToken();
        cognitoUser.getUserAttributes((err, result) => {
          if (err) {
            reject(err.message || JSON.stringify(err));
          } else {
            resolve(result);
          }
        });
      },
      onFailure(err) {
        reject(err.message || JSON.stringify(err));
      },
    });
  });
};
