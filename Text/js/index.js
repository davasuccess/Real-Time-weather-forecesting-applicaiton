

let decryptDiv= document.getElementById("decrypted").style.display= 'none';




//        stating point for the tree algorithm
        let encryptBtn = document.querySelector("#encrypt").addEventListener('click', function encrytor(e)
      
        {
                let myTxt = document.getElementById("inputTxt").value;
                document.querySelector('#decrypted').style.display= 'block'
                let output= document.querySelector('#outTxt');
                
                const messageArr = myTxt.split("");
                
                console.log( myTxt, 'text of typeof function');
                console.log("inTxt for the for loop funciton",myTxt);

                // e.preventDefault()
                // alert("my btn is working")
                let encryptedMessage =[];
  
       
                // console.log("message array", messageArr);
                // document.write("message array", messageArr);
                output.innerHTML = messageArr;
        
                let encryptedMessageArr = [];
        for (i = 0; i < messageArr.length; i++)
        { 
                let letter;
        
            switch(messageArr[i])
            {
                case "a":
                    letter = "@";
                    break;
                case "b":
                     letter = ".";
                        break;
                case "c":
                        letter = "!";
                        break;
                case "d":
                  letter = "343";
                  break;
                  case "e":
                    letter = "A";
                    break;
                  case "f":
                     letter = "#";
                        break;
                case "g":
                        letter = "!";
                        break;
                case "h":
                  letter = "787^%#YDHJNV<Lf";
                  break;        
                case "i":
                  letter = "?MP Y: TIG";
                  break;
              case "j":
                   letter = "O&)(O";
                      break;
              case "k":
                      letter = ":><M><MVKEdyjh";
                      break;
              case "l":
                letter = "!_)KNNV";
                break;
              case "m":
                  letter = "+";
                  break;
              case "n":
                   letter = ".IUTIGU^$&";
                      break;
              case "o":
                      letter = "(*(*(KGJGKJ";
                      break;
              case "p":
                letter = "!";
                break;
             case "q":
                  letter = "]";
                  break;
              case "r":
                   letter = "$%^&**IGKJ";
                      break;
              case "t":
                      letter = "&(*^bbkKJGJGfg[";
                      break;
              case "u":
                letter = "[90GKJGK$^&##&^{";
                break;
              case "v":
                  letter = "t^&((*^$87";
                  break;
              case "w":
                   letter = ".";
                      break;
              case "x":
                      letter = "/jdjdjd";
                      break;
              case "y":
                letter = "*%*%**";
                break;
              case "z":
                letter = "6$^$&}";
                break;
        
                case "A":
                  letter = "}}{$#2";
                  break;
              case "B":
                   letter = "bfd";
                      break;
              case "C":
                      letter = "***'";
                      break;
              case "D":
                letter = "({@`})";
                break;
                case "E":
                  letter = "A909@";
                  break;
                case "F":
                   letter = "#@$#@$";
                      break;
              case "G":
                      letter = "!w#%hj";
                      break;
              case "H":
                letter = "m^>bg";
                break;        
              case "I":
                letter = "+6^%$";
                break;
            case "J":
                 letter = ".$#";
                    break;
            case "``":
                    letter = "+-0!";
                    break;
            case "L":
              letter = "32+-0";
              break;
            case "M":
                letter = "+-0";
                break;
            case "N":
                 letter = "=%";
                    break;
            case "O":
                    letter = "_%%%%-";
                    break;
            case "P":
              letter = "^%";
              break;
           case "Q":
                letter = ":;";
                break;
            case "R":
                 letter = "~~";
                    break;
            case "$":
                    letter = "(&%";
                    break;
            case "U":
              letter = "**{";
              break;
            case "V":
                letter = "t#@7";
                break;
            case "W":
                 letter = "^";
                    break;
            case "X":
                    letter = "A";
                    break;
            case "Y":
              letter = "D";
              break;
            case "Z":
              letter = "849";
              break;
              case "0":
                letter = "*(&()^bkbk.l;d";
                break;
              case "1":
                letter = ":;";
                break;
            case "2":
                 letter = "~~";
                    break;
            case "3":
                    letter = "(&%";
                    break;
            case "4":
              letter = "**{";
              break;
            case "5":
                letter = "t#@7";
                break;
            case "6":
                 letter = "^";
                    break;
            case "7":
                    letter = "A";
                    break;
            case "8":
              letter = "D";
              break;
            case "9":
              letter = "849";
              break;
                          
                        
                        default :
                          letter = messageArr[i];
                           break;       
             }
                encryptedMessageArr.push(letter);
        //      console.log("encrypeted message Array", messageArr)
        //      console.log("encrypeted message Array", encryptedMessageArr);
            output.value= ("encrypeted message Array", encryptedMessageArr);
        //     document.write("encrypeted message Array", encryptedMessageArr);
        //     alert("encrypeted message Array", encryptedMessageArr);
             

        } 
            //encryptedMessage = encryptedMessageArr.join("");
               // return encryptedMessage; 
                 return encryptedMessageArr; 
           
            //console.log(encrytor(nalkhdahkldkha))
        });
        








// Starting the ceaser cipher form here......

  document.getElementById("Caeser").addEventListener('click', function ceaserEncrypt (e)
      
        {
              
                console.log("ceaser cipher is working!!!")
                let myTxt =document.getElementById("inputTxt").value.toUpperCase();
                
                document.querySelector('#decrypted').style.display= 'block'
                let output= document.querySelector('#outTxt');
               
             
                        let shift = 5;
                        let solved = '' ;

                        for(var i  = 0; i < myTxt.length; i++){
                                let ascii_num = myTxt[i].charCodeAt();
                                let sum = ascii_num + shift;
                                console.log(sum)
                                // if(sum >= 65 && sum <= 90){
                                //         solved +=String.fromCharCode(sum)
                                // }
                                // else if()

                                sum >= 65 && sum <= 90 ? 
                                solved += String.fromCharCode(sum) :sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)): solved += myTxt[i]
                        output.value = solved

                        console.log(solved);
                        }
                        myTxt.value = solved;

        });
        // End of Ceaser Cipher Algorithm




// starting of Indexof and CharAt Algorithm

 document.getElementById("txtindex").addEventListener('click', function TXT (e)
 
      
{
      console.log("welcome Text Encryption using IndexOf !!!!1")
        console.log("Text IndexOf is working!!!")
        let myTxt =document.getElementById("inputTxt").value;
        
        document.querySelector('#decrypted').style.display= 'block'
        let output= document.querySelector('#outTxt');

        var specialCharaters = "!~@#$%^&*()_+<>.`=_";
        var letters = "abcdefghijklmnopqrstuvwxyz";
        var encrypt = " ";
        for(var i=0; i< myTxt.length;i++){
                encrypt += specialCharaters.charAt(letters.indexOf(myTxt.charAt((i))));
                output.value = encrypt;
                console.log(encrypt);
        }
});
       





