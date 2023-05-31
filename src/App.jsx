import React, { useState } from 'react';
import './App.css';
import { isNumber, isOperator } from './components/isType';
import { reset } from './components/resetFunction';
import { negative } from './components/negateResult';
import {
  sum, dif, div, mult, mod,
} from './components/operations';
import { deleteLast } from './components/delFunction';

function App() {
  const [Ans, setAns] = useState(0);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operator, setOperator] = useState('');
  const [building, setBuilding] = useState('');
  const [canChange, setCanChange] = useState(true);

  function addAns() {
    const input = document.getElementById('inputspan');
    if (operator === '') {
      setNumber1(Ans);
      setAns('');
    } else {
      setNumber2(Ans);
      setAns('');
    }
    if (input.childNodes.length <= 9) {
      const anode = document.createTextNode('Ans');
      input.appendChild(anode);
    }
  }

  function addChar(char) {
    const input = document.getElementById('inputspan');
    if (input != null) {
      if (input.childNodes.length <= 9) {
        if (isNumber(char)) {
          if (operator === '') {
            if (building === '') setNumber1(number1 + char);
            else setBuilding(building + char);
          } else if (building === '') setNumber2(number2 + char);
          else setBuilding(building + char);
        } else if (char === '.') {
          let temp = '';
          if (operator === '' && building === '') {
            temp = number1;
          } else {
            temp = number2;
          }
          temp += building + char;
          setBuilding(temp);
          const val = document.createTextNode(char);
          input.appendChild(val);
        } else {
          if (building !== '') {
            setNumber1(building);
            setBuilding('');
          }
          if (canChange) {
            setOperator(char);
            setCanChange(false);
          }
        }
        if (Ans !== 0 && isOperator(char) && number1 === '') {
          input.textContent = '';
          const newans = document.createTextNode(Ans);
          input.appendChild(newans);
        }
        if (((!isNumber(char) && canChange) || (isNumber(char))) && char !== '.') {
          const val = document.createTextNode(char);
          input.appendChild(val);
        }
      }
    }
  }

  function calculate() {
    const num1 = parseFloat(number1);
    setNumber1('');
    let num2 = 0;
    if (building !== '') {
      num2 = parseFloat(building);
      setNumber2('');
      setBuilding('');
    } else {
      num2 = parseFloat(number2);
      setNumber2('');
    }

    let res = 0;
    switch (operator) {
      case '+':
        if (!Number.isNaN(num1)) {
          res = sum(num1, num2);
        } else {
          res = sum(parseFloat(Ans), num2);
        }
        break;

      case '-':
        if (!Number.isNaN(num1)) {
          res = dif(num1, num2);
        } else {
          res = dif(parseFloat(Ans), num2);
        }
        break;

      case 'x':
        if (!Number.isNaN(num1)) {
          res = mult(num1, num2);
        } else {
          res = mult(parseFloat(Ans), num2);
        }
        break;

      case '/':
        if (!Number.isNaN(num1)) {
          res = div(num1, num2);
        } else {
          res = div(parseFloat(Ans), num2);
        }
        break;

      case '%':
        if (!Number.isNaN(num1)) {
          res = mod(num1, num2);
          console.log(res);
        } else {
          res = mod(parseFloat(Ans), num2);
        }
        break;
      default:
        break;
    }
    setOperator('');
    setCanChange(true);
    setAns(res);
    const output = document.getElementById('outputspan');
    output.textContent = res;
  }

  document.onkeydown = (event) => {
    switch (event.key) {
      case '1':
        addChar(1);
        break;
      case '2':
        addChar(2);
        break;
      case '3':
        addChar(3);
        break;
      case '4':
        addChar(4);
        break;
      case '5':
        addChar(5);
        break;
      case '6':
        addChar(6);
        break;
      case '7':
        addChar(7);
        break;
      case '8':
        addChar(8);
        break;
      case '9':
        addChar(9);
        break;
      case '0':
        addChar(0);
        break;
      case '+':
        addChar('+');
        break;
      case '-':
        addChar('-');
        break;
      case '/':
        addChar('/');
        break;
      case '*':
        addChar('x');
        break;
      case '.':
        addChar('.');
        break;
      case 'Enter':
        calculate();
        break;
      default:
        break;
    }
  };

  return (
    <div className="calcu">
      <div className="pantalla1">
        <span id="inputspan" />
      </div>
      <div className="pantalla2">
        <span id="outputspan">0</span>
      </div>
      <div className="botones">
        <div className="fila1">
          <button className="b7" onClick={() => addChar('7')} type="button">
            7
          </button>
          <input className="b8" type="button" value={8} onClick={() => addChar('8')} />
          <input className="b9" type="button" value={9} onClick={() => addChar('9')} />
          <input
            className="del"
            type="button"
            value="DEL"
            onClick={() => {
              deleteLast();
              let newnum = '';
              if (operator === '') {
                for (let i = 0; i < number1.length - 1; i += 1) {
                  newnum += number1.charAt(i);
                }
                setNumber1(newnum);
              } else {
                for (let i = 0; i < number2.length - 1; i += 1) {
                  newnum += number2.charAt(i);
                }
                setNumber2(newnum);
              }
            }}
          />
          <input
            className="ac"
            type="button"
            value="AC"
            onClick={() => {
              setNumber1('');
              setNumber2('');
              setOperator('');
              setBuilding('');
              setCanChange(true);
              reset();
            }}
          />
        </div>
        <div className="fila2">
          <input className="b4" type="button" value={4} onClick={() => addChar('4')} />
          <input className="b5" type="button" value={5} onClick={() => addChar('5')} />
          <input className="b6" type="button" value={6} onClick={() => addChar('6')} />
          <input className="X" type="button" value="X" onClick={() => addChar('x')} />
          <input className="➗" type="button" value="➗" onClick={() => addChar('/')} />
        </div>
        <div className="fila3">
          <input className="b1" type="button" value={1} onClick={() => addChar('1')} />
          <input className="b2" type="button" value={2} onClick={() => addChar('2')} />
          <input className="b3" type="button" value={3} onClick={() => addChar('3')} />
          <input className="mas" type="button" value="+" onClick={() => addChar('+')} />
          <input className="--" type="button" value="-" onClick={() => addChar('-')} />
        </div>
        <div className="fila4">
          <input className="b0" type="button" value={0} onClick={() => addChar('0')} />
          <input className="dot" type="button" value="." onClick={() => addChar('.')} />
          <input
            className="mm"
            type="button"
            value="+/-"
            onClick={() => {
              negative(Ans);
              setAns(Ans * -1);
            }}
          />
          <input className="ans" type="button" value="Ans" onClick={addAns} />
          <input className="mod" type="button" value="%" onClick={() => addChar('%')} />
        </div>
        <div className="fila5">
          <input className="eq" type="button" value="=" onClick={calculate} />
        </div>
      </div>
    </div>
  );
}

export default App;
