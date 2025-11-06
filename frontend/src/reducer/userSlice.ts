import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as type from "@/types";

import { fetchGraphQL } from "@/api/graphql";




// export const getUserInfo = createAsyncThunk(
//   "user/getUserInfo",
//   async (
//     { address }: {  address: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const data = await fetchGraphQL<{ getUserInfo: type.UserInfoType }>(
//         GET_USER_INFO,
//         {  address }
//       );
//       console.log("user", data?.getUserInfo);

//       return data?.getUserInfo;
//     } catch (error: any) {
//       return rejectWithValue(error?.message || "Failed to fetch user data");
//     }
//   }
// );


const initialState = {
  
};

const userSlice= createSlice({
  name: "user",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    

  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
