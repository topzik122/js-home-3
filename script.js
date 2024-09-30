let number1= +prompt("введите возраст");



function ageNumber(name, number) {
    if (number >= 0 && number <= 2) {
       return "Вы ребёнок";
   } else if (number >= 12 && number <= 18) {
       return "Вы подросток";
   } else if (number >= 18 && number <= 60) {
       return "Вы взрослый";
   } else if (number > 60) {
       return "Вы пенсионер";
   } else {
       return "Некорректный ввод";
   }
}


alert(result);  // Выводим результат на экран
numbersimvol(number1)
function numbersimvol(number) {
    switch (number) {
        case 1:
          return("!");
           break;
      case 2:
            return ("@")
            break;
        case 3:
            return ("#")
            break
        case 4:
           return ("$")
           break
        case 5:
            return ("%")
            break
       case 6:
           return ("^")
            break
        case 7:
            return ("&")
            break
        case 8:
             return ("*")
            break
       case 9:
             return ("(")
             break
            default:
               return("Неправильный ввод. Введите число от 0 до 9.");      
    }
}
alert(numbersimvol(number1))



