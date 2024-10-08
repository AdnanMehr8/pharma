import { configureStore } from "@reduxjs/toolkit";
import user from './authSlice';
import record from './recordSlice';
import mixing from './mixingSlice';
import compression from './compressionSlice';
import coating from './coatingSlice';

const store = configureStore({
    reducer: {user, record, mixing, compression, coating}
});

export default store;