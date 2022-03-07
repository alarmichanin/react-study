import './appHeader.css'
const AppHeader=({toDo,done})=>{
    return(
        <div className={"app-header d-flex"}>
            <h1>TODO APP</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>

    )
}

export default AppHeader;