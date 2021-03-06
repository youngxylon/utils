export function getValue(obj: object | any[], key: string | string[]): string | boolean {
  if (!obj) {
    return ''
  }

  if (typeof key === 'string') {
    return getValue(obj, key.split('.'))
  }

  if (key.length === 1 && Object.prototype.hasOwnProperty.call(obj, key[0])) {
    return obj[key[0]]
  }

  if (Object.prototype.hasOwnProperty.call(obj, key[0])) {
    return getValue(obj[key[0]], key.slice(1))
  }
}
