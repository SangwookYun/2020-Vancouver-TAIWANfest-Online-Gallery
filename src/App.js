import React from "react";
import "./App.css";
import Navigation from "./navigation";
import PaulsApple from "./pauls_apple";
import Home from "./home";
import IAmDifferent from "./IAmDifferent/i_am_different";
import PeopleAndMask from "./people_and_mask";
import OtherSideOfMask from "./other_side_of_mask";
import Mirror from "./mirror";
import Sky from "./sky";
import IAmDifferentForm from "./IAmDifferent/i_am_different_form";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import SkyV1 from "./sky_v1";
import SkyV1_ch from "./ch/Sky-ch/sky_v1-ch";
import IAmDifferent_ch from "./ch/IAmDifferent-ch/i_am_different-ch";
import IAmDifferentForm_ch from "./ch/IAmDifferent-ch/i_am_different_form-ch";
import Home_ch from "./ch/Home-ch/home-ch";
import PaulsApple_ch from "./ch/PaulsApple-ch/pauls_apple-ch";
import PeopleAndMask_ch from "./ch/PeopleAndMask-ch/people_and_mask-ch";
import Mirror_ch from "./ch/Mirror-ch/mirror-ch";
import HeaderV1 from "./header_v1.js";
import HeaderV2 from "./header_v2.js";
import twftorlogo from "./assets/twftorlogo.png";
import twfvanlogo from "./assets/vantwflogo.png";
import featureImage from "./assets/van-feature-image1.jpg";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
// import"./sky_v1.css";

function App() {
  // const history = createBrowserHistory();
ReactGA.initialize('UA-2521987-18');

// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });
  return (
      <div className="App">

        <HeaderV1 />
        <Router>
        {/* <hr id="mobileLine"/> */}
        <Switch>
          <Route path="/" exact component={IAmDifferent} />

          {/*<Route path="/" component={() => {
     window.location.href = "https://torontotaiwanfest.ca/";}}/>*/}
          <Route path="/PaulsApple" component={PaulsApple} />
          <Route path="/IAmDifferent" component={IAmDifferent} />
          <Route path="/PeopleAndMask" component={PeopleAndMask} />
          <Route path="/OtherSideOfMask" component={OtherSideOfMask} />
          <Route path="/Mirror" component={Mirror} />
          <Route path="/SkyV2" component={Sky} />
          <Route path="/IAmDifferentForm" component={IAmDifferentForm}/>
          <Route path="/Sky" component={SkyV1}/>
          <Route path="/Sky-ch" component={SkyV1_ch}/>
          <Route path="/IAmDifferent-ch" component={IAmDifferent_ch}/>
          <Route path="/IAmDifferentForm-ch" component={IAmDifferentForm_ch}/>
          <Route path="/Home-ch" component={IAmDifferent_ch}/>
          <Route path="/PaulsApple-ch" component={PaulsApple_ch}/>
          <Route path="/PeopleAndMask-ch" component={PeopleAndMask_ch}/>
          <Route path="/Mirror-ch" component={Mirror_ch}/>
          <Route path="/-ch" exact component={IAmDifferent_ch} />
          </Switch>
          </Router>
      </div>
  );
}

export default App;
