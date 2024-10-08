const palindromes = function (str) {
    const validList = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const strNew = str.toLowerCase().split('').filter((character) => validList.includes(character)).join('');
  
    const strRev = strNew.split('').reverse().join('');
  
    return strNew === strRev;
};

// Do not edit below this line
module.exports = palindromes;
