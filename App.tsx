import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Homescreen";
import DetailsScreen from "./Dashboard";



const stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
          <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <stack.Screen name="Details" component={DetailsScreen} />
          </stack.Navigator>
        </NavigationContainer>
  )
}


export default App;
