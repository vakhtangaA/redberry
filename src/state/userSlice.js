import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    personalInfo: {},
    covidInfo: {},
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
  },
});

export const { addUser, addCovidInfo, addVaccinationInfo } = userSlice.actions;

export default userSlice.reducer;
