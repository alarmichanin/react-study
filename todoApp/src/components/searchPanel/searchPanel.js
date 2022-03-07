import ItemStatusFilter from "../itemStatusFilter/itemStatusFilter";
import './searchPanel.css'
import {useState} from "react";

const SearchPanel = ({onSrchChange, filter, onFilterChange}) => {
    const [term, setTerm] = useState("")
    const onSearchChange = (e) => {
        setTerm(e.target.value)
        onSrchChange(term)
    }
    return (
        <div className={"srch-panel d-flex"}>
            <input
                placeholder="search"
                className={"search-input"}
                value={term}
                onChange={onSearchChange}
            />
            <ItemStatusFilter
                filter={filter}
                onFilterChange={onFilterChange}
            />
        </div>
    )
}

export default SearchPanel;