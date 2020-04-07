import React from 'react';

import '../components/global/userPanel/userPanel.sass';

import Nav from '../components/global/nav/SignIn/nav';
import Header from '../components/global/userPanel//header/header';
import RankPanel from '../components/rank/rank';
import Aside from '../components/global/userPanel//aside/aside';
import Footer from '../components/global/footer/footer.js'

function Rank() {
  return (
    <>
      <div className="userProfile">
        <Nav type="rank" />
        <div className="userProfile__wraper g-maxWwidth"> 
          <div className="userProfile__container">
            <div className="userProfile__mainContent">
              <Header type="rank" />
              <div className="userProfile__alwaysShow">
                <RankPanel />
              </div>
            </div>
            <div className="userProfile__aside">
              <Aside onlyDesktop={true} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rank;
