import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import {
  Entypo
} from "@expo/vector-icons";


const SinglePdfView = (props) => {

  const navigation = useNavigation();
  let receivedUrl = { uri : props.route.params.receivedUrl };
  console.log(receivedUrl);

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.goBackButton} onPress={() => navigation.goBack()}><Entypo name="chevron-left" size={36} /></Text>
        </View>
        <WebView 
          source={receivedUrl ? receivedUrl : { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' }} 
          automaticallyAdjustContentInsets={false}
          style={styles.pdfViewer}
          // onFileDownload={({ nativeEvent: { downloadUrl } }) => {
          //   // You use downloadUrl which is a string to download files however you want.
          // }}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 50,
    backgroundColor: 'transparent'
  },
  goBackButton: {
    paddingHorizontal: 10
  },
  pdfViewer: {
    marginTop: 10
  },
});

export default SinglePdfView;