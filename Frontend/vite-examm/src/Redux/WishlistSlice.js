
import { createSlice } from "@reduxjs/toolkit"

const WishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        Items:[]
    },
    reducers:{
        addwishlist:(state,action)=>{
            state.Items.push(action.payload)
        },
        removewishlist:(state,action)=>{
            const target= state.Items.find(item=>item.id==action.payload)
            const indexOftarget=state.Items.indexOf(target)
            state.Items.splice(indexOftarget,1)
        }
    }
})

export const{ addwishlist,removewishlist}=WishlistSlice.actions
export default WishlistSlice.reducer