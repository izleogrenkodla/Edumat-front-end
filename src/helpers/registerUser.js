import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import poolData from './pollData';

export default ({
  email, name, education, gender, password,
}) => {
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
  const dataGender = {
    Name: 'gender',
    Value: gender,
  };
  // const dataEducation = {
  //   Name: 'education',
  //   Value: education,
  // };

  const attributeEmail = new CognitoUserAttribute(dataEmail);
  const attributeName = new CognitoUserAttribute(dataName);
  const attributeGender = new CognitoUserAttribute(dataGender);
  // const attributeEducation = new CognitoUserAttribute(dataEducation);

  attributeList.push(attributeEmail);
  attributeList.push(attributeName);
  attributeList.push(attributeGender);
  // attributeList.push(attributeEducation);

  userPool.signUp(email, password, attributeList, null, (err, result) => {
    if (err) {
      console.error(err.message || JSON.stringify(err));
      return;
    }
    const cognitoUser = result.user;
    console.log(`user name is ${cognitoUser.getUsername()}`);
  });
};
