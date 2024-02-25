import React, { createContext, useContext, useEffect, useState } from "react";
import { GameScore } from "../types/types";
import GameConfigContext from "./GameConfigContext";


type GameScoreContextType = [GameScore, React.Dispatch<React.SetStateAction<GameScore>>] | [];
const GameScoreContext = createContext<GameScoreContextType>([]);


const GameScoreProvider = ({ children }: { children: React.ReactNode }) => {

    const [gameConfig] = useContext(GameConfigContext);

    const initialGameScoreContext: GameScore = {
        players: [
            {
                id: 1,
                moves: 0,
                matches: 0
            }
        ],
        currentPlayerId: 1
    }

    const [gameScore, setGameScore] = useState<GameScore>(initialGameScoreContext);

    useEffect(() => {
        const players = Array.from({ length: gameConfig?.numberPlayers || 1 }, (_, index) => ({ id: index + 1, moves: 0, matches: 0 }));
        initialGameScoreContext.players = players;
        setGameScore(initialGameScoreContext)
    }, [gameConfig])


    return (
        <GameScoreContext.Provider value={[gameScore, setGameScore]}>
            {children}
        </GameScoreContext.Provider>

    )
}

export { GameScoreProvider, GameScoreContext }