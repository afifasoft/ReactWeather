// function getTempCallback (location, callback){
//   callback(undefined, 77);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });

function addPromise(a, b){
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject('a & b need to be numbers');
    }

  });
}

addPromise(10,20).then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});

addPromise('andrew', 9).then(function(sum){
  console.log('This should not show up', sum);
},function(err){
  console.log('This should appear', err);
});
