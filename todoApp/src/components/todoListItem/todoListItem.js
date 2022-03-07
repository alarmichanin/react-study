import {AiOutlineExclamation} from 'react-icons/ai';
import {CgTrashEmpty} from 'react-icons/cg';
import './todoListItem.css'

const TodoListItem = ({label,onDeleted,onToggleImportant,onToggleDone,important,done}) => {
    const classNames = done ? "todo-list-item done" : "todo-list-item"
    const style = {
        color: important ? "steelblue" : "black",
        fontWeight: important ? "bold" : "normal",
    }
    return (
        <span className={classNames}>
            <span className={"todo-list-item-label"} style={style} onClick={onToggleDone}>{label}</span>

            <button
                type={"button"}
                className={"btn btn-outline-primary btn-sm float-end"}
                onClick={onToggleImportant}>
                <AiOutlineExclamation/>
            </button>
            <button
                type={"button"}
                className={"btn btn-outline-primary btn-sm float-end"}
                onClick={onDeleted}>
                <CgTrashEmpty/>
            </button>
        </span>


    )
}
export default TodoListItem;