import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculator = () => {

    const [num, setNum] = useState('0');
    const [lastNum, setLastNum] = useState('0');

    const lastOp = useRef<Operadores>();

    const clear = () => {
        setNum('0');
        setLastNum('0');
    }

    const buildNum = (textNum: string) => {
        //No aceptar doble punto
        if(num.includes('.') && textNum === '.' ) return;
        if(num.startsWith('0') || num.startsWith('-0')){
            //Punto decimal
            if(textNum === '.'){
                setNum(num + textNum);
            //Evaluar si es otro cero, y hay un punto
            }else if (textNum === '0' && num.includes('.') ){
                setNum(num + textNum);
            //Evaluar si es diferente de 0 y no tiene un punto
            }else if (textNum !== '0' && !num.includes('.')){
                setNum(textNum);
            //Evitar el 0000.0
            }else if (textNum === '0' && !num.includes('.')){
                setNum(num);
            }else {
                setNum(num + textNum);
            }
        }else {
            setNum(num + textNum);
        }
    }

    const positiveNegative = () => {
        if(num.includes('-')){
            setNum(num.replace('-', ''));
        }else {
            setNum('-' + num);
        }
    }

    const btnDel = () => {
        let negative = '';
        let numTemp = num;
        if(num.includes('-')){
            negative = '-';
            numTemp = num.substr(1);
        }
        if(numTemp.length > 1){
            setNum(negative + numTemp.slice(0,-1));
        }else {
            setNum('0');
        }
    }

    const changeNumXLast = () =>{
        if(num.endsWith('.')){
            setLastNum(num.slice(0,-1));
        }else{
            setLastNum(num);
        }
        setNum('0');
    }

    const btnDiv = () =>{
        changeNumXLast();
        lastOp.current = Operadores.dividir;
    }

    const btnMul = () =>{
        changeNumXLast();
        lastOp.current = Operadores.multiplicar;
    }
    
    const btnRes = () =>{
        changeNumXLast();
        lastOp.current = Operadores.restar;
    }

    const btnSum = () =>{
        changeNumXLast();
        lastOp.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(num);
        const num2 = Number(lastNum);

        switch (lastOp.current) {
            case Operadores.sumar:
                setNum(`${num1 + num2}`);        
                break;
            case Operadores.restar:
                setNum(`${num2 - num1}`);        
                break;
            case Operadores.multiplicar:
                setNum(`${num1 * num2}`);        
                break;
            case Operadores.dividir:
                setNum(`${num2 / num1}`);        
                break;
        }
        setLastNum('0');
    }

    return {
        lastNum,
        num,
        clear,
        positiveNegative,
        btnDel,
        btnDiv,
        buildNum,
        btnMul,
        btnRes,
        btnSum,
        calcular
    }

}
