import store from '@/store';

export default (user, authenticationDetails) => new Promise((resolve, reject) => {
  user.authenticateUser(authenticationDetails, {
    onSuccess(res) {
      const accessToken = res.getAccessToken().getJwtToken();
      store.dispatch('auth/setToken', accessToken);

      user.getUserAttributes((err, result) => {
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
