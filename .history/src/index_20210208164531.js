module.exports = function toReadable(num) {

    const zero = 'zero';
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondTen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    let number;

    if (typeof (num) === 'number' && num >= 0) {
        number = num.toString();
        //return 0
        if (number == 0) {
            return zero;
        } //return 1-9
        else if (number.length == 1) {
            for (let i = 0; i <= units.length; i++) {
                if (number == i) {
                    return units[i - 1];
                }
            }
        }
        else if (number.length == 2) {
            //return 10-90
            for (let i = 0; i <= tens.length; i++) {
                if (number.charAt(0) == i && number.charAt(1) == 0) {
                    return tens[i - 1];
                }

            }
            //return 11-19
            if (number.charAt(0) == 1) {
                for (let i = 0; i <= secondTen.length; i++) {
                    if (number.charAt(1) == i) {
                        return secondTen[i - 1];
                    }
                }
            }
            //return 21-99
            for (let i = 1; i <= tens.length; i++) {
                if (number.charAt(0) == i) {
                    for (let j = 0; j <= units.length; j++) {
                        if (number.charAt(1) == j) {
                            return `${tens[i - 1]} ${units[j - 1]}`;
                        }
                    }
                }
            }
        }


        if (number.length == 3) {
            //return 100-900
            for (let i = 0; i <= hundred.length; i++) {
                if (number.charAt(0) == i && number.charAt(1) == 0 && number.charAt(2) == 0) {
                    let hundreds = hundred[i - 1];
                    return hundreds;
                }
            }
            //return 110-990
            for (let i = 0; i <= hundred.length; i++) {
                if (number.charAt(0) == i) {
                    for (let j = 0; j <= tens.length; j++) {
                        if (number.charAt(1) == j && number.charAt(2) == 0) {
                            return `${hundred[i - 1]} ${tens[j - 1]}`;
                        }
                    }
                }
            }

            //return 121-999
            for (let i = 0; i <= hundred.length; i++) {
                if (number.charAt(0) == i) {
                    for (let j = 0; j <= tens.length; j++) {
                        if (number.charAt(1) == j && number.charAt(1) != 1 && number.charAt(1) != 0) {
                            for (let k = 0; k <= units.length; k++) {
                                if (number.charAt(2) == k) {
                                    return `${hundred[i - 1]} ${tens[j - 1]} ${units[k - 1]}`;
                                }
                            }
                        }
                        //return 121-999
                        else if (number.charAt(1) == 1 && number.charAt(2) != 0) {
                            for (let a = 0; a <= secondTen.length; a++) {
                                if (number.charAt(2) == a) {
                                    return `${hundred[i - 1]} ${secondTen[a - 1]}`;
                                }
                            }

                        } else if (number.charAt(1) == 0) {
                            for (let a = 0; a <= units.length; a++) {
                                if (number.charAt(2) == a) {
                                    return `${hundred[i - 1]} ${units[a - 1]}`;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


}
