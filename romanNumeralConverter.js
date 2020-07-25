function convertToRoman(num) {

  const roman_fig_obj = {
    1: 'I', 5: 'V',
    10: 'X', 50: 'L',
    100: 'C', 500: 'D',
    1000: 'M'
  };

  let roman_num = [...num.toString()].map(
    (el, idx, arr) => {
      let significant_val = parseInt(el); 
      let power_of_ten = 10 **(arr.length-(idx + 1));
      return {significant_val, power_of_ten};
    }
  ).map(
    (obj) => {
      let {significant_val, power_of_ten} = obj;

      if(significant_val < 4)
      {
        return roman_fig_obj[power_of_ten].repeat(significant_val);
      }
      else if(significant_val == 4)
      {
        return roman_fig_obj[power_of_ten] + roman_fig_obj[(power_of_ten * 5)];
      }
      else if(significant_val > 4 && significant_val < 9)
      {
        return roman_fig_obj[(power_of_ten * 5)] + roman_fig_obj[power_of_ten].repeat((significant_val - 5));
      }
      else if(significant_val == 9)
      {
        return roman_fig_obj[power_of_ten] + roman_fig_obj[(power_of_ten * 10)]
      }
    }
  ).reduce((prev, curr) => {
    return prev + curr;
  });

  return roman_num;
 };
 
 console.log(convertToRoman(3654));
