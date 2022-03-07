const ItemStatusFilter = ({filter,onFilterChange}) => {
    const buttons = [
        {name:"all",label:"All"},
        {name:"active",label:"Active"},
        {name:"done",label:"Done"},
    ]

    const btns = buttons.map(({name,label})=>{
        const isActive = filter===name
        const clazz = isActive ? "btn btn-info" : "btn btn-outline-secondary"
        return (
            <button type={"button"}
                    className={clazz}
                    key={name}
                    onClick={()=>onFilterChange(name)}
            >
                {label}
            </button>
        )
    })
    return (
        <div className={"btn-group"}>
            {btns}
        </div>
    )
}
export default ItemStatusFilter;