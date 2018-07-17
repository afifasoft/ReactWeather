// var names = ['Andrew', 'Julie','Jen'];

// names.forEach(function (name) {
//   console.log('forEach', name);
//
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('something else');
//   var x = 'something';
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

// var person = {
//   name: 'Andrew',
//   greet: function (){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to  '+name);
//     });
//
//   }
// };
//
// person.greet();

// Challenge Area
function add(a, b) {
  return a + b;
}

console.log(add(9, 10));
console.log(add(9, 0));

// addStatment
var addStatment = (a, b) => {
  return a + b;
}

console.log(addStatment(10, 20));

// addExpression
var addExpression = (a, b) => a + b;

console.log(addExpression(30,22));


// Challenge add array elements
var numbers = [10, 20, 30];

numbers.forEach((numbers) => {
  console.log(add(numbers, numbers));
})
