function Toolbar ({filters, selected, onSelectFilter}){
    return (
        <div className="toolbar">
            <ul className="filter">
                {
                    filters.map((filter, i) =>
                        <li onClick={() => onSelectFilter(filter)}
                            key={i}
                            className={filter==selected ? "selected" : undefined}
                        >
                            {filter}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Toolbar