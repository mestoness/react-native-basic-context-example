import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {style} from './styles';
import {MainContext, useContext} from '../../core/context';

const Home = () => {
  const {darkTheme, setDarkTheme} = useContext(MainContext);
  return (
    <View style={[style.view, darkTheme ? style.bgDark : style.bgLight]}>
      <TouchableOpacity
        onPress={() => setDarkTheme(!darkTheme)}
        style={style.button}>
        <Text>Mode Change</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
