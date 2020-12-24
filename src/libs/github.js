import axios from 'axios'
import humps from 'humps'

const github = {
  getTopRepos ({ lang = 'javascript' }) {
    const path = `${process.env.GITHUB_API_ENDPOINT}/search/repositories?q=language:${lang}&sort=stars&order=desc`
    return axios.get(path).then(res => {
      return humps.camelizeKeys(res.data)
    })
  }
}

export default github
