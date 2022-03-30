import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import * as lectureActions from '../../store/actions/lecture'

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

const UploadPage = (props) => {
    const dispatch = useDispatch();
    const offlineUserData = useSelector((state) => state.auth);
    const previouslyRegisteredLectures = useSelector(
    (state) => state.registration.prevLectures
  );

//   useEffect(() => {console.log(offlineUserData)}, [])

    // dont forget createdAt and updatedAt, id
    const [ doc, setDoc ] = useState();
    const [ thumbnail, setThumbnail ] = useState();

    const [title, onChangeTitle] = useState("");
    const [description, onChangeDescription] = useState("");
    const [subject, onChangeSubject] = useState("");
    const [author, setAuthor] = useState("author");
    const [section, setSection] = useState("section");
    const [slug, setSlug] = useState("");

    const [inputFormData, setInputFormData] = useState();


    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: "application/pdf", copyToCacheDirectory: true }).then(response => {
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

    }

    const pickThumbnail = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: "image/*", copyToCacheDirectory: true }).then(response => {
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
              console.log(fileToUpload, '...thumbnail')
              setThumbnail(fileToUpload);
            } 
          });
    }

    const postDocument = () => {
        const url = "https://ku-share-backend.herokuapp.com/lecture/upload";
        const fileUri = doc.uri;
        const formData = new FormData();

        let userInput = JSON.stringify({
            userId: offlineUserData.userId,
            title: title,
            author: author,
            description: description,
            subject: subject,
            section: section,
            slug: slug,
        })

        // console.log(userInput);

        formData.append('userInput', userInput);
        formData.append('thumbnail', thumbnail);
        formData.append('pdf', doc);

        const options = {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
        };
        // dispatch(lectureActions.addNewLecture(formData));
        // console.log(formData);

        fetch(url, options).catch((error) => console.log(error));
        console.log(previouslyRegisteredLectures)
    }

    const updateThumbnailButton = () => {
        if (thumbnail) {
            return <Button 
                    title={thumbnail.name} 
                    onPress={pickThumbnail} 
                    buttonStyle={styles.uploadThumbnailButton}
                    titleStyle={styles.uploadTThumbnailext}
                    />
        }
        return <Button 
                title="Upload Lecture Thumbnail" 
                onPress={pickThumbnail} 
                buttonStyle={styles.uploadThumbnailButton}
                titleStyle={styles.uploadTThumbnailext}
                />
    }

    const convertToSlug = (Text) => {
        return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
    }

    return (       
            // <KeyboardAvoidingView
            //     behavior={Platform.OS === "ios" ? "padding" : "height"}
            //     style={styles.container}
            //     >
            <KeyboardAwareScrollView style={styles.container}>
                <View style={styles.innerContainer}>
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

                            { updateThumbnailButton() }
                            <Text style={styles.label}>Lecture's Title</Text>
                            <TextInput value={title} onChangeText={onChangeTitle} style={styles.input} />
                            <Text style={styles.label}>Lecture's Slug</Text>
                            <TextInput defaultValue={convertToSlug(title)} onChangeText={setSlug} style={styles.input} />
                            <Text style={styles.label}>Lecture's Description</Text>
                            <TextInput value={description} onChangeText={onChangeDescription} style={styles.input} />
                            <Text style={styles.label}>Lecture's Subject</Text>
                            <TextInput value={subject} onChangeText={onChangeSubject} style={styles.input} />

                            <Button 
                                title="Upload" 
                                onPress={postDocument}
                                buttonStyle={styles.submitButton}
                                titleStyle={styles.submitText}
                                />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </KeyboardAwareScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        fontFamily: Fonts.primaryFont,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },  
    uploadContainer: {
        backgroundColor: Colors.primaryColorOpacityDown
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
    uploadThumbnailButton: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        marginBottom: 25,
        padding: 18
    },
    uploadTThumbnailext: {
        fontSize: 14
    },
    fileTitleText: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        top: '70%',
        // top: '60%',
        // bottom: 0,
        // marginTop: -65,
        color: Colors.primaryColor,
        fontWeight: '700'
    },
    formContainer: {
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 25,
        paddingBottom: 35,
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