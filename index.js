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
