import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { RNNumberSelector } from 'react-native-number-selector';


const items = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58];
const jsonData = require('../assets/json/PurityC.json');
const PurityCScreen = props => {
    const [chd, setChd] = useState(4);
    const [bypass, setBypass] = useState(70);
    const [c300, setC300] = useState(7917);
    const [c500, setC500] = useState(13458);
    const [c1100, setC1100] = useState(22760);

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Total Hardness °dH</Text>
            <RNNumberSelector style={styles.selector} items={items} selectedItem={6} spacing={50} highlightedFontSize={65} fontSize={60} textColor={'#020202'} highlightedTextColor={'#006992'}
                onChange={(number) => {
                    setChd(jsonData[number - 6]["Chd"]);
                    setBypass(jsonData[number - 6]["Bypass"]);
                    setC300(jsonData[number - 6]["C300"]);
                    setC500(jsonData[number - 6]["C500"]);
                    setC1100(jsonData[number - 6]["C1100"]);
                }} />
            <View style={styles.screen}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.text}>Chd:</Text>
                        <Text style={styles.text}>Bypass:</Text>
                        <Text style={styles.text}>C300:</Text>
                        <Text style={styles.text}>C500:</Text>
                        <Text style={styles.text}>C1100:</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.value}>{chd}</Text>
                        <Text style={styles.value}>{bypass}</Text>
                        <Text style={styles.value}>{c300}</Text>
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
        color: "#006992",
        paddingTop: 30,
        fontSize: 30
    },
    selector: {
        top: 40,
        left: 0,
        width: '620%',
        height: 50
    },
    text: {
        color: "#020202",
        fontSize: 25,
    },
    value: {
        paddingLeft: 30,
        fontSize: 25,
        color: '#006992'
    }
});

export default PurityCScreen;
