// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("The button was pressed and now the next image will appear");
// });


/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */


// const box = document.querySelector(".js-box");

// box.addEventListener("mouseover", onMouseEnter);
// box.addEventListener("mouseout", onMouseLeave);
// box.addEventListener("mousemove", onMouseMove)



// function onMouseEnter(event) {
//     const boxEl = event.currentTarget;
//     boxEl.classList.add("box--active");
// }

// function onMouseLeave(event) {
//     const boxEl = event.currentTarget;
//     boxEl.classList.remove("box--active");
// }

// function onMouseMove(event) {
//     console.log(event);
// }

// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear");
// let timeoutId;

// setBtn.addEventListener("click", () => {
//   timeoutId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);
// });

// clearBtn.addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   console.log(`Timeout with id ${timeoutId} has stopped!`);
// });

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let intervalId = null;

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    console.log(`Interval ID: intervalId, ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  console.log(`Interval with id ${intervalId} has stopped!`);
});




const date = new Date("March 16, 2030 14:25:00");
console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
console.log("Day: ", date.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log("Day of the week: ", date.getDay()); // 6

// Повертає місяць від 0 до 11
console.log("Month: ", date.getMonth()); // 2

// Повертає рік з 4 цифр
console.log("Full year: ", date.getFullYear()); // 2030

// Повертає години
console.log("Hours: ", date.getHours()); // 14

// Повертає хвилини
console.log("Minutes: ", date.getMinutes()); // 25

// Повертає секунди
console.log("Seconds: ", date.getSeconds()); // 0

// Повертає мілісекунди
console.log("Milliseconds: ", date.getMilliseconds()); // 0



date.setMinutes(50); 
console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040);
console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

date.setMonth(4); 
console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"
