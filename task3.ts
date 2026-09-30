// Написать функции loadTodos, которая принимает массив todo и возвращает массив id, если же запрос упал, тогда возвращает null

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function loadTodos(nums: number[]): Promise<(number | null)[]> {
  const result: (number | null)[] = [];
  for (const num of nums) {
    const todo: Todo | null = await loadTodo(num);
    if (todo !== null) {
      result.push(todo.id);
    } else {
      result.push(null);
    }
  }
  return result;
}

async function loadTodo(num: number): Promise<Todo | null> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);
  if (data.ok) {
    const result: Todo = await data.json();
    return result;
  }
  return null;
}

loadTodos([1, 2, 3]).then((result) => console.log(result)); // [1, 2, 3] или [1, null, 3]
