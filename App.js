import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native';
export default function App() {
  return (
    <ScrollView style = {styles.container}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Image style={{width: 200, height: 200}} source={require('./assets/foto2.jpg')}></Image>
      <Text >Jokowi</Text>
      <Text >1234567890</Text>
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Image style={{width: 200, height: 200}} source={require('./assets/foto3.jpg')}></Image>
      <Text >Ardi</Text>
      <Text >2345678901</Text>
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Image style={{width: 200, height: 200}} source={require('./assets/foto4.jpg')}></Image>
     <Text >Lumba-lumba Sunda</Text>
      <Text >3456789012</Text>
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Image style={{width: 200, height: 200}} source={require('./assets/foto1.jpg')}></Image>
     <Text >Roger Sumatera</Text>
      <Text >4567890123</Text>
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Image style={{width: 200, height: 200}} source={require('./assets/foto5.jpg')}></Image>
     <Text >Ilham Perkakas</Text>
      <Text >5678901234</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
