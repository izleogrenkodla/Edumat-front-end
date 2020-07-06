import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import poolData from './pollData';

export default ({ email, verificationCode }) => {
  const userPool = new CognitoUserPool(poolData);
  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);
  cognitoUser.confirmRegistration(verificationCode.join(''), true, (err, result) => {
    if (err) {
      console.log(err.message || JSON.stringify(err));
      return;
    }
    console.log(`call result: ${result}`);
  });
};
