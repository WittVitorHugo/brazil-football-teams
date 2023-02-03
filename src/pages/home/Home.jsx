import axios from 'axios';
import { useEffect, useState } from 'react'
import List from './components/list/List'
import Navbar from './components/navbar/Navbar'

function Home() {

  const [teams, setTeams] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    (async () => {
      const headers = {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "0b5e59b2c5d836e9dce29597286df291"
      }

      const res = await axios.get('https://v3.football.api-sports.io/teams?country=brazil', { headers })
        .then(res => res.data)
        .catch(err => {
          console.log(err);
        });
      setTeams(res.response)
    })()
  }, [])

  return (
    <div className="home">
      <Navbar setSearch={setSearch} />
      <List teams={teams} search={search} />
    </div>
  )
}

export default Home
