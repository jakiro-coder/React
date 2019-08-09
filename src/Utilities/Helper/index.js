class Helper {
  convertTheFirstCharacterToUppercase(currentWord) {
    if (currentWord) {
      return currentWord.toLowerCase()
        .trim()
        .split(' ')
        .map(v => v[0].toUpperCase() + v.substr(1))
        .join(' ');
    }
    return '';
  }
}

export default new Helper();