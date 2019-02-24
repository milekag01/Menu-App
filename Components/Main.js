import React from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail';
// import { DISHES } from '../shared/dishes';
import {View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 


//Creating Stack Navigator

const MenuNavigator = createStackNavigator({
        Menu: {screen: Menu},
        DishDetail: {screen: DishDetail}
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512dab'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);


class Main extends React.Component {

    render() {
        return (
            <View style={{flex:1, paddingTop: Platform.OS=== 'ios'? 0 : Expo.Constants.statusBarHeight}}>
                <MenuNavigator />
            </View>
        );
    }
} 

export default Main;