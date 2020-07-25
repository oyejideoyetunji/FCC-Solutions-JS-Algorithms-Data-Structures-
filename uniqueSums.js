let arr = [1,2,3,4,5,6], sets = [], num;
for(let i = 0; i < arr.length; i++){
    if(!sets.includes(arr[i])) sets.push(arr[i]);
    let set = [];
    set.push(arr[i]);
    for(let x = 0; x < arr.length; x++){
        if( !set.includes(arr[x]) ) set.push(arr[x]);
        num = set.reduce((acc, cur) => acc + cur);
        if(num > 9) break;
        if( !sets.includes(num) ) sets.push(num);
    }
}
console.log('Watch and see:\n', sets);