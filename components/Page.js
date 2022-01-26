import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const Page = ({ title, detail, imageSource }) => {
    let [fontsLoaded] = useFonts({
        'SourceSansPro-Bold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
        'Prompt': require('../assets/fonts/Prompt.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
            <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
            <Image source={imageSource} style={{width: 375, height: 375, overlayColor: '#fff' }} />
            <View style={{ marginTop: 16, paddingHorizontal: 30 }}>
                <Text style={{ fontFamily: 'SourceSansPro-Bold', fontSize: 28, fontWeight: '900', textAlign: 'center', color: '#04DB8B' }}>
                {title}
                </Text>
                <Text style={{ fontFamily: 'Prompt', fontSize: 18, fontWeight: 'normal', color: '#000000', marginTop: 20 }}>
                    {detail}
                </Text>
            </View>
            </View>
        );
      }
};

export default Page;