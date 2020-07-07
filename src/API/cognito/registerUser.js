import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import poolData from './pollData';

export default ({
  email, name, education, gender, password, picture,
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
  const dataPicture = {
    Name: 'picture',
    Value: picture,
  };

  const attributeEmail = new CognitoUserAttribute(dataEmail);
  const attributeName = new CognitoUserAttribute(dataName);
  const attributeGender = new CognitoUserAttribute(dataGender);
  const attributeEducation = new CognitoUserAttribute(dataEducation);
  const attributePicture = new CognitoUserAttribute(dataPicture);

  attributeList.push(attributeEmail);
  attributeList.push(attributeName);
  attributeList.push(attributeGender);
  attributeList.push(attributeEducation);
  attributeList.push(attributePicture);

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result.user);
      }
    });
  });
};
