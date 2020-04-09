function palindrome(str) {
  let formated_str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return formated_str === [...formated_str].reverse().join('');
}

console.log(palindrome("#ey_e@"));