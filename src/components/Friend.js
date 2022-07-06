import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  // 👉 1- What does a Friend need?
  const { friendObj, changeMarriedStatus } = props

  return (
    <div className='friend-friends container'>
      {/* 👉 2- Fix the JSX so it displays real info coming into the component */}
      <div className='friend-info'>
        <div >
          <h3>Name: {friendObj.name}</h3>
          <p>Age: {friendObj.age}</p>

          <p>Married: {friendObj.married ? "Yes" : "No"}
            <button onClick={() => changeMarriedStatus(friendObj.id)}>change</button>
          </p>
          <div>Likes:
            <ul>
              {/* 👉 3- Loop over the friend's hobbies and generate <li /> elements as you go */}
              {
                friendObj.hobbies.map((hobby) => {
                  return <li key={hobby}>{hobby}</li>
                })
              }
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 4- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList pets={friendObj.pets} />
        </div>
      </div>
    </div>
  )
}
