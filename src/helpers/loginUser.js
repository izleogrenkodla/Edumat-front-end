import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
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
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess(result) {
      const accessToken = result.getAccessToken().getJwtToken();

      // POTENTIAL: Region needs to be set if not already set previously elsewhere.
      AWS.config.region = 'eu';

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.VUE_APP_COGNITO_USER_POOL_ID, // your identity pool id here
        Logins: {
          // Change the key below according to the specific region your user pool is in.
          [`cognito-idp.eu.amazonaws.com/${process.env.VUE_APP_COGNITO_USER_POOL_ID}`]: result
            .getIdToken()
            .getJwtToken(),
        },
      });

      // refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
      AWS.config.credentials.refresh((error) => {
        if (error) {
          console.error(error);
        } else {
          // Instantiate aws sdk service objects now that the credentials have been updated.
          // example: var s3 = new AWS.S3();
          console.log('Successfully logged!');
        }
      });
    },

    onFailure(err) {
      console.log(err.message || JSON.stringify(err));
    },
  });
};
