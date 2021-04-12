import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';

const CalculadoraScreen = () => {
    return (
        <View style={styles.containerCalculator} >
            <Text style={styles.resultadoLitle} >1,500.00</Text>
            <Text style={styles.resultado} >1,500.00</Text>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="C" color="#9B9B9B" />
                <ButtonCalc text="+/-" color="#9B9B9B" />
                <ButtonCalc text="del" color="#9B9B9B" />
                <ButtonCalc text="/" color="#00cc99" />
            </View>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="7" />
                <ButtonCalc text="8" />
                <ButtonCalc text="9" />
                <ButtonCalc text="X" color="#00cc99" />
            </View>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="4" />
                <ButtonCalc text="5" />
                <ButtonCalc text="6" />
                <ButtonCalc text="-" color="#00cc99" />
            </View>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="1" />
                <ButtonCalc text="2" />
                <ButtonCalc text="3" />
                <ButtonCalc text="+" color="#00cc99" />
            </View>
            {/* Fila de botones */}
            <View style={styles.row} >
                <ButtonCalc text="0" ancho />
                <ButtonCalc text="." />
                <ButtonCalc text="=" color="#00cc99" />
            </View>
        </View>

    )
}

export default CalculadoraScreen;