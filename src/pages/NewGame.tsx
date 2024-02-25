import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import SelectionConfig from "../components/SelectionConfig"
import GameConfigContext from "../context/GameConfigContext";
import { GameScoreContext } from "../context/GameScoreContext";



const initialGameConfig = {
    theme: 1,
    numberPlayers: 1,
    gridSize: 1
}

const initialGameScoreContext = {
    players: [
        {
            id: 1,
            moves: 0,
            matches: 0
        }
    ],
    currentPlayerId: 1
}

const GameStarter = () => {

    const [, setGameConfig] = useContext(GameConfigContext);
    const [, setGameScore] = useContext(GameScoreContext);

    useEffect(() => {
        if (setGameConfig) setGameConfig({ ...initialGameConfig, isLogged: true });
        if (setGameScore) setGameScore(initialGameScoreContext);
    }, [])


    return (
        <main className="main main--new__game">
            <h1>memory</h1>
            <article className="card">
                <SelectionConfig />
                <Link to='memory-game' className="button-primary">Start Game</Link>
            </article>
        </main>
    )
}

export default GameStarter