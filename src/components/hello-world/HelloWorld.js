import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

import { getTopRepos } from './_redux/reposAction'
import SearchResults from './SearchResults'

class HelloWorld extends Component {
  static async getInitialProps ({ store, query }) {
    const lang = query.lang || 'javascript'
    await store.dispatch(getTopRepos({ lang }))
    return { lang }
  }

  componentDidMount () {
    const { getTopRepos } = this.props
    getTopRepos({ lang: 'ruby' })
  }

  render () {
    const { repos } = this.props
    return (
      <Fragment>
        <SearchResults repos={repos} />
      </Fragment>
    )
  }

  _goToAbout = () => {
    this.props.router.push('/about')
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repos
  }
}

HelloWorld.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired,
  getTopRepos: PropTypes.func.isRequired
}

export { HelloWorld }
export default connect(mapStateToProps, {
  getTopRepos
})(HelloWorld)
