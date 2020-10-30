import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";
import styled from "styled-components";
import { Grommet } from "grommet";
import * as serviceWorker from "./serviceWorker";

import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import configureStore from "./store";
import initialState from "./store/initialState";
import App from "./containers/app/App";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  background-color: #f3f7fe;
`;

export const history = createBrowserHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <Grommet theme={theme}>
      <FlexWrapper>
        <App />
      </FlexWrapper>
    </Grommet>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
