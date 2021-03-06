import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = (dispatch) => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId))
})
 
function RenderDish(props) {

    const dish = props.dish;
    
    if (dish != null) {
        return(
            <Card
            featuredTitle={dish.name}
            image={{uri: dish.image}}>
                <Text style={{margin: 5}}>
                    {dish.description}
                </Text>
                
                <Icon 
                    raised
                    reverse
                    name={ props.favorite ? 'heart' : 'heart-o' }
                    type='font-awesome'
                    color='#f50'
                    onPress = {() => props.favorite ? console.log('Already Favorite') : props.onPress()}
                />

            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}

function RenderComments(props) {
    const comments = props.comments;

    // const RenderCommentItem = ({item,index}) => {
    //     return (
    //         <View key={index} style={{margin: 10}}>
    //             <Text style={{fontSize: 14}}>{item.comment}</Text>
    //             <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
    //             <Text style={{fontSize: 12}}>{'--' + item.author + ' , ' + item.date}</Text>
    //         </View>
    //     );
    // }

    const RenderCommentItem = ({item,index}) => {
        return (
            <ListItem 
                key={index} 
                title={item.author + ` - ` + item.rating + ' Stars'}
                subtitle={item.comment} 
                hideChevrom={true} 
                leftAvatar = {{source: require('./images/alberto.jpg')}}
            />
        );
    }

    return (
        <Card title='Comments'>
            <FlatList 
                data = {comments}
                renderItem={RenderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class Dishdetail extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         favorites: []
    //     };
    // }

    markFavorite(dishId) {
        // this.setState({favorites: this.state.favorites.concat(dishId)});
        this.props.postFavorite(dishId);
    }

    static navigationOptions = {
        title: 'Dish Detail'
    };

    render() {
        //comes from onPress in Menu Component
        const dishId = this.props.navigation.getParam('dishId', '');
        
        return (
            //+dishId converts a string to integer 
            <ScrollView>
                <RenderDish 
                    dish={this.props.dishes.dishes[+dishId]} 
                    favorite={this.props.favorites.some(el => el ===dishId)}
                    onPress= {() =>this.markFavorite(dishId)}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId ===dishId)} />
            </ScrollView>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);