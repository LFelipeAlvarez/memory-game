import { useContext, useEffect, useState } from 'react'
import GridItem from './GridItem'
import { Item } from '../types/types';
import { shuffle, updateItemStatus } from '../utils/helpers';
import GameConfigContext from '../context/GameConfigContext';
import { GameScoreContext } from '../context/GameScoreContext';


const GameMain = () => {
    const [gameConfig] = useContext(GameConfigContext);
    const [gameScore, setGameScore] = useContext(GameScoreContext);
    const [gameItems, setGameItems] = useState<Item[]>([]);

    const updateScore = (activatedItems: Item[]) => {
        const [firstItem, secondItem] = activatedItems;
        let timeSpan = 500;
        if (gameScore && setGameScore) {
            const updatedPlayers = gameScore.players.map(player =>
                player.id === gameScore.currentPlayerId
                    ? { ...player, moves: player.moves + 1, matches: firstItem.content === secondItem.content ? player.matches + 1 : player.matches }
                    : player
            )
            let nextPlayerId = gameScore.currentPlayerId;
            if (firstItem.content !== secondItem.content) {
                timeSpan = 1100;
                if (nextPlayerId === gameScore.players.length) nextPlayerId = 1;
                else {
                    nextPlayerId++
                }
            }
            const updatedGameScore = { currentPlayerId: nextPlayerId, players: updatedPlayers };
            setTimeout(() => {
                setGameScore(updatedGameScore);
            }, timeSpan);

        }
    }

    const updateItems = (activatedItems: Item[]) => {
        const [firstItem, secondItem] = activatedItems;
        const statusToSet = firstItem.content === secondItem.content ? 'completed' : 'inactive';
        const timeSpan = firstItem.content === secondItem.content ? 500 : 1100;
        let updatedItems = updateItemStatus(firstItem.id, statusToSet, gameItems);
        updatedItems = updateItemStatus(secondItem.id, statusToSet, updatedItems);

        setTimeout(() => {
            setGameItems(updatedItems);
        }, timeSpan);
    }

    useEffect(() => { //Local state gameItems depends on globalState gameConfig to set gameItems (gridItem) quantity
        if (gameConfig) {
            const length = gameConfig?.gridSize === 1 ? 8 : 18;
            const numbers = Array.from({ length }, (_, index) => index + 1);
            const allNumbers = [...numbers, ...numbers]
            shuffle(allNumbers);
            const initialGameItems = allNumbers.map((item, index) => ({ id: index + 1, content: item, status: 'inactive' }));
            setGameItems(initialGameItems);
        }
    }, [gameConfig]);

    useEffect(() => { // This effect is listening a gameItems change, every time an item is flipped this effect runs
        const activatedItems = gameItems.filter(item => item.status === 'active');
        if (activatedItems?.length === 2) {
            updateScore(activatedItems);
            updateItems(activatedItems);
        }
    }, [gameItems]);

    return (
        gameConfig &&
        <main className='game-main'>
            <ul className={gameConfig.gridSize === 1 ? 'game-grid game-grid--4x4' : 'game-grid'}>
                {gameItems.map((item) =>
                    gameConfig.theme === 1 ?
                        <GridItem item={item} key={item.id} gameItems={gameItems} setGameItems={setGameItems}>
                            {item.content}
                        </GridItem> :
                        <GridItem item={item} key={item.id} gameItems={gameItems} setGameItems={setGameItems}>
                            <img src={`/images/icon${item.content}.svg`} />
                        </GridItem>
                )}
            </ul>
        </main>
    )

}

export default GameMain