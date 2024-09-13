import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGet } from "../../api-services/fetch-operations"; 

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (apiUrl, { rejectWithValue }) => {
    try {
      const response = await fetchGet(apiUrl);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
  status: "initial",
  error: null,
};

const slice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
