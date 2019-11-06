const getOne = new Promise(function(resolve, reject) {
    resolve('one');
  });
  const getTwo = new Promise(function(resolve, reject) {
    resolve('two');
  });
  const getThree = new Promise(function(resolve, reject) {
    resolve('three');
  });   
  const getFour = new Promise(function(resolve, reject) {
    resolve('four');
  });
  
  //TULIS LOGIC DISINI
getOne.then(z => {
  getTwo.then(x=> {
    getThree.then(c => {
      getFour.then(v => {
          console.log(z,x,c,v);
      })
    })
  })
})










  /*
  EXPECTED OUTPUT 
  Dengan function di atas buatlah console.log dengan output "one two three four"
  
  */