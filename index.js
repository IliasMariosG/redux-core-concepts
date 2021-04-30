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

// Rules of reducers:
// 1.
// They should only calculate the new state value based on the `state` and `action` arguments.
// 2.
// They are not allowed to modify the existing state.
// Instead, they must copy the existing state and make changes to the copied values.
// 3.
// They must not do any asynchronous logic or have other “side effects”.

// In programming, there is a more general way to describe the three rules of reducers in Redux: 
// reducers must make immutable updates and be pure functions.