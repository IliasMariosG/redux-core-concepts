// Define the state of a playlist
const state = [
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

// Reducers or Reducers functions

// Define reducer
const reducer = (state=state, action) => {
  switch(action.type) {
    case 'songs/addSong': {
      return [...state, action.payload]
    }
    default: {
      return state;
    }
  }
}
