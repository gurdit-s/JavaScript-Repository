function palindrome(str) {
    let anstring = str.replace(/[^A-Za-z\d]/gi,"")
     anstring = anstring.toLowerCase()
   
     let splitStr = anstring.split("");
     let reverseStr = splitStr.reverse();
     let joinStr = reverseStr.join("");
   
     // console.log(joinStr)
   if (joinStr === anstring){
     return true;
   } else {
     return false;
   }
   }
   console.log(palindrome("_Eye"));