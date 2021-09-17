import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    personalInfo: {},
    covidInfo: {},
    vaccinationInfo: {},
    opinions: {},
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        personalInfo: action.payload,
      };
    },
    addCovidInfo: (state, action) => {
      return {
        ...state,
        covidInfo: action.payload,
      };
    },
    addVaccinationInfo: (state, action) => {
      return {
        ...state,
        vaccinationInfo: action.payload,
      };
    },
    addAdvices: (state, action) => {
      return {
        ...state,
        opinions: action.payload,
      };
    },
  },
});

export const { addUser, addCovidInfo, addVaccinationInfo, addAdvices } =
  userSlice.actions;

export default userSlice.reducer;
