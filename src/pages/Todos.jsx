import { useEffect, useState } from "react"
import { getTodos } from "../apis/getTodos";


const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [isTodosLoading, setIsTodosLoading] = useState(false);

    const getTodosList = async () => {
        setIsTodosLoading(true);
        const list = await getTodos();
        setTodos(list);
        setIsTodosLoading(false);
    }
    // useEffect(() => {
    //     getTodosList();
    // }, []);
    return <div>
        <button onClick={() => getTodosList()}>Get Todos</button>
        {isTodosLoading ? "loading..." : todos?.map((todo) => {
            return <p key={todo?.id}>{todo?.title}</p>
        })}
    </div>
}

export default Todos;