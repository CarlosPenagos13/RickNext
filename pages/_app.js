import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import Layout from "../components/Layout/Layout";
import reducers from "../redux/reducers/charactersRedu";

import "semantic-ui-css/semantic.min.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

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
