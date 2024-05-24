import { create, useStore } from 'zustand'
import { useUserStore } from './userStore'





export const useChatStore = create((set) => ({
    user:null,
    isCurrentUserBlocked:false,
    isreceiverBlocked:false,
    changeChat: (chatId, user)=>{
        const currentUser = useUserStore.getState().currentUser

        if(user.blocked.includes(currentUser.id)){
            return set({
                chatId,
                user:null,
                isCurrentUserBlocked:true,
                isreceiverBlocked:false

            })
        }

        
        else if(currentUser.blocked.includes(user.id)){
            return set({
                chatId,
                user:user,
                isCurrentUserBlocked:false,
                isreceiverBlocked:true

            })
        }

        else{
           return set({
                chatId,
                user:user,
                isCurrentUserBlocked:false,
                isreceiverBlocked:false

            })
        }
    },

    changeBlock: () =>{
        set(state=>({...state, isreceiverBlocked: !state.isreceiverBlocked}))
    }

}))