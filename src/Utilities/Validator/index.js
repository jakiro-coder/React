export default function Validator(key, value) {

  let minChars;
  let maxChars;
  const MESSAGE_EMPTY = 'This field is required';

  function getValidationBirthdate(value, required) {
    const date = new Date();
    const dateCurrent = new Date(value);
    const minDate = date.getFullYear() - 100;
    const maxDate = date.getFullYear() - 5;
    const regex = new RegExp("^([1-9]|1\\d|2\\d|3[01])-([1-9]|1[0-2])-\\d{4}$");

    if (value === '' && required === true) {
      throw new Error(MESSAGE_EMPTY);
    }
    else if (!regex.test(value)) {
      throw new Error(`Only enter a valid format: DD-MM-YYY`);
    } 
    else if (!(dateCurrent.getFullYear() <= maxDate && dateCurrent.getFullYear() >= minDate)) {
      throw new Error(`Enter the year in the range: ${minDate} and ${maxDate}`);
    }
  };

  function isMinimumLenght(value, minLenght) {
    if (value.length < minLenght) throw new Error(`The minimum lenght is ${minLenght}`);
  }

  function isMaximumLenght(value, maxLenght) {
    if (value.length > maxLenght) throw new Error(`The maximum lenght is ${maxLenght}`);
  }

  function verifyIDNumberFormat(value, minLenght, maxLenght = 0) {
    isMinimumLenght(value, minLenght);
    isMaximumLenght(value, maxLenght);
    const regex = /^[1-9]{1}\d*(-\d[A-Z])?$/;
    if (!regex.test(value)) throw new Error('The format for ID Number is invalid');
  };

  const MaxSizeMessageOutOfRange = function (maxSize) {
    return `The size of string must be less or equal that ${maxSize} characters`;
  };

  function getValidationWithStrings(max = 0, required) {
    const messageError = VerifyStringsWithUpperAndCammelLetters();
    if (value === '' && required === true) {
      throw new Error(MESSAGE_EMPTY);
    }
    if (value === '' && required === false) {
      return;
    }
    else if (value.length > max) {
      throw new Error(MaxSizeMessageOutOfRange(max));
    }
    else if (messageError !== '') {
      throw new Error(messageError);
    }
  };

  function getValidationWithNumbers(max = 0, min = 0, required) {
    if (!Number(value)) {
      throw new Error('Only enter numbers');
    }
    const messageError = VerifyNumbers(max, min);
    if (value === '' && required) {
      throw new Error(MESSAGE_EMPTY);
    }
    if (value === '' && required === false) {
      return;
    }
    else if (value.length > max) {
      throw new Error(MaxSizeMessageOutOfRange(max));
    }
    else if (messageError !== '') {
      throw new Error(messageError);
    }
  };

  const VerifyEmail = () => {
    const regex = /^([a-z0-9A-Z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    const regEval = regex.test(value);
    if (!regEval) {
      throw new Error('The email has not a valid format');
    }
  }

  const VerifyStringsWithUpperAndCammelLetters = function () {
    const regex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{1,}[\s]*)+$/;
    const regEval = regex.test(value) ? '' : 'Only enter strings that begin with Capital Letter';
    return regEval;
  };

  const VerifyNumbers = function (max, min) {
    const regex = new RegExp("^[1-9]{1}[0-9]{" + min + "," + max + "}$");
    const regEval = regex.test(value) ? '' : `The field should have between ${min + 1} to ${max} digits`;
    return regEval;
  };

  switch (key) {
    case 'names':
      maxChars = 351;
      return getValidationWithStrings(maxChars, true);

    case 'firstLastName':
      maxChars = 100;
      return getValidationWithStrings(maxChars, true);

    case 'secondLastName':
      maxChars = 100;
      return getValidationWithStrings(maxChars, false);

    case 'favoriteName':
      maxChars = 100;
      return getValidationWithStrings(maxChars, true);

    case 'ci':
      maxChars = 15;
      minChars = 6;
      return verifyIDNumberFormat(value, minChars, maxChars);

    case 'ciExtension':
      maxChars = 3;
      return getValidationWithStrings(maxChars, true);

    case 'phone':
      maxChars = 8;
      minChars = 6;
      return getValidationWithNumbers(maxChars, minChars, true);

    case 'emergencyContactName':
      maxChars = 351;
      return getValidationWithStrings(maxChars, true);

    case 'emergencyContactPhone':
      maxChars = 8;
      minChars = 6;
      return getValidationWithNumbers(maxChars, minChars, true);

    case 'emergencyContactRelationship':
      maxChars = 50;
      return getValidationWithStrings(maxChars, true);

    case 'firstGuaranteeName':
      maxChars = 351;
      return getValidationWithStrings(maxChars, true);

    case 'firstGuaranteeCi':
      maxChars = 15;
      minChars = 6;
      return verifyIDNumberFormat(value, minChars, maxChars);

    case 'firstGuaranteePhone':
      maxChars = 8;
      minChars = 6;
      return getValidationWithNumbers(maxChars, minChars, true);

    case 'secondGuaranteeName':
      maxChars = 351;
      return getValidationWithStrings(maxChars, true);

    case 'secondGuaranteeCi':
      maxChars = 15;
      minChars = 6;
      return verifyIDNumberFormat(value, minChars, maxChars);

    case 'secondGuaranteePhone':
      maxChars = 8;
      minChars = 6;
      return getValidationWithNumbers(maxChars, minChars, true);;

    case 'birthdate':
      return getValidationBirthdate(value, true);

    case 'primaryEmail':
      const messageErrorEmail = VerifyEmail();
      const maxCharactersEmail = 100;
      if (value === '') {
        return MESSAGE_EMPTY;
      }
      else if (value.length > maxCharactersEmail) {
        return MaxSizeMessageOutOfRange(maxCharactersEmail);
      }
      else {
        return messageErrorEmail;
      }

    default:
      return null;
  }

}