// const box = document.querySelector("#box")
// const decrease = document.querySelector('#decrease');
// const increase = document.querySelector('#increase');

// console.log(decrease);
// decrease.addEventListener('click', handleDecrease);
// increase.addEventListener('click', handleIncrease);

// function handleDecrease(event) {
//     const { offsetWidth, offsetHeight } = box;
//     box.style.width = `${offsetWidth - 10}px`;
//     box.style.height = `${offsetHeight - 10}px`;

// }

// function handleIncrease(event) {
//     const { offsetWidth, offsetHeight } = box;
//     box.style.width = `${offsetWidth + 10}px`;
//     box.style.height = `${offsetHeight + 10}px`;

// }

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 1000);
// });

// Promise.race([p1, p2])
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error))// 2

// const currentDate = new Date();

// console.log(currentDate.getFullYear());
// console.log(currentDate.getDay());
// console.log(currentDate.getTime());

// const logger = (time) => {
//   console.log(`Лог через ${time} мс! - ${Date.now()}`);
// }

// setTimeout(logger, 2000, { time: 2001, name: "Alice"});

// setTimeout((time) => {
//   console.log(`Лог через ${time} мс!`);
// }, 2000, 2000)

// console.log("before");
// setInterval(logger, 2000, 2000);
// console.log("after");

// const intervalId = setInterval(logger, 2000, 2000);

// setTimeout(() => {
//   console.log("stop");
//   clearInterval(intervalId);
// }, 5000)

// const  today = new Date();
// console.log(today);

// console.log(today.getUTCHours());

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve(10);
//     } else {
//       reject(0);
//     }
//   }, 2000);
// });

// const makeOrder = (dish, onSuccess, onError) => {
//     const random = Math.random();

//     if(random > 0.5) {
//         onSuccess(`Ви замовили ${dish}`)
//     } else {
//         onError('Продукти закінчилися')
//     }
// }

// makeOrder(
//     "пиріжок",
// (result) => {
//     console.log(result);
// },
// (error) => {
//     console.log(error);
// }
// )

// const currentDate = new Date();
// console.log(currentDate);
// const arrDay = [
//   "Неділя",
//   "Понеділок",
//   "Вівторок",
//   "Середа",
//   "Четвер",
//   "П'ятниця",
//   "Субота",
// ];

// const namesOfMonth = [
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ]

// console.log(arrDay[currentDate.getDay()]);

// const currentTime = new Date();

// const current = {
//   day: arrDay[currentTime.getDay()],
//   date: currentTime.getDate(),
//   month: namesOfMonth[currentTime.getMonth()],
//   year: currentTime.getFullYear()
// }

// console.log(current.day);
// console.log(current.date);
// console.log(current.month);
// console.log(current.year);

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"
// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"

// Change this number to fetch different post

const list = document.querySelector('.todo-list');

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => list.insertAdjacentHTML('beforeend', createMarkup(data)))
  .catch(error => list.insertAdjacentHTML(
      'beforeend',
      `<li>
        <p>${error}</p>
      </li>`
    )
  )

function createMarkup(arr) {
  return arr
    .map(
      ({ id, title, completed }) => `
  <li data-id="${id}" class="list-item">
  <input type="checkbox" ${completed && 'checked'}>
  <p>${title}</p>
  </li>
  `
    )
    .join('');
}
