import { ActorSubclass } from "@dfinity/agent"
import { _SERVICE } from "../../../../declarations/StarDustAdventures_backend/StarDustAdventures_backend.did"
import { useMutation, useQueryClient } from "react-query"
import api from "."

type CreateUserData={
    user : User;
    refBy : any;
}

const queryClient = useQueryClient()

export const CREATE_USER = (actor : ActorSubclass<_SERVICE>, data : CreateUserData)=>{
    return useMutation(async()=>api.update(()=>actor.createUser(data.user, data.refBy)))
}

export const UPDATE_USER = (actor : ActorSubclass<_SERVICE>, data : User)=>{
    return useMutation('user', async()=>api.update(()=>actor.updateUser(data)),{
        onSuccess : ()=>{
            queryClient.invalidateQueries('user')
        }
    })
}

export const DISABLE_USER = (actor : ActorSubclass<_SERVICE>)=>{
    return useMutation('user',async()=>api.update(()=>actor.disableUser()))
}