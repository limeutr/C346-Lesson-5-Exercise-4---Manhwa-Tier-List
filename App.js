import React from 'react';
import { Text, View, SectionList, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';

const styles = StyleSheet.create({
    opacityStyle: {
        padding: 10,
    },
    textContainer: {
        flex: 1,  // Ensures the container takes up available space
        justifyContent: 'center',  // Centers vertically
        alignItems: 'center',  // Centers horizontally
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#66aede',
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    img: {
        width: 160,
        height: 220,
        resizeMode: 'cover', // Better image fit
        borderRadius: 3, // Rounded corners
    },
});

const datasource = [
    {
        data: [
            { key: 'The S classes that I raised', img: require('./img/s1.jpg') },
            { key: 'Death is the only ending for the villainess', img: require('./img/s2.jpg') },
            { key: 'The greatest estate developer', img: require('./img/s3.jpg') },
        ],
        title: 'S tier',
        textcolor: '#ffd700', // Gold
        bgColor: '#fff8dc', // Light gold background
    },
    {
        data: [
            { key: 'Eleceed', img: require('./img/s4.jpg') },
            { key: 'Omniscient Reader\'s Viewpoint', img: require('./img/s5.jpg') },
            { key: 'Mercenery Enrolment', img: require('./img/s6.jpg') },
        ],
        title: 'A tier',
        textcolor: '#add8e6',
        bgColor: '#e0f7fa',
    },
    {
        data: [
            { key: 'Study Group', img: require('./img/s7.jpg') },
            { key: 'The evil ring', img: require('./img/s8.jpg') },
            { key: 'Weak Hero', img: require('./img/s9.jpg') },
        ],
        title: 'B tier',
        textcolor: '#90ee90',
        bgColor: '#f0fff0',
    },
    {
        data: [
            { key: 'Who made me a princess', img: require('./img/s10.jpg') },
            { key: 'Inso\'s law', img: require('./img/s11.jpg') },
            { key: 'Doctor Elise', img: require('./img/s12.jpg') },
        ],
        title: 'C tier',
        textcolor: '#ffa07a',
        bgColor: '#fff0f5',
    },
    {
        data: [
            { key: 'I\'m the Male Lead\'s Girl Friend', img: require('./img/s13.jpg') },
            { key: 'The strongest Characters in the world are obsessed with me', img: require('./img/s14.jpg') },
            { key: 'Queen Cecia\'s Shorts', img: require('./img/s15.jpg') },
        ],
        title: 'D tier',
        textcolor: '#ff4500',
        bgColor: '#ffe4e1',
    },
    {
        data: [
            { key: 'There is no place for fakes', img: require('./img/s16.jpg') },
            { key: 'Lady Baby', img: require('./img/s17.jpg') },
            { key: 'I was told to die', img: require('./img/s18.jpg') },
        ],
        title: 'F tier',
        textcolor: '#8b0000',
        bgColor: '#ffebee',
    },
];

const renderItem = ({ item }) => (
    <View style={[styles.item]}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
            <Image source={item.img} style={styles.img} />
        </View>

        {/* Text Section */}
        <View style={styles.textContainer}>
            <TouchableOpacity style={styles.opacityStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const renderSectionHeader = ({ section: { title, bgColor, textcolor } }) => (
    <View style={{ backgroundColor: bgColor, padding: 10, borderRadius: 5 }}>
        <Text style={[styles.headerText, { color: textcolor }]}>{title}</Text>
    </View>
);

const App = () => (
    <View style={{ flex: 1, paddingBottom: 20, paddingHorizontal: 20, backgroundColor: '#f5f5f5' }}>
        <StatusBar hidden={true} />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ADD MANHWA</Text>
        </TouchableOpacity>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item, index) => item.key + index}
        />
    </View>
);

export default App;
