export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return !(this.name.search(/\d\d\d/) !== -1 || this.name.search(/\d|_|-|а-я|ё|Ё|А-Я/) !== -1 || this.name.search(/\d|_|-|а-я|ё|Ё|А-Я$/) !== -1);
  }
}
