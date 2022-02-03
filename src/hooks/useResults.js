import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchApi = async(searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            //wait for yelp to response sth
            //then put it into the response var
    
            setResults(response.data.businesses);
            //response.data === the real data returned
            //.businesses === list of businesses
           
        } catch(err){
            setErrorMsg('Something went wrong');
        }
    };

    //First render
    //Default search
    useEffect(() => {
        searchApi('pasta');
    },[]);

    return [searchApi, results, errorMsg];

};