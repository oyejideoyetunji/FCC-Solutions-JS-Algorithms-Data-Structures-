let result = '';
  for(let num = 1; num <= 100; num++){
      if(num%3 == 0 && num%5 == 0){
          result += 'FizzBuzz \n';
          continue;
      }
      if(num%3 == 0){
          result += 'Fizz \n';
          continue;
      }
      if(num%5 == 0){
          result += 'Buzz \n';
          continue;
      }
      result += num + '\n';
  }
  console.log('FizzBuzz:\n', result);