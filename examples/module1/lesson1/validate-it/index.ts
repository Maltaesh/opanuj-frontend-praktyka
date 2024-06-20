import { getHTMLElement, renderResultMessage } from './commonUtils';
import { EMPTY_STRING, EVENTS_TYPES } from './constants';
import { validateInput } from './inputValidators';

export function inputValidator() {
  const validationInput = getHTMLElement<HTMLInputElement>('validation-input');
  const validateBtn = getHTMLElement<HTMLButtonElement>('validate-button');
  const clearBtn = getHTMLElement<HTMLButtonElement>('clear-button');
  const validationResult = getHTMLElement<HTMLDivElement>('validation-result');

  const updateValidationResultContent = renderResultMessage(validationResult);
  const updateValidationInputContent = renderResultMessage(validationInput);

  validateBtn.addEventListener(EVENTS_TYPES.click, () => {
    const value = Number(validationInput.value);

    return validateInput(value)
      ? updateValidationResultContent('Valid')
      : updateValidationResultContent('Invalid');
  });

  clearBtn.addEventListener('click', () => {
    updateValidationInputContent(EMPTY_STRING);
    updateValidationResultContent(EMPTY_STRING);
  });
}

inputValidator();
