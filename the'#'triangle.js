let triangle = '';
  for(let count = 1; count <= 7; count++){
      let line = '';
      for(let x = 0; x < count; x++){
          line += '#';
      }
      triangle += line + '\n';
  }
console.log('#Triangle:\n', triangle);