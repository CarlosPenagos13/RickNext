import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import Layout from "../components/Layout/Layout";
import reducers from "../redux/reducers";

import "semantic-ui-css/semantic.min.css";

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
