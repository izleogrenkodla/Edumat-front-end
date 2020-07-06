export default (user) => {
  user.getUserAttributes((err, result) => {
    if (err) {
      console.log(err.message || JSON.stringify(err));
      return;
    }
    result.forEach((attribute) => console.log(`Attribute ${attribute.getName()} has value ${attribute.getValue()}`));
  });
};
