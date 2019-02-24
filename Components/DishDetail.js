import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const DishDetail = (props) => {
    
    const dish = props.dish;
    if(dish!=null){
        return (
            <Card 
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}
            >
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    } else {
        return (<View></View>);
    }
}

export default DishDetail;