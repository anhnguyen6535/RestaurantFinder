import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    //make it shorter when called
    //ex: yelp.get('/search') 
    headers: {
        Authorization: 'Bearer Ml_VSfur9zSjxRngM2yOXFisKrDN2-ckk9Pb85bNGPPSSsO8dv2AdNK815kLwFiE6WcdP1GfxRsw0uq-uPw8Eyo0ABCAV18p-ccvIIbPiIwp3JITUMCbXvclhvzXYXYx'
    }
});

