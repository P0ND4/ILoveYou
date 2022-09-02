import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const Button = ({ event }) => {
    return (
        <TouchableOpacity style={styles.mainButton} onPress={() => event()}>
            <Image style={{ marginTop: 15 }} source={require('../heart.png')} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainButton: {
        height: 140,
        width: 140,
        borderRadius: 70,
        backgroundColor: "#EEEEEE",
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 20,
        elevation: 25
    }
});

export default Button;