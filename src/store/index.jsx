import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart.slice'
import isLoadingSlice from './slices/isLoading.slice'
import newsSlice from './slices/news.slice'
import purchasesSlice from './slices/purchases.slice'

export default configureStore({
    reducer: {
      products: newsSlice,
      isLoading: isLoadingSlice,
      purchases: purchasesSlice,
      Cart: cartSlice
    }
})
