// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Context from './API/Context';
import InshortTab from './components/InshortTab';

function App() {
  return (
    <View style={{...styles.container , backgroundColor:'#282C35'}}>
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