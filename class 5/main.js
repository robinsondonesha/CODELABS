//console.log('Hello'); 

//function greeting (name) {
  //  let greet = `Hello ${name}`;
   // console.log(greet);
//}

//greeting('Class');// 

//let firstName;

//function greetBob() {
   // console.log('Before: ', firstname);
   // let first name = 'Bob'
//}

let isBilly = false

//function isNameBilly(name) {
//  if(name === 'Billy') {
//   isBilly = true;
//  }
// console.log('Are you billy? ' + //isBilly)
//}

//isNameBilly('Billy')

//let randomVariable;

//function checkIfHoisted() {
    //let randomVariable = 10;
    //console.log('Inside', //randomVariable);
//}

    //checkIfHoisted();
    //console.log('after', randomVariable)

    // function typeOfGreeting(name) {
    //     return function 
    //     loudGreeting() {
    //         return `Hello ${name}!`;
    //     };
    // }

    // function bankAccount(initionalBalance) {
    //   let userBalance = initionalBalance

    //   function getBalance () {
    //     return userBalance
    //   }
    //   return {
    //     getBalance: getBalance
    //   }
    // }

    // const account = bankAccount(100);
    // console.log(account.getBalance());

    // mainFunction();

    // function mainFunction() {
    //     console.log('Hello');
    // }
    // mainFunction();

//     function sayBalance(balance) {
//         let intitialBalance = balance;
//         return function getBalance() {
//             return intitialBalance;
//         };
//     }

//    const getBalance = sayBalance(300);
//    console.log(getBalance());

// let firstName = 'Joseph'

// function changeNameGlobal () {
//     firstName = 'Bob'
//     console.log('Global', firstName)
// }

// function changeNameLocal() {
//     let firstName = 'Charlie';
//     console.log('Local', firstName);
// }

// changeNameGlobal();
// changeNameLocal();

// function functionFactory(job) {
//     return function capitalizeJobName() {
//         return job.toUpperCase();
//     };
// }

// let jobCapitalizeFactory = functionFactory('software developer');
// console.log(jobCapitalizeFactory());

// 

// function setupCounter() {
//   let counterTick = 0;

//   return function () {
//     counterTick++;
//     console.log(counterTick);
//   };                 
// }

// const tickCounter = setupCounter();
// for (let index =0; index < 60; index++) {
//     tickCounter();
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

function setupCounterFunction() {
    let tick =0;

    return function () {
        tick++;
        if (tick > 10) {
            tick = 0;
        }
        console.log(tick);
    };
}

const counterTick = setupCounterFunction();

for (let index = 0; index < 30; index++) {
    counterTick();
} 