import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

export default ({
  email, name, school, gender,
}) => {
  const poolData = {
    UserPoolId: process.env.COGNITO_USER_POOL_ID,
    ClientId: process.env.COGNITO_CLIENT_ID,
  };
  const userPool = new CognitoUserPool(poolData);

  const attributeList = [];

  const dataEmail = {
    Name: 'email',
    Value: email,
  };

  const dataName = {
    Name: 'name',
    Value: name,
  };
  const dataSchool = {
    Name: 'school',
    Value: school,
  };
  const dataGender = {
    Name: 'gender',
    Value: gender,
  };
  const attributeEmail = new CognitoUserAttribute(dataEmail);
  const attributeName = new CognitoUserAttribute(dataName);
  const attributeSchool = new CognitoUserAttribute(dataSchool);
  const attributeGender = new CognitoUserAttribute(dataGender);

  attributeList.push(attributeEmail);
  attributeList.push(attributeName);
  attributeList.push(attributeSchool);
  attributeList.push(attributeGender);

  userPool.signUp('username', 'password', attributeList, null, (err, result) => {
    if (err) {
      console.error(err.message || JSON.stringify(err));
      return;
    }
    const cognitoUser = result.user;
    console.log(`user name is ${cognitoUser.getUsername()}`);
  });
};
