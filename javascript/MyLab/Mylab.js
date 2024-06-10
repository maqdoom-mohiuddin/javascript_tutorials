console.log('This is MyLab')


let car = new Promise((resolve , reject) => {
    let carPurches = false;
    if(carPurches){
      resolve('Kia Car....')
    }else{
      reject('Suzuki Bike...')
    }
  })

  car.then((data) =>{
    console.log(data)
    console.log('carnival...');
  }).then((data) =>{
    console.log('Seven Seater...');
  })

  .catch((data) =>{
    console.log(data)
    console.log('Gixxer..')
  })

  .finally((data) =>{
    console.log('Congratulations....')
  })