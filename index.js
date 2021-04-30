// Define the state of a playlist as initial state
const initialState = [
  'Dance me to end of love',
  'Gasoline',
  'Bad guy'
]

// Actions

// adding a new song to the playlist
const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
}

// removing all songs from the playlist
const removeAllSongs = {
  type: 'songs/removeAll'
}

//removing one song from the playlist
const removeSong = {
  type: 'songs/removeSong',
  payload: 'Gasoline'
}

// Reducers or Reducers functions

// Define reducer
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'songs/addSong': {
      return [...state, action.payload]
    }
    case 'songs/removeSong': {
      return state.filter(song => song !== action.payload)
    }
    case 'songs/removeAll': {
      return []
    }
    default: {
      return state;
    }
  }
}
