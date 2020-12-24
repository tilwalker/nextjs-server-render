import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import styledNormalize from 'styled-normalize'
import { withRouter } from 'next/router'
import App from 'next/app'

import createStore from '../src/redux/store'
import Layout from '../src/components/layout/Layout'
import theme from '../src/theme'
import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`

class MyApp extends App {
  render () {
    const { Component, pageProps, router, store } = this.props
    const title = 'Hello next.js Real World!'
    console.log(this.props, 'props>>>');
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property='og:title' content={title} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyle />
            {
              router.pathname === '/auth' ?
              <Component router={router} {...pageProps} />
              : <Layout>
                  <Component router={router} {...pageProps} />
                </Layout>
            }
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}

export default withRedux(createStore)(
  withRouter(MyApp)
)
