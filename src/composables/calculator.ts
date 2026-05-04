// import { btnValue, mathValue1, mathValue2, mathEqual, mathOutput, mathAction } from "../constants";
import { mathState } from "../constants";

export function btnClick(target: EventTarget | null) {
  if (target && 'value' in target) {
    const val = (target as HTMLInputElement).value
    if (target instanceof HTMLInputElement && target.classList.contains('btn_number')) {
      if (mathState.btnValue.value == '0') {
        mathState.btnValue.value = val;
      } else {
        mathState.btnValue.value += val;
      }
    }
  }
}

export function calculate(a: any, b: any, operator: any) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Деление на ноль';
    default: return 'Ошибка';
  }
}

export function btnEqual() {
  const btnNumbers: any = document.querySelectorAll('.btn_number');

  mathState.mathValue2.value = mathState.btnValue.value;
  if (mathState.mathValue2.value.trim() != '') {
    mathState.mathEqual.value = Number(mathState.mathValue1.value) * Number(mathState.mathValue2.value);
    mathState.btnValue.value = calculate(Number(mathState.mathValue1.value), Number(mathState.mathValue2.value), mathState.mathAction.value);
  } else {
    alert('Пусто!');
  }

  disabled(btnNumbers);

  mathState.btnValue.value = '';
  mathState.mathOutput.value += `${mathState.mathValue2.value}=${calculate(Number(mathState.mathValue1.value), Number(mathState.mathValue2.value), mathState.mathAction.value)}`;
}

function enabled(items:any) {
  // Типы!!!
  items.forEach(function (item: HTMLElement) {
    item.classList.remove('btn-disabled');
    item.removeAttribute('disabled');
  });
}

function disabled(items:NodeList) {
  // Типы!!!
  const itemsArr: HTMLElement[] = Array.from(items)

  itemsArr.forEach(function(item: HTMLElement) {
    item.classList.add('btn-disabled');
    item.setAttribute('disabled', 'true');
  });
}

export function clickMath(target: EventTarget | null) {
  // переделать? нашел решение в qwen
  // проверка на наличие события и пустоту value
  if (target && 'value' in target) {
    const val = (target as HTMLInputElement).value
    const btnActions: NodeList = document.querySelectorAll('.math-action');

    mathState.mathAction.value = val;
    mathState.mathValue1.value = mathState.btnValue.value;
    mathState.btnValue.value = '';
    mathState.mathOutput.value += `${mathState.mathValue1.value}${mathState.mathAction.value}`;
    disabled(btnActions)
  }
}

export function clickZero() {
  const btnActions = document.querySelectorAll('.math-action');
  const btnNumbers = document.querySelectorAll('.btn_number');

  mathState.btnValue.value = '';
  mathState.mathValue1.value = '';
  mathState.mathValue2.value = '';
  enabled(btnActions);
  enabled(btnNumbers);
  mathState.mathOutput.value = ''
}

export function removeNumber() {
  mathState.btnValue.value = mathState.btnValue.value.slice(0, mathState.btnValue.value.length - 1);
}