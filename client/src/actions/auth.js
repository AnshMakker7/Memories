import * as api from '../api'

export const signin =(formData , navigate)=> async(dispatch)=>{
        try {
            const {data} = await api.signIn(formData)

            dispatch({type : 'AUTH' , data});

            navigate('/');
        } catch (error) {
            console.log(error);
        }
}

export const signup =(formData , navigate)=> async(dispatch)=>{
    try {
        
        const {data} = await api.signUp(formData)
        
        dispatch({type : 'AUTH' , data});

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const searchUser= (search) => async(dispatch)=>{
    try {
        const {data} = await api.getUsersBySearch(search);
        dispatch({type : 'FETCH_USERS' , payload :{data}});
        
    } catch (err) {
        console.log(err);
    }
}

export const getUser = (id) => async(dispatch)=>{
    try {
        const {data} = await api.getUserById(id);
        dispatch({ type: 'FETCH_USER', payload: data });
        
    } catch (err) {
        console.log(err);
    }
}

// export const followingUser = (id) => async(dispatch)=>{

//     try {
//         const data = await api.followingUser(id);

//     } catch (error) {
        
//     }


// }

export const followedUser = (id) => async(dispatch)=>{

    try {
        const {data} = await api.followedUser(id);
        dispatch({type : 'FOLLOWED' , payload :data});

    } catch (error) {
        
    }


}

export const followingUser = (id) => async(dispatch)=>{

    try {
        const {data} = await api.followingUser(id);

        dispatch({type : 'FOLLOWING' , payload :data});

    } catch (error) {
        
    }


}

export const message_to = (value,id) => async(dispatch)=>{

    try {
        
        const {data} = await api.message_to(value,id);
        dispatch({type : 'RECIEVER' , payload :data});
        

    } catch (error) {
        
    }


}

export const message_from = (value,id) => async(dispatch)=>{

    try {
        const {data} = await api.message_from(value,id);
        dispatch({type : 'SENDER' , payload :data});
        

    } catch (error) {
        
    }


}