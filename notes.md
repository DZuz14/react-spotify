# Part 7: Adding/Removing From Playlists

Let's start adding/removing songs to/from our custom created playlists.

## Add Plus Icon

This will go right next to the heart.

```
<i className="fa fa-plus" />
```

```
  i:not(:first-of-type) {
    margin-left: 10px;
  }
```

## Refactor Favorites

There is a lot going on here that pollutes the base component. Let's refactor it into a separate one.

```
const Favorite = ({ isFavorite, songId }) => {
  const { dispatch } = useContext(StoreContext)

  return isFavorite ? (
    <i
      className="fa fa-heart"
      onClick={() => dispatch({ type: 'REMOVE_FAVORITE', songId })}
    />
  ) : (
    <i
      className="fa fa-heart-o"
      onClick={() => dispatch({ type: 'ADD_FAVORITE', songId })}
    />
  )
}
```

```
<Favorite isFavorite={isFavorite} songId={id} />
```

# Create a dropdown along with the plus sign

This dropdown will appear next to the song, and will be filled with all of the custom playlists that we have. If we don't have any custom playlists, let's not even show the plus sign.

```
const AddSong = () => {
  const { state } = useContext(StoreContext)

  const playlists = Object.keys(state.playlists).filter(
    list => !['home', 'favorites'].includes(list)
  )

  return (
    <>
      {playlists.length > 0 && <i className="fa fa-plus" />}

      <select>
        {playlists.map(list => (
          <option key={list}>{list}</option>
        ))}
      </select>
    </>
  )
}
```

```
<AddSong />
```
