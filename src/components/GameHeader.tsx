import { useContext } from 'react'
import { Link } from 'react-router-dom'
import GameConfigContext from '../context/GameConfigContext';

const GameHeader = () => {
    const [, setGameConfig] = useContext(GameConfigContext);

    const restartGame = () => {
        if (setGameConfig && document.querySelectorAll('.grid-item--active').length !== 2) setGameConfig(prev => ({ ...prev }));
    }

    return (
        <header className='header'>
            <h1 className='header__title'>memory</h1>
            <div className="header__buttons">
                <button onClick={restartGame} className="header__button button-primary button-primary--small">Restart</button>
                <Link to='/' className="header__button button-secondary">New Game</Link>
            </div>
        </header>
    )
}

export default GameHeader