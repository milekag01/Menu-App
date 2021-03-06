import React from 'react';
import { View, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
// import { DISHES } from '../shared/dishes';

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes
    }
}

class Menu extends React.Component  {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dishes: DISHES
    //     };
    // }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {

        //from createStackNavigator
        const { navigate } = this.props.navigation;

        const renderMenuItem = ({item, index}) => {
            return (
                <Tile
                    key = {index}
                    title = {item.name}
                    caption = {item.description}
                    featured
                    onPress = {() => navigate('DishDetail', { dishId: item.id })}
                    imageSrc = {{ uri: item.image}}
                />
            );
        }

        if(this.props.dishes.isLoading) {
            return (
                <Loading />
            )
        }

        else if(this.props.dishes.errMess) {
            return (
                <View>
                    <Text style={{"flex":1,"alignItem": "center","justifyContent": 'center'}}>{props.dishes.errMess}</Text>
                </View>
            )
        }
        else {
            return (
                <FlatList 
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }
    }
}

export default connect(mapStateToProps)(Menu);