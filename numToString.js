const numToString = (num) => {
    let convertedString = []
    number = num.toString()

    if (number.length < 7) {
        const reversedNumber = number.split("").reverse().join("")

        for(let i = 0; i < number.length; i++) {
            if (reversedNumber === '0') {
                convertedString = [onesPlace(reversedNumber.charAt(i)), ...convertedString]
            }
            if (i === 0 && reversedNumber.charAt(i + 1) !== '1'
            && reversedNumber.charAt(i) !== '0') {
                convertedString = [onesPlace(reversedNumber.charAt(i)), ...convertedString]
            } else if (i === 0 && reversedNumber.charAt(1) === '1') {
                convertedString = [teensPlace(reversedNumber.charAt(i)), ...convertedString]
            } 
            if (i === 1 && reversedNumber.charAt(1) > '1') {
                convertedString = [`${tensPlace(reversedNumber.charAt(i))} `, ...convertedString]
            }
            if (i === 2 && reversedNumber.charAt(2) > '0') {
                convertedString = [`${onesPlace(reversedNumber.charAt(i))} hundred `, ...convertedString]
            }
            if (i === 3 && reversedNumber.charAt(i + 1) !== '1'
            && reversedNumber.charAt(i) !== '0') {
                convertedString = [`${onesPlace(reversedNumber.charAt(i))} thousand `, ...convertedString]
            } else if (i === 3 && reversedNumber.charAt(4) === '1') {
                convertedString = [`${teensPlace(reversedNumber.charAt(i))} thousand `, ...convertedString]
            }
            if (i === 4 && reversedNumber.charAt(4) > '1') {
                convertedString = [`${tensPlace(reversedNumber.charAt(i))} `, ...convertedString]
            }
            if (i === 5) {
                if (reversedNumber.charAt(3) === '0' && reversedNumber.charAt(4) === '0') {
                    convertedString = [`${onesPlace(reversedNumber.charAt(i))} hundred thousand `,
                    ...convertedString]
                } else if (reversedNumber.charAt(i) !== '0'){
                    convertedString = [`${onesPlace(reversedNumber.charAt(i))} hundred `, ...convertedString]
                }
            }
        }
    } else {
        convertedString = ['Invalid input.', ...convertedString]
    }

    return convertedString.join('')
}

const onesPlace = (one) => {
    let convertedString
    const ones = [ 'zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine']
    switch (one) {
        case '0': 
            return ones[0]
        case '1': {
            convertedString = ones[1]
            break
        }
        case '2': {
            convertedString = ones[2]
            break
        }
        case '3': {
            convertedString = ones[3]
            break
        }
        case '4': {
            convertedString = ones[4]
            break
        }
        case '5': {
            convertedString = ones[5]
            break
        }
        case '6': {
            convertedString = ones[6]
            break
        }
        case '7': {
            convertedString = ones[7]
            break
        }
        case '8': {
            convertedString = ones[8]
            break
        }
        case '9': {
            convertedString = ones[9]
            break
        }
        default:{
            convertedString = 'Invalid input ones'
        }
    }
    
    return convertedString
}

const teensPlace = (teen) => {
    let convertedString

    const teens = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen' ]

    switch (teen) {
        case '0': {
            convertedString = teens[0]
            break
        }
        case '1': {
            convertedString = teens[1]
            break
        }
        case '2': {
            convertedString = teens[2]
            break
        }
        case '3': {
            convertedString = teens[3]
            break
        }
        case '4': {
            convertedString = teens[4]
            break
        }
        case '5': {
            convertedString = teens[5]
            break
        }
        case '6': {
            convertedString = teens[6]
            break
        }
        case '7': {
            convertedString = teens[7]
            break
        }
        case '8': {
            convertedString = teens[8]
            break
        }
        case '9': {
            convertedString = teens[9]
            break
        }
        default:{
            convertedString = `Invalid input teens`
        }
    }
    
    return convertedString
}

const tensPlace = (ten) => {
    let convertedString

    const tens = [ , , 'twenty', 'thirty', 'fourty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    switch (ten) {
        case '0': {
            convertedString = convertedString
            break
        }
        case '2': {
            convertedString = tens[2]
            break
        }
        case '3': {
            convertedString = tens[3]
            break
        }
        case '4': {
            convertedString = tens[4]
            break
        }
        case '5': {
            convertedString = tens[5]
            break
        }
        case '6': {
            convertedString = tens[6]
            break
        }
        case '7': {
            convertedString = tens[7]
            break
        }
        case '8': {
            convertedString = tens[8]
            break
        }
        case '9': {
            convertedString = tens[9]
            break
        }
        default:{
            convertedString = 'Invalid input tens'
        }
    }
    
    return convertedString
}

console.log(`${numToString(00001)}`)
console.log(`${numToString(911619)}`)
console.log(`${numToString(907604)}`)
console.log(`${numToString(601601)}`)
console.log(`${numToString(600600)}`)
console.log(`${numToString(627644)}`)
console.log(`${numToString(717602)}`)
console.log(`${numToString(1111)}`)

console.log(`${numToString(214)}`)
console.log(`${numToString(2)}`)
console.log(`${numToString(14)}`)
console.log(`${numToString(10000)}`)
