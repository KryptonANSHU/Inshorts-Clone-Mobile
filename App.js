// import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Context, { NewsContext } from './API/Context';
import InshortTab from './components/InshortTab';



function App() {
  const {darkTheme} = useContext(NewsContext)
  return (
    <View style={{...styles.container , backgroundColor:'#1E1D1C'}}>
      <InshortTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop : StatusBar.currentHeight,
  },
});

export default ()=>{
  return(
    <Context>
    <App />
  </Context>
)
}