import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSearchResults = createAsyncThunk('SAVE_RESULTS', async searchCriteria => {
    const options = {
        method: 'get',
        url: `http://localhost:3001/items?search=${searchCriteria}`,
        responseType: 'stream'
    };
    const response = await axios(options);

    return response.data.results;
});
