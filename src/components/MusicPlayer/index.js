/** @jsx jsx */
import React, { createContext, useReducer } from 'react'
import { css, jsx } from '@emotion/core'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Playbar from './Playbar'
import media from '../../media.json'

export const StoreContext = createContext(null)

const DEFAULT_PLAYLIST = 'home'

const initialState = {
  media,
  addSongToPlaylistId: '',
  currentPlaylist: DEFAULT_PLAYLIST,
  playlists: {
    home: new Set(media.ids),
    favorites: new Set(),
    rock: new Set(),
    rap: new Set(),
    'old school': new Set()
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return {
        ...state,
        playlists: { ...state.playlists, [action.playlist]: new Set() }
      }
    case 'SET_PLAYLIST':
      return { ...state, currentPlaylist: action.playlist }
    case 'ADD_FAVORITE':
      state.playlists.favorites.add(action.songId)
      return { ...state }
    case 'REMOVE_FAVORITE':
      state.playlists.favorites.delete(action.songId)
      return { ...state }
    case 'SET_ADD_SONG_TO_PLAYLIST_ID':
      return { ...state, addSongToPlaylistId: action.songId }
    case 'ADD_SONG_TO_PLAYLIST':
      state.playlists[action.playlist].add(state.addSongToPlaylistId)
      return { ...state, addSongToPlaylistId: '' }
    case 'CANCEL_ADD_SONG_TO_PLAYLIST':
      return { ...state, addSongToPlaylistId: '' }
    case 'REMOVE_SONG_FROM_PLAYLIST':
      state.playlists[state.currentPlaylist].delete(action.songId)
      return { ...state }
  }

  return state
}

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div css={CSS}>
        <Topbar />
        <Sidebar />
        <Content />
        <Playbar></Playbar>
      </div>
    </StoreContext.Provider>
  )
}

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer
