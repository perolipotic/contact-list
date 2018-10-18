export function isEmpty(value) {
  return value ? undefined : 'This should not be empty.'
}

export function isEmail(value) {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  return regex.test(value) ? undefined : 'This should be an email.'
}

export function isNumber(value) {
  const reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g
  return reg.test(value) ? undefined : 'This should be a number'
}