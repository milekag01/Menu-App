import React from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Home from './Home';
import Contact from './Contact';
import About from './About';
// import { DISHES } from '../shared/dishes';
import {View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'; 


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

const ContactNavigator = createStackNavigator({
    Home: {screen: Contact},
},
{
    navigationOptions: ({navigation}) =>  ({
        headerStyle: {
            backgroundColor: '#512dab'
        },
        headerTitleStyle: {
            color: '#fff'
        },
        headerTintColor: '#fff'
    })
}
);

const AboutNavigator = createStackNavigator({
    Home: {screen: About},
},
{
    navigationOptions: ({navigation}) =>  ({
        headerStyle: {
            backgroundColor: '#512dab'
        },
        headerTitleStyle: {
            color: '#fff'
        },
        headerTintColor: '#fff'
    })
}
);

const HomeNavigator = createStackNavigator({
        Home: {screen: Home},
    },
    {
        navigationOptions: ({navigation}) =>  ({
            headerStyle: {
                backgroundColor: '#512dab'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff'
        })
    }
);



const MainNavigator = createDrawerNavigator({
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerLabel: 'Home'
            }
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
            title: 'Menu',
                drawerLbel: 'Menu'
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                title: 'Contact Us',
                drawerLabel: 'Contact Us'
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                title: 'About Us',
                drawerLabel: 'About Us'
            }
        }
    },
    {
        drawerBackgroundColor: '#d1c4e9'
    }
);

class Main extends React.Component {

    render() {
        return (
            <View style={{flex:1, paddingTop: Platform.OS=== 'ios'? 0 : Expo.Constants.statusBarHeight}}>
                <MainNavigator />
            </View>
        );
    }
} 

export default Main;