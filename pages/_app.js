import '../styles.scss';
import App from 'next/app';
import React from 'react';
// import { useRouter } from 'next/router'
// import ErrorPage from '../components/error/ErrorPage';
import { Layout } from "../_metronic/layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import withRedux from 'next-redux-wrapper';
// import AsyncStorage from '@react-native-community/async-storage';
import reduxStore from '../redux/store';
// const persistConfig = {
//   //...
//   storage: AsyncStorage,
// }
class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be access by the client
    return {pageProps: pageProps};
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps, store } = this.props;

    // redirect to error page
    // if() {
    //   return <ErrorPage />
    // }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistConfig}>
          {
            router.pathname === '/auth' ?
              <div id="kt_body"
                className="quick-panel-right demo-panel-right offcanvas-right header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable brand-dark"
              >
                <div id="root">
                  <Component {...pageProps} />
                </div>
              </div>:
              <div id="kt_body"
                className="quick-panel-right demo-panel-right offcanvas-right header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable brand-dark"
              >
                <div id="root">
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                  <div id="splash-screen" className="kt-splash-screen">
                    <img
                      src="/media/logos/logo-dark.png"
                      alt="Metronic logo"
                    />
                    <svg className="splash-spinner" viewBox="0 0 50 50">
                      <circle className="path"
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="5"
                      ></circle>
                    </svg>
                  </div>
                  <div id="layout-portal"></div>
                </div>
              </div>
          }
        </PersistGate>
      </Provider>
    )
  }
}
const makeStore = () => reduxStore;
 
export default withRedux(makeStore)(MyApp);
