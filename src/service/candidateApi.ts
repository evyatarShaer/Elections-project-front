import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { CandidateModel } from "../types/candidateModel";

export const fetchCandidates = createAsyncThunk('candidates/fetchCandidates', async () => {
  try {
    const response = await axios.get<CandidateModel[]>("http://localhost:4444/api/candidates");
    return response.data as CandidateModel[];
  } catch (error) {
    console.error("Error fetching candidates:", error);
    return [];
  }
});



export const getCandidatesById = async (id: string) => {
    try {
      const response = await axios.get<CandidateModel>(`http://localhost:4444/api/candidates/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching candidates by ID:", error);
      return [];
    }
};

export const voteForCandidate = async (id: string) => {
    try {
      await axios.put(`http://localhost:4444/api/candidates/${id}`);
    } catch (error) {
      console.error("Error voting for candidate:", error);
    }
};