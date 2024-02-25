import SelectionItem from './SelectionItem'

const ThemeSelection = () => {

    return (
        <section className="card__section">
            <h2 className="card__title">Select theme</h2>
            <ul className="card__list">
                <SelectionItem
                    id={1}
                    text='Numbers'
                    className='button-secondary button-secondary--larger'
                    selectionCategory='theme'
                />
                <SelectionItem
                    id={2}
                    text='Icons'
                    className='button-secondary button-secondary--larger'
                    selectionCategory='theme'
                />
            </ul>
        </section>
    )
}

export default ThemeSelection