// В каком порядке будут выведены логи?

// TASK 1

/*console.log("A");

setTimeout(() => {
  console.log("B");
});

setTimeout(() => {
  const promise = new Promise((resolve) => {
    console.log("C");

    resolve("D");

    console.log("E");
  });

  promise.then((value) => {
    console.log(value);

    setTimeout(() => {
      console.log("F");
    });
  });

  console.log("G");
});*/

// TASK 2
/*
setTimeout(() => {
  console.log("G");

  Promise.resolve().then(() => console.log("H"));
}, 0);

new Promise(function (resolve) {
  console.log("I");

  setTimeout(function () {
    console.log("J");
    resolve("K");
  }, 0);
}).then((res) => {
  console.log("L");

  setTimeout(() => {
    console.log(res);
  }, 0);
});*/

// I, G, H, J, L, K

// TASK 3
/*
Promise.resolve().then(() => console.log(0));

Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2));

Promise.resolve()
  .then(() => console.log(3))
  .then(() => console.log(4))
  .then(() => console.log(5));
*/
// 0, 1, 3, 2, 4, 5

// TASK 4
/*
setTimeout(() => {
  console.log("timeout");
}, 0);

const p = new Promise((resolve) => {
  console.log("Promise creation");
  resolve(1);
});

const p2 = new Promise(() => {
  console.log(123);
});

p.then(() => {
  console.log("Promise resolving");
});

console.log("End");

console.log("p2 =>>", p2);
*/
// Promise creation
// 123
// End
// p2 =>>
// Promise.pending
// Promise resolving
// timeout

// TASK 5

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");

//script start
//script end
//promise1
//promise2
//setTimeout
