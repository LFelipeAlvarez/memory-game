import SelectionItem from './SelectionItem'

const NumberPlayersSelection = () => {
    return (
        <section className="card__section">
            <h2 className="card__title">Numbers of Players</h2>
            <ul className="card__list">
                <SelectionItem
                    id={1}
                    text='1'
                    className='button-secondary button-secondary--small'
                    selectionCategory='numberPlayers'

                />
                <SelectionItem
                    id={2}
                    text='2'
                    className='button-secondary button-secondary--small'
                    selectionCategory='numberPlayers'
                />
                <SelectionItem
                    id={3}
                    text='3'
                    className='button-secondary button-secondary--small'
                    selectionCategory='numberPlayers'

                />
                <SelectionItem
                    id={4}
                    text='4'
                    className='button-secondary button-secondary--small'
                    selectionCategory='numberPlayers'
                />
            </ul>
        </section>
    )
}

export default NumberPlayersSelection