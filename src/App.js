import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages";
import About from "./pages/About";
import Conference from "./pages/Conference";
import { createTheme, ThemeProvider } from "@material-ui/core";
import MarriageHelp from "./pages/MarriageHelp";
import Referrals from "./pages/Referrals";
import Give from "./pages/Give";
import MarriageProjectPartner from "./pages/MarriageProjectPartner";
import OneTimeGift from "./pages/OneTimeGift";
import MarriageProjectCenter from "./pages/MarriageProjectCenter";
import Church from "./pages/Church";
import NowCommunity from "./pages/NowCommunity";
import JobCenter from "./pages/JobCenter";
import CreativeDirector from "./pages/CreativeDirector";
import ProgramCordinator from "./pages/ProgramCordinator";
import DataAnalyst from "./pages/DataAnalyst";
import Podcast from "./pages/Podcast";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/conference">
            <Conference />
          </Route>
          <Route path="/marriagehelp">
            <MarriageHelp />
          </Route>
          <Route path="/referrals">
            <Referrals />
          </Route>
          <Route path="/give">
            <Give />
          </Route>
          <Route path="/marriageprojectpartners">
            <MarriageProjectPartner />
          </Route>
          <Route path="/onetimegift">
            <OneTimeGift />
          </Route>
          <Route path="/marriageprojectmentorprogram">
            <MarriageProjectCenter />
          </Route>
          <Route path="/churches">
            <Church />
          </Route>
          <Route path="/nowcommunity" component={NowCommunity} />

          <Route path="/jobcenter" exact>
            <JobCenter />
          </Route>

          <Route
            path="/jobcenter/creativedirector"
            component={CreativeDirector}
          />
          <Route
            path="/jobcenter/programcordinator"
            component={ProgramCordinator}
          />
          <Route path="/jobcenter/dataanalyst" component={DataAnalyst} />
          <Route path="/podcast" component={Podcast} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
