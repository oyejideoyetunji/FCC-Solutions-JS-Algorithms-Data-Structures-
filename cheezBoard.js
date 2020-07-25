let board = '';
for(let count = 1; count <= 8; count++){
    let line = '', char = '';
    if(count%2 == 0){
        char = '# ';
    }else{ char = ' #'}
    for(x = 0; x < 4; x++){
        line += char;
    }
    board += line + '\n';
}
console.log('Cheez boared i guess:\n', board);