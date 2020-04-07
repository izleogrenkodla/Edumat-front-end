import React from "react"

import Nav from '../components/global/nav/SignUn/nav.js'
import Search from '../components/homePage/search/search.js'
import Quest from '../components/homePage/quest/quest.js'
import About from '../components/homePage/about/about.js'
import Ranking from '../components/homePage/ranking/ranking.js'
import Quiz from '../components/homePage/quiz/quiz.js'
import Account from '../components/homePage/account/account.js'
import Footer from '../components/global/footer/footer.js'

function homePage() {
  return ( <React.Fragment >
      <Nav / >
      <Search / >
      <Quest / >
      <About / >
      <Ranking / >
      <Quiz / >
      <Account / >
      <Footer / >
    </React.Fragment>
  );
}

export default homePage