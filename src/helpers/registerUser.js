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
  const dataEducation = {
    Name: 'custom:education',
    Value: education,
  };

  const attributeEmail = new CognitoUserAttribute(dataEmail);
  const attributeName = new CognitoUserAttribute(dataName);
  const attributeGender = new CognitoUserAttribute(dataGender);
  const attributeEducation = new CognitoUserAttribute(dataEducation);

  attributeList.push(attributeEmail);
  attributeList.push(attributeName);
  attributeList.push(attributeGender);
  attributeList.push(attributeEducation);

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(result.user);
      }
    });
  });
};
