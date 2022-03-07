import AppHeader from "./components/appHeader/appHeader";
import TodoList from "./components/todoList/todoList";
import SearchPanel from "./components/searchPanel/searchPanel";
import ItemAddForm from "./components/itemAddForm/itemAddForm";
import {useState} from "react";


const App = () => {
    const [term, setTerm] = useState("")
    const [filter, setFilter] = useState("all")
    const [todoData, setTodoData] = useState(
        [
            {label: "6:15 урок 43", important: false, done: false, id: 1},
            {label: "Task 2", important: false, done: false, id: 2},
            {label: "OPA NEW TASK", important: false, done: false, id: 3}
        ]
    )
    const doneCount = todoData.filter((el) => el.done).length
    const toDoCount = todoData.length - doneCount
    const visibleItems = app_filter(search(todoData, term),filter)

    function search(items, term) {
        if (term.length === 0)
            return items
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    function app_filter(items, filter) {
        switch (filter) {
            case "all":
                return items
            case "active":
                return items.filter((item)=>{
                    return !item.done
                })
            case "done":
                return items.filter((item)=>{
                    return item.done
                })
            default:
                return items
        }
    }

    function createNewItem(text) {
        return {
            label: text,
            important: false,
            done: false,
            id: todoData.length + 1
        }
    }

    const onSrchChange = (term) => {
        setTerm(term)
    }

    const onFilterChange = (filter) => {
      setFilter(filter)
    }

    const deleteItem = (id) => {
        setTodoData((todoData) => {
            return todoData.filter(elem => elem.id !== id)
        })
    }
    const addItem = (text) => {
        const item = createNewItem(text)
        setTodoData((todoData) => {
            return [...todoData, item]
        })
    }
    const toggleFunc = (arr, id, prop) => {
        return arr.map((elem) => {
            if (elem.id === id)
                elem = {...elem, [prop]: !elem[prop]}
            return elem
        })
    }
    const onToggleDone = (id) => {
        setTodoData((todoData) => {
            return toggleFunc(todoData, id, "done")
        })
    }
    const onToggleImportant = (id) => {
        setTodoData((todoData) => {
            return toggleFunc(todoData, id, "important")
        })
    }

    return (
        <div className="App">
            <div className={"container"}>
                <AppHeader toDo={toDoCount} done={doneCount}/>
                <SearchPanel
                    onSrchChange={onSrchChange}
                    filter={filter}
                    onFilterChange={onFilterChange}
                />
                <TodoList
                    todos={visibleItems}
                    onDeleted={deleteItem}
                    onToggleImportant={onToggleImportant}
                    onToggleDone={onToggleDone}
                />
                <ItemAddForm onItemAdded={addItem}/>
            </div>

        </div>
    );
}

export default App;
