// this section decrypt the encrypted to the normal text






function dencrytor  (message) {
    let dencryptedMessage;
    
    const messageArr = message.split("");
    console.log("message array", messageArr);
    document.write("message array", messageArr);
    
    
    let dencryptedMessageArr = [];
    
    for (i = 0; i < messageArr.length; i++){
    
    
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
         dencryptedMessageArr.push(letter);
         console.log("dencrypeted message Array", dencryptedMessageArr);
         document.write( dencryptedMessageArr);
    
        } 
        dencryptedMessage = dencryptedMessageArr.join("");
            return dencryptedMessage; 
    
        //return dencryptedMessageArr; 
    };
   console.log(dencrytor('1'))
  
  