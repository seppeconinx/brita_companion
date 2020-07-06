import React, { useState }  from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RNNumberPicker, RNNumberSelector } from 'react-native-number-selector';


const items = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
const jsonData = require('../assets/json/PurityCFinest.json');
const PurityCFinestScreen = props => {
    const [bypass, setBypass] = useState(0);
    const [c500, setC500] = useState(5690);
    const [c1100, setC1100] = useState(10000);

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Total Hardness °dH</Text>
            <RNNumberSelector style={styles.selector} items={items} selectedItem={4} spacing={50} highlightedFontSize={65} fontSize={60} textColor={'#020202'} highlightedTextColor={'#006992'} viewAnimation={0}
            onChange={(number) => {
                setBypass(jsonData[number - 4]["Bypass"]);
                setC500(jsonData[number - 4]["C500"]);
                setC1100(jsonData[number - 4]["C1100"]);
            }} />
            <View style={styles.screen}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.text}>Bypass:</Text>
                        <Text style={styles.text}>C500F:</Text>
                        <Text style={styles.text}>C1100F:</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>{bypass}</Text>
                        <Text style={styles.value}>{c500}</Text>
                        <Text style={styles.value}>{c1100}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: "column" ,
        alignItems: 'flex-end' 
    },
    title: {
        fontWeight: 'bold',
        color: '#006992',
        paddingTop: 30,
        fontSize: 30
    },
    selector: {
        top: 40,
        left: 0,
        width: '500%',
        height: 50
    },
    text: {
        color: '#020202',
        fontSize: 25,
    },
    value: {
        paddingLeft: 30,
        fontSize: 25,
        color: '#006992'
    }
});

export default PurityCFinestScreen;
