import axios from 'axios';
import { Player } from "@/utils/models";
import { GetServerSideProps, GetStaticProps } from "next";

type PlayersListProps = {
  players: Player[];
}

const PlayersListIncrementalStaticGenerationPage = (props: PlayersListProps) => {
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

export default PlayersListIncrementalStaticGenerationPage;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("Run getServerSideProps");
  const { data } = await axios.get('http://localhost:8000/players');

  return {
    props: {
      players: data
    },
    revalidate: 20,
  }
} 