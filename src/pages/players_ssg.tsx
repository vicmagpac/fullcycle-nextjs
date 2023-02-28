import axios from 'axios';
import { Player } from "@/utils/models";
import { GetStaticProps } from "next";

type PlayersListProps = {
  players: Player[];
}

const PlayersListStaticGenerationPage = (props: PlayersListProps) => {
  const { players } = props;

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

export default PlayersListStaticGenerationPage;

export const getStaticProps: GetStaticProps = async () => {
  console.log("Run getStaticProps");
  const { data } = await axios.get('http://localhost:8000/players');

  return {
    props: {
      players: data
    }
  }
}