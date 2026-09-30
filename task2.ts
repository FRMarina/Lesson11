// Написать функцию, которая отправляет запрос и выводит результат в консоль, в случае ошибки возвратить null
// Нужны только данные с completed === true
// Добавить логи по этапам
// Добавить искусственную задержку в две секунду
// https://jsonplaceholder.typicode.com/todos

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];

function delay(time: number) {
  const promise = new Promise((res) => {
    setTimeout(() => {
      return res(time);
    }, time);
  });
  return promise;
}

async function sendUrl() {
  console.log("Start request");
  await delay(2000);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (response.ok) {
    console.log("get success data");
    const successResponse: Data = await response.json();
    const filteredData = successResponse.filter((v) => v.completed);
    return filteredData;
  }
  return null;
}
sendUrl().then(console.log);
