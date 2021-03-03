module.exports = function toReadable (number) {
    if(number <= 20){
        return lastNum(number);
    } else if(number < 100) {
        let first = number/10;
        first = Math.floor(first) * 10;
        let second = number%first;
        let sec;
            if(second > 0) {
                sec = ' ' + lastNum(second);
            } else {
                sec = '';
            }
        return lastNum(first) + sec;
    } else if(number < 121 ||
        number > 200 && number < 221 ||
        number > 300 && number < 321 ||
        number > 400 && number < 421 ||
        number > 500 && number < 521 ||
        number > 600 && number < 621 ||
        number > 700 && number < 721 ||
        number > 800 && number < 821 ||
        number > 900 && number < 921) {
        let first = number/100;
        first = Math.floor(first);
        let second = number%100;
        let sec;
            if(second > 0) {
                sec = ' ' + lastNum(second);
            } else {
                sec = '';
            }
        return lastNum(first) + ' hundred' + sec;
    } else {
        let first = number/100;
        first = Math.floor(first);
        
        let second = number % (first * 100);
        second = second/10;
        second = Math.floor(second) * 10;
        let sec;
            if(second > 0) {
                sec = ' ' + lastNum(second);
            } else {
                sec = '';
            }
        
        let third = number/10;
        third = Math.floor(third) * 10;
        third = number%third;
        let th;
            if(third > 0){
                th = ' ' + lastNum(third);
            } else {
                th = '';
            }
        return lastNum(first) + ' hundred' + sec + th;
    }
    
}

function lastNum(num){
    switch(num){
        case 0: return "zero";
        case 1: return "one";
        case 2: return 'two';
        case 3: return "three";
        case 4: return 'four';
        case 5: return "five";
        case 6: return 'six';
        case 7: return "seven";
        case 8: return 'eight';
        case 9: return 'nine';
        case 10: return "ten";
        case 11: return "eleven";
        case 12: return 'twelve';
        case 13: return "thirteen";
        case 14: return 'fourteen';
        case 15: return "fifteen";
        case 16: return 'sixteen';
        case 17: return "seventeen";
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        case 20: return 'twenty';
        case 30: return 'thirty';
        case 40: return 'forty';
        case 50: return 'fifty';
        case 60: return 'sixty';
        case 70: return 'seventy';
        case 80: return 'eighty';
        case 90: return 'ninety';
    }
}
