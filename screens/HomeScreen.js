import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import getSentence from '../helpers/sentences';

import Layout from '../components/Layout';
import Button from '../components/Button';

const HomeScreen = () => {
    const [sentence, setSentence] = useState('');
    const isFocused = useIsFocused();

    useEffect(() => { setSentence('') },[isFocused]);
    
    const selectSentence = () => {
        const sentenceObtained = getSentence();
        setSentence(sentenceObtained);
    };

    return (
        <Layout>
            <Text style={styles.sentence}>{sentence}</Text>
            <Button event={selectSentence}/>
        </Layout>
    );
};

const styles = StyleSheet.create({
    sentence: {
        paddingHorizontal: 20,
        position: 'absolute', 
        top: 50, 
        fontSize: 20,
        color: '#00ADB5',
        textAlign: 'center'
    }
});

export default HomeScreen;