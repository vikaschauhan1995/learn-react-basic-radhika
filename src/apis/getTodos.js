

export const getTodos = async () => {
    const todosData = await fetch('https://jsonplaceholder.typicode.com/todos/',
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }
    );
    const todosObjs = await todosData.json();
    return todosObjs;
}

