import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');       //update content every moment
    const [searchApi, results, errorMsg] = useResults();

    const filterByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        const toReturn =  results.filter(result => {
            return result.price === price;
        });
        try {
            if(toReturn.length === 0){
                console.log(`cant find any element of ${price}`);
            }else return toReturn;
        } catch (error) {
            console.log("error");
            return toReturn;
        }
    };

    return(
        //add flex 1 to the most parent view if content is being cut off 
        <View style={{flex:1}}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}        //pass in the reference bc no param
            />
            {errorMsg ?<Text>{errorMsg}</Text> :null}  

            <ScrollView>
                <ResultsList results = {filterByPrice('$')} title='Cost Effective'/>
                <ResultsList results = {filterByPrice('$$')} title='Big Pricier'/>
                <ResultsList results = {filterByPrice('$$$')} title='Big Spender'/>
            </ScrollView>
        </View>
        //<Text>We have found {results.length} results</Text>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;