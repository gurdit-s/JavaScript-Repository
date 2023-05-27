function rot13(str) {
 
    let alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
        
    let alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    let result = ""
    for(let i=0; i<str.length; i++)
    {
        let temp = str.charAt(i)
        temp = alphabets13.indexOf(temp)
        temp = alphabets[temp]
        result += temp
    }
    console.log(result)
    return result
    }
            
    rot13("SERR PBQR PNZC")