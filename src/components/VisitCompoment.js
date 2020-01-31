import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, 
    Image,
    TouchableOpacity, FlatList,
    SafeAreaView, Button,View} from 'react-native';

import styles from '../constratints/styles'

export default class VisitComponent extends Component{
    render(){
        return(<TouchableOpacity 
                onPress = {this.props.onPress}
        style={styles.card}>
                <Text style={styles.muniStyle}> {this.props.muni}</Text>
                <Text style={styles.groupStyle}> {this.props.group}</Text>
            </TouchableOpacity>
            )
    }
}