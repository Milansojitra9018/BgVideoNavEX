import React, { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

const App1 = () => {
    const [modalVisble, setModalVisible] = useState(false);
    return (
        <View style ={styles.centeredView}>
            <Modal animationType="slide"
            visible={modalVisble} 
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisble);
            }}>
                <View style={styles.centeredView}>
                    <View style ={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisble)}>
                            <Text style={styles.textStyle}>Hide Model</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Model</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
     margin: 20,
     backgroundColor: 'white',
     borderRadius: 20,
     padding: 35,
     alignItems: 'center',
     shadowColor: '#000',
     shadowOffset: {
        width: 0,
        height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 4,
     elevation: 5,
    },
    button: {
        borderRadius: 6,
        pading: 10,
        elevation: 10,
        width: '30%',
    },
    buttonOpen: {
        backgroundColor: "#f194ff",
    },
    buttonClose: {
        backgroundColor: '#2196f3'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
})

export default  App1;