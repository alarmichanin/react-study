import './itemAddForm.css'
import {useState} from "react";

const ItemAddForm = ({onItemAdded}) => {
    const [label, setLabel] = useState("")
    const onInputChange = (e) => {
        setLabel(e.target.value)
    }
    const onSubmitFunc = (e)=>{
        e.preventDefault()
        onItemAdded(label)
        setLabel("")
    }

    return (
        <form className={"item-add-form d-flex"}
        onSubmit={onSubmitFunc}>
            <input
                type={"text"}
                className={"form-control"}
                placeholder={"Your task:"}
                onChange={onInputChange}
                value={label}
            />
            <button
                className={"btn btn-outline-secondary"}
            >Add Task
            </button>
        </form>
    )
}
export default ItemAddForm;