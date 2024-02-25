import { useContext } from 'react'
import GameConfigContext from '../context/GameConfigContext';
import { GameScoreContext } from '../context/GameScoreContext';
import { formatTime } from '../utils/helpers';

const GameFooter = ({ seconds }: { seconds: number }) => {
    const [gameConfig] = useContext(GameConfigContext);
    const [gameScore] = useContext(GameScoreContext);

    return (
        gameConfig?.numberPlayers === 1 ?
            <footer className='footer'>
                <ul className="footer__list">
                    <li className="footer__item">
                        <span className="footer__text">Time</span>
                        <span className="footer__text footer__title">{formatTime(seconds)}</span>
                    </li>
                    <li className="footer__item">
                        <span className="footer__text">Moves</span>
                        <span className="footer__text footer__title">{gameScore?.players.find(player => player.id === 1)?.moves}</span>
                    </li>
                </ul>
            </footer > :
            <footer className='footer'>
                <ul className="footer__list">

                    {Array.from({ length: gameConfig?.numberPlayers || 1 }, (_, index) => index + 1).map(number =>
                        <li key={number} className={gameScore?.currentPlayerId === number ? 'footer__item footer__item--active' : 'footer__item'}>
                            <span className="footer__text footer__text--visible">P{number}</span>
                            <span className="footer__text footer__text--invisible">Player {number}</span>
                            <span className="footer__text footer__title">{gameScore?.players.find(player => player.id === number)?.matches}</span>
                        </li>)}

                </ul>
            </footer >
    )
}

export default GameFooter   