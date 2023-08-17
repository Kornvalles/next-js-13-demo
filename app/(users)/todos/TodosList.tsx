import { Todo } from '@/typings';
import Link from 'next/link';
import React from 'react';

const fetchTodos = async () => {
    // timeout to simulate slow connection randomly
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));


    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos: Todo[] = await response.json();
    return todos;
}

async function TodosList() {
    const todos = await fetchTodos();

    return <>
        {todos.map((todo) => (
            <p key={todo.id}>
                <Link href={`/todos/${todo.id}`}>
                    {`Todo: ${todo.id}`}
                </Link>
            </p>
        ))}
    </>
}

export default TodosList