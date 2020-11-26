import React, {useContext} from  'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {UsuarioContext} from '../../contexts/user';

import SignIn from '../screens/SignIn';
import Groups from '../screens/Groups';
import Chat from '../screens/Chat';
import AddGroup from '../screens/AddGroup';
import forgetPassword from '../screens/forgetPassword';
import Settings from '../screens/Settings/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
    headerShown: false
  })

  function tabNavigation() {
    return (
        <Tab.Navigator
                initialRouteName='Grupos'
                tabBarOptions ={
                    {
                        activeTintColor: 'tomato',
                        inactiveTintColor: '#ccc'
                    }
                }
            >
                <Tab.Screen 
                name='Grupos'
                component={Groups}
                options={
                    {
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                        name='chat'
                        color= {color}
                        size={32}
                        />
                    ) 
                    }
                }
                />
                <Tab.Screen 
                name='Configurações'
                component={Settings}
                options={
                    {
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                        name='settings'
                        size={32}
                        color={color}
                        />
                    ) 
                    }
                }
                />
            </Tab.Navigator>
    );
}

const ChatFlow = () => {

    const {user} = useContext(UsuarioContext);

    return (
        <NavigationContainer>
            {user ?
                <Stack.Navigator initialRouteName="screenMenu">
                <Stack.Screen
                    name="screenGroups"
                    component={Groups} 
                    />
                <Stack.Screen 
                    name="screenChat"
                    component={Chat} 
                    options={{title: "Chat"}}/>
                <Stack.Screen
                    name="screenAddGroup"
                    component={AddGroup}
                    options={{title: "Criar Grupo"}} 
                   />
                <Stack.Screen
                    name="screenForget"
                    component={forgetPassword} 
                    options={navOptionHandler}/>
                <Stack.Screen
                    name="screenMenu"
                    component={tabNavigation} 
                    options={{title: "Lista de Grupos"}}/>
                <Stack.Screen 
                    name="screenSignIn"
                    component={SignIn}
                    options={navOptionHandler}/>
            </Stack.Navigator>
            
            : 

            <SignIn/>
        
        }
            
        </NavigationContainer>
    );
} 

const MainStackNavigator = () => {
    return (
        ChatFlow()
    )
}

export default MainStackNavigator;