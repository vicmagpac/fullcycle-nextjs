import { useEffect, useState } from "react";
import axios from 'axios';

type Player = {
  id: number, 
  name: string
}

const PlayersListPage = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/players')
        .then((response) => {
          setPlayers(response.data);
        })
  }, []);

  return (
    <div>
      <h1>Jogadores disponíveis</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PlayersListPage;