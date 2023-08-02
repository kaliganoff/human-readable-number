module.exports = function toReadable (number) {
    var hundred = 100;
    var thousand = 1000;
    var remainder = 0;
    var remainder100 = 0;
    var result;
    var upToTwenty = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    
    var tenthsUpToHundred = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    
    if (number < 20) {
    result = upToTwenty[number];
    }
    else if (number < 100){
    remainder = number % 10;
    result = tenthsUpToHundred[Math.floor(number / 10)];
    if (remainder) {
        result = result += ' ' + upToTwenty[remainder];
    }
    }
    else if (number < 1000){
        remainder100 = number % 100;
        result = upToTwenty[Math.floor(number / 100)] + ' hundred';
        if (remainder100) {
            if (remainder100 < 20)
            result += ' ' + upToTwenty[remainder100];
             else if (tenthsUpToHundred[Math.floor(remainder100 / 10)] === 'zero')
                result += '';
            else {
            remainder = number % 10;
            result += ' ' + tenthsUpToHundred[Math.floor(remainder100 / 10)];
            if (remainder) {
                    result = result += ' ' + upToTwenty[remainder];
            }
            }
        }
    } 
    else if (number = 1000)
    result = 'one thousand';

return result;
}
