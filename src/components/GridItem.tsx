import { Item } from '../types/types';
import { updateItemStatus } from '../utils/helpers';

type GridItemProps = {
    item: Item;
    children: React.ReactNode;
    gameItems: Item[];
    setGameItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const GridItem = ({ children, item, gameItems, setGameItems }: GridItemProps) => {

    const handleClick = () => {
        if (gameItems.filter(item => item.status === 'active')?.length < 2) {
            const updatedItems = updateItemStatus(item.id, 'active', gameItems);
            setGameItems(updatedItems);
        }
    }

    const props = item.status === 'active'
        ? { className: 'grid-item grid-item--active' }
        : item.status === 'completed'
            ? { className: 'grid-item grid-item--correct' }
            : { onClick: handleClick, className: 'grid-item' };

    return (
        <li {...props}>
            <div className="grid-item__back">
                {children}
            </div>
            <div className="grid-item__front"></div>
        </li>
    )
}

export default GridItem