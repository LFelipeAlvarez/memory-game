import SelectionItem from './SelectionItem'

const GridSizeSelection = () => {
    return (
        <section className="card__section">
            <h2 className="card__title">Grid Size</h2>
            <ul className="card__list">
                <SelectionItem
                    id={1}
                    text='4x4'
                    className='button-secondary button-secondary--larger'
                    selectionCategory='gridSize'

                />
                <SelectionItem
                    id={2}
                    text='6x6'
                    className='button-secondary button-secondary--larger'
                    selectionCategory='gridSize'

                />
            </ul>
        </section>
    )
}

export default GridSizeSelection