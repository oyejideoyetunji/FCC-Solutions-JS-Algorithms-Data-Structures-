function secondMinimum(values){
    let min = Number.POSITIVE_INFINITY;
    let sndMin = Number.POSITIVE_INFINITY;
  
    values.forEach((val) =>{
      if(val < min){
        sndMin = min;
        min = val;
      }
      else if(val < sndMin) sndMin = val;
    })
    return sndMin;
  }

  console.log(secondMinimum([11,3,7,2,9,10]));
  console.log(secondMinimum([-2,-11,-100,3]));