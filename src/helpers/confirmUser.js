import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import poolData from './pollData';

export default ({ email, verificationCode }) => {
  const userPool = new CognitoUserPool(poolData);
  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);
  return new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(verificationCode.join(''), true, (err, result) => {
      if (err) {
        reject(err.message || JSON.stringify(err));
      } else {
        resolve();
      }
    });
  });
};
