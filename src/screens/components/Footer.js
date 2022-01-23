import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import RoundedButton from './RoundedButton';

const Footer = ({
  rightButtonLabel = false,
  rightButtonPress = false
}) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        height: HEIGHT,
        backgroundColor: '#04DB8B',
        opacity: 0.6,
        alignItems: 'center',
        paddingHorizontal: FOOTER_PADDING,
        marginTop: 15,
        marginHorizontal: 25,
        marginBottom: 50,
        borderRadius: 10,
      }}
    >
      <RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />
    </View>
  );
};

export default Footer;