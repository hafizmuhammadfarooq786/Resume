import { hot } from "react-hot-loader/root";
import React, { useLayoutEffect } from "react";
import { Box } from "grommet";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { history } from "./index";

import Loading from "./components/common/Loading";
import Home from "./components/pages/landing/Home";

const Layout = ({ location }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
    </React.Fragment>
  );
};

const MainView = React.memo(({ location }) => (
  <Router history={history}>
    <Layout location={location} />
  </Router>
));

class App extends React.Component {
  constructor(props) {
    props.initialize();
    super(props);
  }

  render() {
    const { isInitialized, location } = this.props;
    if (!isInitialized) {
      return <Loading />;
    }
    return (
      <Box width="100%" direction="column">
        <MainView location={location} />
      </Box>
    );
  }
}

export default hot(App);
