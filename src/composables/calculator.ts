import { btnValue, mathValue1, mathValue2, mathEqual, mathOutput, mathAction } from "../constants";

export function btnClick(target: EventTarget | null) {
  if (target && 'value' in target) {
    const val = (target as HTMLInputElement).value
    if (target instanceof HTMLInputElement && target.classList.contains('btn_number')) {
      if (btnValue.value == '0') {
        btnValue.value = val;
      } else {
        btnValue.value += val;
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

  mathValue2.value = btnValue.value;
  if (mathValue2.value.trim() != '') {
    mathEqual.value = Number(mathValue1.value) * Number(mathValue2.value);
    btnValue.value = calculate(Number(mathValue1.value), Number(mathValue2.value), mathAction.value);
  } else {
    alert('Пусто!');
  }

  disabled(btnNumbers);

  btnValue.value = '';
  mathOutput.value += `${mathValue2.value}=${calculate(Number(mathValue1.value), Number(mathValue2.value), mathAction.value)}`;
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

    mathAction.value = val;
    mathValue1.value = btnValue.value;
    btnValue.value = '';
    mathOutput.value += `${mathValue1.value}${mathAction.value}`;
    disabled(btnActions)
  }
}

export function clickZero() {
  const btnActions = document.querySelectorAll('.math-action');
  const btnNumbers = document.querySelectorAll('.btn_number');

  btnValue.value = '';
  mathValue1.value = '';
  mathValue2.value = '';
  enabled(btnActions);
  enabled(btnNumbers);
  mathOutput.value = ''
}

export function removeNumber() {
  btnValue.value = btnValue.value.slice(0, btnValue.value.length - 1);
}