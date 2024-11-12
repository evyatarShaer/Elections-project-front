import { createSlice } from '@reduxjs/toolkit';
import { CandidateModel } from '../../types/candidateModel';
import { fetchCandidates } from '../../service/candidateApi';

interface CandidatesState {
    candidates: CandidateModel[];
    status: string;
    error: string | null;
}

const initialState: CandidatesState = {
    candidates: [],
    status: 'idle',
    error: null,
};

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase(fetchCandidates.pending, (state) => {
                state.status = 'loading';
            })
           .addCase(fetchCandidates.fulfilled, (state, action) => {
                state.status ='succeeded';
                state.candidates = action.payload;
            })
           .addCase(fetchCandidates.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default candidatesSlice.reducer;