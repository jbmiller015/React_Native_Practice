import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ksbi-mBkV8zhKoAiezFauIGzKBCz7sUbhO_oiyNp8MRTRuNZljq0SQ1jyxHNWoAc23Fl8zzAWMyrYpfD-XDKnPSSQK45rDnzETKNPTHJSkiY5atQ53piiHrJuU3qXnYx'
    }
});