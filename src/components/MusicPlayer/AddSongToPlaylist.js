import React, { useContext } from 'react'
import { StoreContext } from './index'

const Select = ({ onChange, playlists, songId }) => {
  const { state } = useContext(StoreContext)

  return (
    <select onChange={onChange}>
      <option>-</option>

      {playlists.map(list => (
        <option
          key={list}
          disabled={state.playlists[list].has(songId)}
          style={{ textTransform: 'capitalize' }}
        >
          {list}
        </option>
      ))}
    </select>
  )
}

const AddSongToPlaylist = ({ songId }) => {
  const { state, dispatch } = useContext(StoreContext)

  const playlists = Object.keys(state.playlists).filter(
    list => !['home', 'favorites'].includes(list)
  )

  if (playlists.length <= 0) return null

  const handleAdd = e => {
    const playlist = e.target.value
    if (playlist === '-') return
    dispatch({ type: 'ADD_SONG_TO_PLAYLIST', playlist })
  }

  if (state.addSongToPlaylistId === songId) {
    return (
      <>
        <Select onChange={handleAdd} playlists={playlists} songId={songId} />

        <i
          className="fa fa-times"
          onClick={() => dispatch({ type: 'CANCEL_ADD_SONG_TO_PLAYLIST' })}
          style={{ marginLeft: 10 }}
        />
      </>
    )
  } else
    return (
      <i
        className="fa fa-plus"
        onClick={() =>
          dispatch({ type: 'SET_ADD_SONG_TO_PLAYLIST_ID', songId })
        }
      />
    )
}

export default AddSongToPlaylist
