import React, { useRef } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';

import Page from './components/Page';
import Footer from './components/Footer';


const InstructionPage = () => {
  const navigation = useNavigation();

  const pagerRef = useRef(null);

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <PagerView style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#ffc93c"
            title="Welcome to the weather app"
            imageSource={require('../../assets/Exams-1-remove-bg.gif')}
          />
          <Footer
            backgroundColor="#222222"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#222222"
            title="Welcome to the weather app"
          />
          <Footer
            backgroundColor="#222222"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(2);
            }}
          />
        </View>
        <View key="3">
          <Page
            backgroundColor="#07689f"
            title="Get updates on weather"
          />
          <Footer
            backgroundColor="#07689f"
            rightButtonLabel="Get Started"
            rightButtonPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </PagerView>
    </View>
  );
};

export default InstructionPage;