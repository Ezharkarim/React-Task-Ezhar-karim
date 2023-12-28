import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCustomer = createAsyncThunk(
  "users/FetchCustomer",
  async () => {
    try {
      const datafromStorage = localStorage.getItem("key1");
     
      if(!datafromStorage || JSON.parse(datafromStorage).length === 0){
        const response = await fetch("https://reqres.in/api/users?page=1");
        const data = await response.json();
        localStorage.setItem("key1", JSON.stringify(data.data));
        return data.data || [];
      }
      return JSON.parse(datafromStorage);
      
    } catch (error) {
      console.error("Error fetching and storing data:", error.message);
      throw error;
    }
  }
);

const STATUS = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: "error"
})

const initialState = {
  customer: [],
  status: STATUS.IDLE
};


export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      const updatedData = [...state.customer, action.payload];
      state.customer = updatedData;
      localStorage.setItem("key1", JSON.stringify(updatedData));
    },
    
    removeCustomer: (state, action) => {
      const removeData = state.customer.filter((item) => item.id !== Number(action.payload));
      state.customer = removeData ;
      localStorage.setItem("key2", JSON.stringify(removeData));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomer.fulfilled, (state, action) => {
      state.status = STATUS.IDLE; 
      state.customer = action.payload;
      state.status = STATUS.SUCCESS;
    });
    builder.addCase(fetchCustomer.pending, (state, action) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchCustomer.rejected, (state, action) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const { addCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
