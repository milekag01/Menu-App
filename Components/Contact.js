import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderAddress() {

    return (
        <Card title="Contact Information" >
            <Text style={{margin: 5, textAlign: 'left', fontSize: 15}}>
{
`121 Clear Water Bay Road
Clear Water Bay, Kowloon
HONG KONG
Tel: +852 1234 5678
Fax: +852 8765 4321
Email:confusion@food.net`
}    
            </Text>
        </Card>
    );
}

class Contact extends React.Component {
    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return (
            <RenderAddress />
        );
    }
}

export default Contact;