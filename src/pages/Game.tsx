import { useContext, useEffect, useRef, useState } from "react"
import GameFooter from "../components/GameFooter"
import GameHeader from "../components/GameHeader"
import GameMain from "../components/GameMain"
import Modal from "../components/Modal"
import GameConfigContext from "../context/GameConfigContext";
import { GameScoreContext } from "../context/GameScoreContext"
import { formatTime } from "../utils/helpers"
import { useNavigate } from "react-router-dom"

const gridSize = {
    1: 8, // 8 pairs   -> 4x4
    2: 18 // 18 pairs  -> 6x6
}

const Game = () => {
    const [gameConfig] = useContext(GameConfigContext);
    const [gameScore] = useContext(GameScoreContext);
    const [seconds, setSeconds] = useState(0);
    const isGameOver = useRef(false);
    const intervalIdRef = useRef(0);
    const navigate = useNavigate();

    let currentTotalMatches = 0;
    if (gameScore && gameConfig) {
        currentTotalMatches = gameScore.players.map(player => player.matches).reduce((a, b) => a + b, 0)
        if (currentTotalMatches >= gridSize[gameConfig.gridSize as keyof typeof gridSize]) {
            isGameOver.current = true;
            clearInterval(intervalIdRef.current);
        }
    }


    useEffect(() => {
        if (!gameConfig?.isLogged) {
            navigate('/');
        }
        isGameOver.current = false;
        setSeconds(0);
        if (gameConfig?.numberPlayers === 1) {
            isGameOver.current = false;
            intervalIdRef.current = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);

        }
        return () => clearInterval(intervalIdRef.current);
    }, [gameConfig]);

    const topScore = Math.max(...gameScore?.players.map(player => player.matches) || []);
    const winners = gameScore?.players.filter(player => player.matches === topScore);
    let tieFlag = false;
    if (winners && winners.length >= 2) tieFlag = true;

    return (
        <div className='game-container'>
            <GameHeader />
            <GameMain />
            <GameFooter seconds={seconds} />
            <Modal isGameOver={isGameOver.current}>
                <header className="modal__header">

                    {
                        gameScore && gameScore.players.length <= 1
                            ? <h2 className="modal__title">
                                You did it!
                            </h2>
                            : <h2 className="modal__title">
                                {tieFlag ? "It's a tie" : `Player ${winners && winners[0].id} Wins!`}
                            </h2>
                    }
                    <span className="modal__subtitle">Game over! {gameScore && gameScore.players.length <= 1 ? 'Here\'s how you got on…' : 'Here are the results...'}</span>
                </header>
                <main className="modal__body">

                    {
                        gameScore && gameScore.players.length <= 1
                            ? <ul className="modal__list">
                                <li className='modal__item'>
                                    <span className="modal__text">Time Elapsed</span>
                                    <span className="modal__text">{formatTime(seconds)}</span>
                                </li>
                                <li className='modal__item'>
                                    <span className="modal__text">Moves Taken</span>
                                    <span className="modal__text">{gameScore.players[0].moves} Moves</span>
                                </li>
                            </ul>
                            : <ul className="modal__list">
                                {
                                    gameScore?.players.sort((a, b) => b.matches - a.matches)
                                        .map(player =>
                                            <li key={player.id} className={player.matches >= topScore ? 'modal__item modal__item--dark' : 'modal__item'}>
                                                <span className="modal__text">Player {player.id} {player.matches >= topScore ? '(Winner)' : ''}</span>
                                                <span className="modal__text">{player.matches} Pairs</span>
                                            </li>
                                        )
                                }
                            </ul>
                    }

                </main>
            </Modal>
        </div>
    )
}

export default Game