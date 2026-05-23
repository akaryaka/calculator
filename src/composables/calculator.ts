import { mathState, history } from "../constants";

export class BtnClick {
  refValue(target: EventTarget | null): void {
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
  btnEqual = () => {
    const btnNumbers: any = document.querySelectorAll('.btn_number');

    mathState.mathValue2.value = mathState.btnValue.value;
    if (mathState.mathValue2.value.trim() != '') {
      mathState.mathEqual.value = Number(mathState.mathValue1.value) * Number(mathState.mathValue2.value);
      mathState.btnValue.value = calculate(Number(mathState.mathValue1.value), Number(mathState.mathValue2.value), mathState.mathAction.value);
      mathState.mathOutput.value += `${mathState.mathValue2.value}=${calculate(Number(mathState.mathValue1.value), Number(mathState.mathValue2.value), mathState.mathAction.value)}`;
      this.disabled(btnNumbers);
      history.value.push(mathState.mathOutput.value);
    } else {
      alert('Пусто!');
    }
    
    mathState.btnValue.value = '';
  }
  removeNumber(): void {
    mathState.btnValue.value = mathState.btnValue.value.slice(0, mathState.btnValue.value.length - 1);
  }
  clickZero = () => {
    const btnActions: any = document.querySelectorAll('.math-action');
    const btnNumbers: any = document.querySelectorAll('.btn_number');

    mathState.btnValue.value = '';
    mathState.mathValue1.value = '';
    mathState.mathValue2.value = '';
    this.enabled(btnActions);
    this.enabled(btnNumbers);
    mathState.mathOutput.value = ''
  }
  clickMath = (target: EventTarget | null): void => {
    // переделать? нашел решение в qwen
    // проверка на наличие события и пустоту value
    if (target && 'value' in target) {
      const val = (target as HTMLInputElement).value
      const btnActions: any = document.querySelectorAll('.math-action');

      const btnActionsFilter = Array.from<HTMLElement>(btnActions).filter(el => el.id !== 'btn_percent');
      // const btnActionsFilter: any = Array.from(btnActions).filter(el => el.id !== 'btn_percent') / qwen:)
      if (val != '%' && mathState.btnValue.value != '') {
        mathState.mathAction.value = val;
        mathState.mathValue1.value = mathState.btnValue.value;
        mathState.btnValue.value = '';
        mathState.mathOutput.value += `${mathState.mathValue1.value}${mathState.mathAction.value}`;
        
      // this.disabled(btnActionsFilter) / qwen:)
      this.disabled(btnActionsFilter as unknown as NodeListOf<HTMLElement>);
      // this.disabled(btnActionsFilter);
      } else {
        if (mathState.mathAction.value == '*' && mathState.btnValue.value != '') {
          mathState.btnValue.value = String(Number(mathState.mathValue1.value) * Number(mathState.btnValue.value) / 100)
        } else if (mathState.mathAction.value == '+' && mathState.btnValue.value != '') {
          mathState.btnValue.value = String(Number(mathState.mathValue1.value) + Number(mathState.mathValue1.value)*Number(mathState.btnValue.value) / 100)
        } else if (mathState.mathAction.value == '-' && mathState.btnValue.value != '') {
          mathState.btnValue.value = String(Number(mathState.mathValue1.value) - Number(mathState.mathValue1.value)*Number(mathState.btnValue.value) / 100)
        } else if (mathState.mathAction.value == '/' && mathState.btnValue.value != '') {
          mathState.btnValue.value = String(Number(mathState.mathValue1.value) / Number(mathState.btnValue.value) / 100)
        }        
      }
    }
  }
  enabled(items: NodeListOf<HTMLElement>): void {
    items.forEach(function (item: HTMLElement) {
      item.classList.remove('btn-disabled');
      item.removeAttribute('disabled');
    });
  }
  disabled(items: NodeListOf<HTMLElement>): void {
    const itemsArr: HTMLElement[] = Array.from(items)

    itemsArr.forEach(function(item: HTMLElement) {
      item.classList.add('btn-disabled');
      item.setAttribute('disabled', 'true');
    });
  }
}

function calculate(a: any, b: any, operator: any) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Деление на ноль';
    default: return 'Ошибка';
  }
}

export const click = new BtnClick();