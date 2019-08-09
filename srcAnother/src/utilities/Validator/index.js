export default function Validator(key, value) {

  const MESSAGE_EMPTY_NAME = 'This field is required';

  const MaxSizeMessageOutOfRange = (maxSize) => {
    return `The size of string must be less or equal that ${maxSize} characters`;
  }

  const MaxSizeMessageOutOfRangeNumber = (maxSize) => {
    return `The size must be less or equal that ${maxSize} characters`;
  }

  const MessageOutOfRange = (maxSize, minSize) => {
    return `The size of the text must be between ${minSize} and ${maxSize} characters`;
  }

  function getValidationWithStrings(max = 0, required) {
    const messageError = VerifyStringsWithUpperAndCammelLetters();
    if (value === '' && required === true) {
      throw new Error(MESSAGE_EMPTY_NAME);
    }
    if (value === '' && required === false) {
      return;
    }
    else if (value.length > max) {
      throw new Error(MaxSizeMessageOutOfRange(max));
    }
    else if(messageError !== ''){
      throw new Error(messageError);
    }
  }

  function getValidationWithNumbers(max = 0, min = 0, required) {
    const messageError = VerifyNumbers(max, min);
    if (value === '' && required) {
      throw new Error(MESSAGE_EMPTY_NAME);
    }
    if (value === '' && required === false) {
      return;
    }
    else if (value.length > max) {
      throw new Error(MaxSizeMessageOutOfRangeNumber(max));
    }
    else if(messageError !== ''){
      throw new Error(messageError);
    }
  }

  function getIdNumberValidation(max = 0, min = 0, required) {
    const messageError = VerifyIdNumberFormat(value);
    if (!value && required) {
      throw new Error(MESSAGE_EMPTY_NAME);
    }
    if (!value && !required) {
      return;
    }
    else if (value.length > max || value.length < min) {
      throw new Error(MessageOutOfRange(max,min));
    }
    else if(messageError){
      throw new Error(messageError);
    }
  }

  const VerifyStringsWithUpperAndCammelLetters = () => {
    const regex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{1,}[\s]*)+$/;
    const regEval = regex.test(value) ? '' : 'The format of the string is invalid';
    return regEval;
  }

  const VerifyIdNumberFormat = (idNumber) => {
    const regex = new RegExp("^[a-zA-Z0-9-]+$");
    const regEval =  regex.test(idNumber) ? '' : `The ID Number contains Numbers Letters and (-)`;
    return regEval;
  }

  const VerifyNumbers = (max, min) => {
    const regex = new RegExp("^[1-9]{1}[0-9]{" + min + "," + max + "}$");
    const regEval = regex.test(value) ? '' : `The Field should have between ${min + 1} to ${max} digits`;
    return regEval;
  }

  const VerifyEmail = () => {
    const regex = /^([a-z0-9A-Z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    const regEval = regex.test(value);
    if(!regEval)
    {
      throw new Error('The email has not a valid format');
    }
  }

  switch (key) {
    case 'names':
      const maxCharactersName = 351;
      return getValidationWithStrings(maxCharactersName, true);

    case 'favoriteName':
      const maxCharactersFavoriteName = 100;
      return getValidationWithStrings(maxCharactersFavoriteName, true);

    case 'firstLastName':
      const maxCharactersFirstLastName = 100;
      return getValidationWithStrings(maxCharactersFirstLastName, true);

    case 'secondLastName':
      const maxCharactersSecondName = 100;
      return getValidationWithStrings(maxCharactersSecondName, false);

    case 'documentNumber':
      const maxCharactersDocumentNumber = 10;
      const minCharactersDocumentNumber = 5;
      return getIdNumberValidation(maxCharactersDocumentNumber, minCharactersDocumentNumber, true);

    case 'documentExtension':
      const maxCharactersDocumentExtension = 5;
      return getValidationWithStrings(maxCharactersDocumentExtension, true);

    case 'email':
      const messageErrorEmail = VerifyEmail();
      const maxCharactersEmail = 100;
      if (value === '') {
        return MESSAGE_EMPTY_NAME;
      }
      else if (value.length > maxCharactersEmail) {
        return MaxSizeMessageOutOfRange(maxCharactersEmail);
      }
      else {
        return messageErrorEmail;
      }

    case 'referencePhone':
      const maxCharactersReferencePhone = 8;
      const minCharactersReferencePhone = 6;
      return getValidationWithNumbers(maxCharactersReferencePhone, minCharactersReferencePhone, true);

    case 'bankName':
      const maxCharactersBankName = 20;
      return getValidationWithStrings(maxCharactersBankName, false);

    case 'bankAccountNumber':
      const maxCharactersBankAccountNumber = 20;
      const minCharactersBankAccountNumber = 9;
      return getValidationWithNumbers(maxCharactersBankAccountNumber, minCharactersBankAccountNumber, false);

    default:
      return null;
  }
}