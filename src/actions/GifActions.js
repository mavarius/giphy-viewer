import axios from 'axios'

export function searchAction (searchEntry, filter) {
  return {
    type: 'SEARCH_ACTION',
    payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchEntry}&limit=100&api_key=dc6zaTOxFJmzC`)
                  .then(res => {
                    let filtered = res.data.data
                    filtered = filtered.filter(result => result.rating === filter)
                    return filtered
                  })
  }
}

export function getOne (id) {
  return {
    type: 'RECEIVE_ONE',
    payload: axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=dc6zaTOxFJmzC`)
                  .then(res => res.data)
  }
}
