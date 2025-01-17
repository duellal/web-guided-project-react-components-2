// This is the top-level component so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
// My code:
// import v4 from '../dummy-data/friends'

// Class code:
//{hell, numbers} is the variable hello and the variable numbers being imported
import friends, { hello, numbers } from '../dummy-data/friends'

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data using the dummy data as the initial value of the slice of state
  const [myFriends, setMyFriends] = useState(friends)

  // 👉 4- Initialize a slice of state to keep track of the value of the search box using an empty string as the initial value of the slice
  const [searchValue, setSearchValue] = useState('')

  // 👉 5- Build a `changeStatus` function that takes an id and changes the `married` from true to false and viceversa
  function changeStatus(id) {
    //Loop over friends and match based on id
    //If ids match, changed married status
    //else do nothing
    setMyFriends(myFriends.map((friend) => {
      if (friend.id === id) {
        //spread syntax {...object, key: change}:
        // Copies the object and you can change a key value by typing in the key: and what you want the value to be
        return { ...friend, married: !friend.married }
      }
      return friend
    }))
  }

  // STRETCH - Make a helper function that returns a filtered array of friends data (filtering by search term)
  // function helper(searchTerm){
  //   set
  // }

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search />

      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
      <FriendsList friendsArray={myFriends} changeMarriedStatus={changeStatus} />

    </div>
  )
}
