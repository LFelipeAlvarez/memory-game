import { useContext } from "react";
import GameConfigContext from "../context/GameConfigContext";
import { SelectionItemProps } from "../types/types"

const SelectionItem = ({ text, className, id, selectionCategory }: SelectionItemProps) => {
    const [gameConfig, setGameConfig] = useContext(GameConfigContext);

    const handleClick = () => {
        if (gameConfig && setGameConfig) {
            const newGameConfig = { ...gameConfig, [selectionCategory]: id }
            setGameConfig(newGameConfig);
        }
    }

    let currentThemeId;
    if (gameConfig)
        currentThemeId = gameConfig[selectionCategory];
    const finalClassName = id === currentThemeId ? className + ' button-secondary--active' : className;
    return (
        <li onClick={handleClick} className={`card__item ${finalClassName}`}>{text}</li>
    )
}

export default SelectionItem