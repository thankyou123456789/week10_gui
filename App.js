import * as React from 'react'
import {View,Text,Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Homescreen=({navigation})=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Detail"
        onPress={()=>navigation.navigate('Detail')}
      />
    </View>
  )
}
const DetailScreen=()=>{
  return(
    <View>
      <Text>Detail Screen</Text>
    </View>
  )
}
const Stack = createStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>  
      <Stack.Navigator>
       <Stack.Screen name="Home" options={{title:"Overview"}}component ={Homescreen} />
       <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;