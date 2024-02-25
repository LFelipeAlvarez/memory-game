type GameConfig = {
    theme: number,
    numberPlayers: number,
    gridSize: number,
    isLogged?: boolean
}

type Player = {
    id: number,
    moves: number,
    matches: number
}

type GameScore = {
    players: Player[],
    currentPlayerId: number
}

type SelectionItemProps = {
    id: number,
    text: sting,
    className: string,
    selectionCategory: keyof GameConfig,
    gameConfig?: GameConfig,
    setGameConfig?: React.Dispatch<React.SetStateAction<GameConfig>>
}

type Item = {
    id: number,
    content: string | number,
    status: string
}


export { SelectionItemProps, GameConfig, Item, GameScore, Player }