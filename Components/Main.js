import React from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Reservation from './Reservation';

// import { DISHES } from '../shared/dishes';

import {View, Platform,Text,ScrollView,Image,StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems,SafeAreaView } from 'react-navigation'; 
import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => ({
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments()),
        fetchLeaders: () => dispatch(fetchLeaders()),
        fetchPromos: () => dispatch(fetchPromos())
});

//Creating Stack Navigator

const MenuNavigator = createStackNavigator({
        Menu: {screen: Menu,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon name="menu" size={24}
                                color='white'
                                onPress = {() => navigation.toggleDrawer() }
                            />
            })
        },
        
        DishDetail: {screen: DishDetail}
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: ({navigation}) =>({
            headerStyle: {
                backgroundColor: '#512dab'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name="menu" size={24}
                            color='white'
                            onPress = {() => navigation.toggleDrawer() }
                        />
        })
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
        headerTintColor: '#fff',
        headerLeft: <Icon name="menu" size={24}
                        color='white'
                        onPress = {() => navigation.toggleDrawer() }
                    />
    })
}
);

const ReservationNavigator = createStackNavigator({
    Home: {screen: Reservation},
},
{
    navigationOptions: ({navigation}) =>  ({
        headerStyle: {
            backgroundColor: '#512dab'
        },
        headerTitleStyle: {
            color: '#fff'
        },
        headerTintColor: '#fff',
        headerLeft: <Icon name="menu" size={24}
                        color='white'
                        onPress = {() => navigation.toggleDrawer() }
                    />
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
        headerTintColor: '#fff',
        headerLeft: <Icon name="menu" size={24}
                        color='white'
                        onPress = {() => navigation.toggleDrawer() }
                    />
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
            headerTintColor: '#fff',
            headerLeft: <Icon name="menu" size={24}
                            color='white'
                            onPress = {() => navigation.toggleDrawer() }
                        />
        })
    }
);

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{flex:1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.HeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>

            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerLabel: 'Home',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon 
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
            title: 'Menu',
                drawerLbel: 'Menu',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon 
                        name='list'
                        type='font-awesome'
                        size={22}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                title: 'Contact Us',
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon 
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Reservation: {
            screen: ReservationNavigator,
            navigationOptions: {
                title: 'Reserve Table',
                drawerLabel: 'Reserve Table',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon 
                        name='cutlery'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                title: 'About Us',
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon 
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#d1c4e9',
        contentComponent: CustomDrawerContentComponent
    }
);

class Main extends React.Component {

    componentDidMount() {
        this.props.fetchComments();
        this.props.fetchDishes();
        this.props.fetchLeaders();
        this.props.fetchPromos();
    }

    render() {
        return (
            <View style={{flex:1, paddingTop: Platform.OS=== 'ios'? 0 : Expo.Constants.statusBarHeight}}>
                <MainNavigator />
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);