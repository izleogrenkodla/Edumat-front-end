import { CognitoUserPool } from 'amazon-cognito-identity-js';
import poolData from './pollData';

export default () => new Promise((resolve, reject) => {
  const userPool = new CognitoUserPool(poolData);
  const cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
    cognitoUser.getSession((err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`session validity: ${session.isValid()}`);

      // NOTE: getSession must be called to authenticate user before calling getUserAttributes
      cognitoUser.getUserAttributes((err, result) => {
        if (err) {
          reject(err.message || JSON.stringify(err));
        } else {
          resolve(result);
        }
      });
    });
  }
});
