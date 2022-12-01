import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import newsSlice from './slices/news.slice'

export default configureStore({
    reducer: {
      products: newsSlice,
      isLoading: isLoadingSlice
    }
})
