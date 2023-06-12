import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import InputText from './InputText';


const Modal1 = ({ visible, onClose }) => {
  return (
    <View style={styles.container}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Informe seu e-mail para recuperar a senha</Text>
          <InputText/>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: '#36457D',
        width: 150,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: '#f2f3f4',
        fontSize: 15,
        fontWeight: 'bold',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
      },
      modalButton: {
        backgroundColor: '#36457D',
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      modalButtonText: {
        color: '#f2f3f4',
        fontSize: 15,
        fontWeight: 'bold',
      },

  });
  

export default Modal1;