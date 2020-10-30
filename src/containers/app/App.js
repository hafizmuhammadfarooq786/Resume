import React from "react";
import { connect } from "react-redux";
import { initialize } from "../../store/app/actions";
import { getIsInitialized } from "../../store/app/selectors";

import App from "../../App";

const AppContainer = (props) => <App {...props} />;

const mapStateToProps = (state) => ({
  isInitialized: getIsInitialized(state),
});

const mapDispatchToProps = (dispatch) => ({
  initialize: () => dispatch(initialize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
