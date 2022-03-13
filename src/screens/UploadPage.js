import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import {
    Ionicons,
    MaterialIcons,
    Entypo,
    MaterialCommunityIcons,
    FontAwesome,
    FontAwesome5
  } from "@expo/vector-icons";

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const UploadPage = () => {
    const [ doc, setDoc ] = useState();
    const [title, onChangeTitle] = useState("title");
    const [description, onChangeDescription] = useState("description");
    const [subject, onChangeSubject] = useState("subject");

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
            if (response.type == 'success') {          
              let { name, size, uri } = response;
              let nameParts = name.split('.');
              let fileType = nameParts[nameParts.length - 1];
              var fileToUpload = {
                name: name,
                size: size,
                uri: uri,
                type: "application/" + fileType
              };
              console.log(fileToUpload, '...............file')
              setDoc(fileToUpload);
            } 
          });
        // console.log(result);
        console.log("Doc: " + doc.uri);
    }

    const postDocument = () => {
        const url = "http://192.168.10.107:8000/upload";
        const fileUri = doc.uri;
        const formData = new FormData();
        formData.append('document', doc);
        const options = {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
        };
        console.log(formData);

        fetch(url, options).catch((error) => console.log(error));
    }

    return (        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            >
            <View style={styles.uploadContainer}>
                <Button 
                    title="Upload .PDF lecture" 
                    onPress={pickDocument} 
                    icon={
                        <FontAwesome5
                        name="cloud-upload-alt"
                        size={75}
                        color={Colors.primaryColor}
                        />
                    }
                    iconPosition='top'
                    buttonStyle={styles.uploadButton}
                    titleStyle={styles.uploadText}
                    />
                <Text style={styles.fileTitleText}>{doc ? 'File name: ' + doc.name : ''}</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.formContainer}>

                    <Text style={styles.label}>Lecture's Title</Text>
                    <TextInput name={title} style={styles.input} />
                    <Text style={styles.label}>Lecture's Description</Text>
                    <TextInput name={description} style={styles.input} />
                    <Text style={styles.label}>Lecture's Subject</Text>
                    <TextInput name={subject} style={styles.input} />

                    <Button 
                        title="Upload" 
                        onPress={postDocument}
                        buttonStyle={styles.submitButton}
                        titleStyle={styles.submitText}
                        />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.primaryColorOpacityDown,
        fontFamily: Fonts.primaryFont,
    },
    uploadContainer: {
        flex: 1,
        padding: 0,
    },
    uploadButton: {
        paddingTop: 80,
        paddingBottom: 120,
        // height: 220,
        backgroundColor: 'transparent',
    },
    uploadText: {
        fontWeight: '700',
        fontSize: 24,
        marginTop: 15,
        color: Colors.primaryColor
    },
    fileTitleText: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        textAlign: 'center',
        // top: '60%',
        // bottom: 100,
        marginTop: -55,
        color: Colors.primaryColor,
        fontWeight: '700'
    },
    formContainer: {
        backgroundColor: '#fff',
        paddingTop: 35,
        paddingHorizontal: 25,
        paddingBottom: 40,
        margin: 0,
        marginTop: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1,
        justifyContent: "space-around"
    },
    label: {
        fontWeight: '700',
        fontSize: 16
    },
    input: {
        height: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#00000059',
        marginVertical: 20
    },
    submitButton: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        marginTop: 20,
        padding: 15
    },  
    submitText: {
        fontSize: 28,
        textTransform: 'uppercase',
        fontWeight: '500'
    },
});  

export default UploadPage;