import './App.css'
import './assets/index.css'
import { TwitterCard } from "./components/TwitterCard.jsx";
import {useState} from "react";


const users = [
    {
        userName: 'hhcarmenate',
        name: 'Henry Carmenate',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel',
        isFollowing: false,
    },
    {
        userName: 'kikobeats',
        name: 'Kiko Beats',
        isFollowing: false,
    }
];

function App() {

  const formatUserName = (username) => `@${username}`;

  //const hhcarmenate = { username: 'hhcarmenate', formatUserName } // Only if is necessary!!



  return (
    <>
      <section className="App">
          {
              users.map((user) => {
                const { name, isFollowing , userName} = user;

                return (
                    <TwitterCard key={userName} formatUserName={formatUserName} username={userName} isFollowing={isFollowing} >
                        {name}
                    </TwitterCard>
                )

              })
          }

      </section>
    </>
  )
}

export default App
