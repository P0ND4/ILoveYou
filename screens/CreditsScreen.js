import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Layout from '../components/Layout';

const PlayScreen = () => {
    return (
        <Layout>
            <View style={styles.creditsContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 24, color: "#00ADB5" }}>TE AMO</Text>
                    <Text style={{ fontSize: 16, color: "#EEEEEE", textAlign: 'justify', marginVertical: 20 }}>
                        Esta aplicacion esta hecha para la mejor persona que he conocido,
                        una persona increible en todos los sentidos, esa persona se llama
                        Britney, la unica persona capaz de enamorarme solo con ver sus
                        hermosos ojos, decidi crear una aplicacion exclusivamente para ti,
                        donde escribi mas de 300 oraciones de las cuales siento y te expreso
                        aleatoriamente, tambien añadi varias secciones para que te puedas
                        distraer cuando te sientas aburrida o no tengas nada que hacer, esta
                        aplicacion a sido creada como regalo de nuestro primer año juntos,
                        eres mi inspiracion para trabajar y construir un futuro hermoso contigo,
                        !TE AMO MUCHO MI BEBE!
                    </Text>
                    <View>
                        <Text style={{ fontSize: 20, color: "#00ADB5" }}>Aplicacion Creada El 31-12-21</Text>
                        <Text style={{ fontSize: 20, color: "#00ADB5" }}>Autor: Melvin Colmenares</Text>
                        <Text style={{ fontSize: 20, color: "#00ADB5" }}>Version: 2.0.1</Text>
                    </View>
                </ScrollView>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    creditsContainer: {
        padding: 20,
        width: '100%',
        height: '100%'
    }
});

export default PlayScreen;