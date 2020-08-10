# Create Playlist

1. A modal should appear upon click of the `<li>` item, with a form that allows us to enter a playlist name.
2. Submitting the form adds a new key to `playlists object` with a value of `new Set()`.
   Make sure to change current null values to be Set's as well.
3. A toast should appear once that finishes, letting us know that the playlist has been created.

## Modal
Create a basic Modal component in MusicPlayer that accepts children and has some base styling.

- The modal will include:
  - A semi transparent black overlay.
  - A section for children content to be displayed within.
  - An `open` and `close` prop. `open` will determine if it renders, and `close` will be a callback function to run when we are closing the modal.

A. We need to add a `modal` property to the current state, and set it as false by default. We can then set `open` to be `state.modal` and set `close` to be a function that just sets `modal: false`.

B. Add click handler to new playlist <li> and have it set `modal: true`.

C. Create the form for the modal inside of Sidebar itself, passing it as children to the Modal component. Style the form accordingly, and make sure to point how that we will be using a ref to grab the value from the text field to make things easier.

D. We need to add an onSubmit handler to the form in order to execute a addPlaylist function where we create the new playlist. For now this will just add a playlist and set the modal to false.

## Toast

A toast should appear only if we've successfully added a playlist. Closing out of the modal should do nothing, as we are abandoning the creation process. We want the toast to automatically close itself after a set time.

A. Create toast with basic styling. It needs children and to have some animation done via CSS. Explain animation at a very basic level.

B. It will have two props, `toast` and `close`.

C. `toast` will be an empty string by default. It will contain text when it's told to do so.

D. Needs to utilize useEffect and set a timeout to close itself.
