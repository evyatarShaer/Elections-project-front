import React, { useEffect } from "react";
import { fetchCandidates } from "../../service/candidateApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

const CandidatesList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const candidates = useSelector((state: RootState) => state.candidates.candidates);
  const status = useSelector((state: RootState) => state.candidates.status);
  const error = useSelector((state: RootState) => state.candidates.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCandidates());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>THE CANDIDATES</h1>
      {candidates.map((candidate) => (
        <div key={candidate.name}>
          <img src={candidate.image} alt={candidate.name} />
          <h2>{candidate.name}</h2>
          <p>Votes: {candidate.votes}</p>
        </div>
      ))}
    </div>
  );
};

export default CandidatesList;
