import React from 'react';
import { View, Text, Image } from 'react-native';


const Page = ({ backgroundColor, title, imageSource }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor
      }}
    >
      <Image source={imageSource} style={{width: 375, height: 375, overlayColor: '#fff' }} />
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Page;