function upperCaseStr(text) {
  let textArr = text.toLowerCase().split(' ')
  let caps = textArr.map(el => {
    return el[0].toUpperCase() + el.slice(1)
  })
  return caps.join(' ')
}

console.log(upperCaseStr('hey there buddy')) // => 'Hey There Buddy'
console.log(upperCaseStr('good night everybody, thanks for coming!')) // => 'Good Night Everybody, Thanks For Coming!'
console.log(upperCaseStr('the lazy fox jumps over the... what again?')) // => 'The Lazy Fox Jumps Over The... What Again?'