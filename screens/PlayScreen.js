import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Button from '../components/Button';
import Layout from '../components/Layout';

const PlayScreen = () => {
    const [timerInitiated,setTimerInitiated] = useState(false);
    const [bestScore, setBestScore] = useState(0);
    const [pulsation, setPulsation] = useState(0);
    const [countdown, setCountdown] = useState('01:00');
    const [atTheEnd, setAtTheEnd] = useState(false);
    const [timeoutState,setTimeoutState] = useState(false); 

    let startTimer;
    let second = 0, minute = 1;

    const validation = () => {
        setCountdown('01:00');
        setTimerInitiated(false);
        if (pulsation > bestScore) setBestScore(pulsation);
        setAtTheEnd(false);
        setPulsation(0);
        setTimeoutState(false);
    };

    const timer = () => {
        let secondTXT, minuteTXT;

        if (second < 0) second = 59;
        
        if (second <= 0 && minute !== 0) setTimeout(() => minute--, 500);
        else if (second === 0 && minute === 0) {
            second = 0, minute = 1;
            setAtTheEnd(true);
            setCountdown('00:00');
            setTimeout(() => setTimeoutState(true),2000)
            clearInterval(startTimer);
            return;
        };

        if (minute < 10) minuteTXT = "0" + minute
        else minuteTXT = minute;
        
        if (second < 10) secondTXT = "0" + second;
        else secondTXT = second;

        setCountdown(`${minuteTXT}:${secondTXT}`);
        second--;
    };

    const activePulse = () => {
        setPulsation(pulsation + 1);
        if (!timerInitiated) {
            timer();
            startTimer = setInterval(() => { timer() },1000);
            setTimerInitiated(true);
        }
    };

    return (
        <Layout>
            <View style={styles.score}>
                <Text style={styles.scoreText}>Mejor Puntuacion: {bestScore}</Text>
                <Text style={styles.scoreText}>Tiempo: {countdown}</Text>
                <Text style={styles.scoreText}>Pulsos: {pulsation}</Text>
            </View>
            {(!atTheEnd)
                ?   <Button event={activePulse}/>
                :   <View style={styles.atTheEnd}>
                        <View style={styles.statisticsContainer}>
                            <Text style={{ fontSize: 20, color: '#222831', fontWeight: 'bold' }}><Image source={require('../confeti.png')}/> Estadisticas <Image source={require('../confeti.png')}/></Text>
                            <Text style={{ textAlign: 'center', marginVertical: 10, color: '#222831', fontSize: 15 }}>{(pulsation > bestScore) ? `Felicidades Rompiste Un Nuevo Record A ${pulsation} Pulsaciones` : `Felicidades Pulsaste ${pulsation} Veces`}</Text>
                            {(timeoutState) 
                                ?   <TouchableOpacity style={styles.acceptButton} onPress={() => validation()}>
                                        <Text style={{ color: '#EEEEEE', fontSize: 18, fontWeight: 'bold' }}>Aceptar</Text>
                                    </TouchableOpacity>
                                : <></>}
                        </View>
                    </View>}
        </Layout>
    );
};

const styles = StyleSheet.create({
    score: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        padding: 15
    },
    scoreText: {
        color: '#00ADB5',
        fontSize: 20
    },
    atTheEnd: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#111720aa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statisticsContainer: {
        padding: 16,
        backgroundColor: "#EEEEEE",
        width: 250,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    acceptButton: {
        width: '100%', 
        backgroundColor: '#00ADB5',
        padding: 4,
        borderRadius: 3,
        marginVertical: 4,
        display: 'flex',
        alignItems: 'center'
    }
});

export default PlayScreen;