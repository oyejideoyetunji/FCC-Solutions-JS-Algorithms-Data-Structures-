const solution = (area) =>{
  let squareArray = [];
  const calcSqrs = (area) => {
    let root = Math.trunc(Math.sqrt(area));
    let square = root * root;
    squareArray.push(square);
    if(square == area){
      return;
    }else if(area - square == 1){
      squareArray.push(1);
      return;
    }else if(area - square > 1){
      calcSqrs((area - square))
    }
  }
  calcSqrs(area);
  return squareArray;
}

console.log(solution(12));
console.log(solution(15324));