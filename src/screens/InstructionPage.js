import React, { useRef } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';

import Page from '../../components/Page';
import Footer from '../../components/Footer';


const InstructionPage = () => {
  const navigation = useNavigation();

  const backgroundImage = require('../../assets/bg.png');

  const pagerRef = useRef(null);

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.background}>
      <PagerView style={{ flex: 1 }} 
        initialPage={0} 
        ref={pagerRef}
        // showPageIndicator
        // pageIndicatorProps={{ activeDotColor: '#222222', inactiveDotColor: 'gray' }} // currently not working but dev team are working on it
        >
        <View key="1">
          
          <Page
            title="How KUShare works?"
            detail="    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eros fames ullamcorper odio integer. Eu venenatis aliquam sit urna tristique accumsan porta."
            imageSource={require('../../assets/InstructionsIcons/Learning-remove-bg.gif')}
          />
          <Footer
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            title="Share your Lectures"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eros fames ullamcorper odio integer. Eu venenatis aliquam sit urna tristique accumsan porta."
            imageSource={require('../../assets/InstructionsIcons/Kids-Studying-from-Home-1.png')}
          />
          <Footer
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(2);
            }}
          />
        </View>
        <View key="3">
          <Page
            title="Save your favorite lectures"
            detail="    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eros fames ullamcorper odio integer. Eu venenatis aliquam sit urna tristique accumsan porta."
            imageSource={require('../../assets/InstructionsIcons/Add-files-1.png')}
          />
          <Footer
            rightButtonLabel="Get Started"
            rightButtonPress={() => {
              navigation.navigate('DrawerMenu');
            }}
          />
        </View>
      </PagerView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default InstructionPage;