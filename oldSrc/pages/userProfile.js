import React from 'react';

import '../components/global/userPanel/userPanel.sass';

import Nav from '../components/global/nav/SignIn/nav';
import Header from '../components/global/userPanel/header/header';
import Main from '../components/userProfile/main';
import Aside from '../components/global/userPanel/aside/aside';
import Footer from '../components/global/footer/footer.js'

function userProfile() {
  return (
    <> 
      <div className="userProfile">
        <Nav type="userpanel" />
        <div className="userProfile__wraper g-maxWwidth">
          <div className="userProfile__container">
            <div className="userProfile__mainContent">
              <div className="userProfile__alwaysShow">
                <Header type="userpanel" />
              </div>
              <div className="userProfile__mobileHide">
                <Main />
              </div>
            </div>
            <div className="userProfile__aside">
              <Aside />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default userProfile;
