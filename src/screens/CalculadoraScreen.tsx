import React  from 'react'
import { Text, View } from 'react-native';

import { styles } from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

const CalculadoraScreen = () => {

    const {lastNum,
        num,
        clear,
        positiveNegative,
        btnDel,
        btnDiv,
        buildNum,
        btnMul,
        btnRes,
        btnSum,
        calcular} = useCalculator();
    
    return (
        <View style={styles.containerCalculator} >
            {
                (lastNum !== '0') && (<Text style={styles.resultadoLitle} >{lastNum}</Text>)
            }
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {num}
            </Text>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="C" color="#9B9B9B" action={clear} />
                <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative}/>
                <ButtonCalc text="del" color="#9B9B9B" action={btnDel}/>
                <ButtonCalc text="/" color="#00cc99" action={btnDiv}/>
            </View>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="7" action={buildNum}/>
                <ButtonCalc text="8" action={buildNum}/>
                <ButtonCalc text="9" action={buildNum}/>
                <ButtonCalc text="X" color="#00cc99" action={btnMul}/>
            </View>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="4" action={buildNum}/>
                <ButtonCalc text="5" action={buildNum}/>
                <ButtonCalc text="6" action={buildNum}/>
                <ButtonCalc text="-" color="#00cc99" action={btnRes}/>
            </View>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="1" action={buildNum}/>
                <ButtonCalc text="2" action={buildNum}/>
                <ButtonCalc text="3" action={buildNum}/>
                <ButtonCalc text="+" color="#00cc99" action={btnSum}/>
            </View>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="0" ancho action={buildNum}/>
                <ButtonCalc text="." action={buildNum} />
                <ButtonCalc text="=" color="#00cc99" action={calcular}/>
            </View>
        </View>

    )
}

export default CalculadoraScreen;