import { useContext, } from 'react'
import GameConfigContext from '../context/GameConfigContext';
import { Link } from 'react-router-dom';


const Modal = ({ children, isGameOver }: { children: React.ReactNode, isGameOver: boolean }) => {
    const [gameConfig, setGameConfig] = useContext(GameConfigContext);

    const restartGame = () => {
        if (setGameConfig) setGameConfig(prev => ({ ...prev }));
    }

    return (
        gameConfig &&
        <div className={isGameOver ? 'modal' : 'modal modal--closed'}>
            <article className='modal__inner'>
                {children}

                <footer className='modal__footer'>
                    <button onClick={restartGame} className='button-primary'>Restart</button>
                    <Link to='/' className='button-primary button-primary--white'>Setup New Game</Link>
                </footer>
            </article>
        </div>

    )
}

export default Modal