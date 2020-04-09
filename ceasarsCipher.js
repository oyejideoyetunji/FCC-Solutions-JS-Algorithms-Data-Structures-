function rot13(str) {

  let alphabet_array = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  let decoded_str = [...str].map(

    (letter) => {
      let letter_idx = alphabet_array.indexOf(letter.toUpperCase());
      if(letter_idx === -1){
        return letter;
      }
      else if(letter_idx !== -1)
      {
        if((letter_idx + 13) >= (alphabet_array.length))
        {
          return alphabet_array[(letter_idx + 13) - (alphabet_array.length)];
        }
        else if((letter_idx + 13) < (alphabet_array.length))
        {
          return alphabet_array[(letter_idx + 13)];
        }
      }
    }
  ).join('');
  return decoded_str;
}

console.log(rot13('SERR CVMMN!'));