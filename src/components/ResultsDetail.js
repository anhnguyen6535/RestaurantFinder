import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return(
        //{  } refers to javascript
        // {} the actual object
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.starStyle}>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    starStyle:{
        fontSize: 14,
        color: 'gray'
    }
});

export default ResultsDetail;