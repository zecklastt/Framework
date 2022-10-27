import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Formulario from "./Form";
import HomeScreen from "./Home";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 14,
                    lineHeight: 12,
                    marginTop: -22,
                    paddingTop: 21,
                    backgroundColor: "#000000"
                },
                // tabBarHideOnKeyboard: true 
            }}>
            <Tab.Screen name="Formulario" component={Formulario} />
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}

