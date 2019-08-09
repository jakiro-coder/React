const formater = {
  formatDateToDDMMYY: formatDateToDDMMYY,
  formatDateToYYMMDD: formatDateToYYMMDD,
}

function formatDateToDDMMYY(date, rareCharactersLong = 9) {
  if (date.length > 11) {
    const array = date.substring(0, date.length - rareCharactersLong).split('-');
    const [year, month, day] = array;
    return `${removeZero(day)}-${removeZero(month)}-${year}`;
  }
  return date;
}

function formatDateToYYMMDD(date) {
  const splitDate = date.split('-');
  const [valueDay, valueMonth, valueYear] = splitDate;
  return `${valueYear}-${valueMonth}-${valueDay}`;
}

function removeZero(value) {
  const numberParse = parseInt(value, 10)
  if (numberParse < 10) {
    return numberParse.toString();
  }
  return value;
}
export default formater;