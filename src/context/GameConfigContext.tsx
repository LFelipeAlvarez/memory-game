import { createContext, useState } from "react";
import { GameConfig } from "../types/types";

type GameConfigContextType = [GameConfig, React.Dispatch<React.SetStateAction<GameConfig>>] | [];

const GameConfigContext = createContext<GameConfigContextType>([]);

const initialGameConfig = { theme: 1, numberPlayers: 1, gridSize: 1 };

const GameConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const [gameConfig, setGameConfig] = useState<GameConfig>(initialGameConfig);

    return (
        <GameConfigContext.Provider value={[gameConfig, setGameConfig]}>
            {children}
        </GameConfigContext.Provider>

    )
}

export { GameConfigProvider };
export default GameConfigContext;