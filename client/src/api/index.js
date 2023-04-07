import axios from 'axios'

const API = axios.create({baseUrl : 'http://localhost:5000'}) 

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const fetchPosts = (page)=> API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const getUsersBySearch = (search) => API.get(`/user/search-user?search=${search}`);
export const getUserById =(id) => API.get(`/user/${id}`);
export const getPostsByUserId =(userid)=>API.get(`/posts/userid?userid=${userid}`);
export const followingUser = (id) => API.patch(`${'/user'}/${id}/followingUser`)
export const followedUser = (id) => API.patch(`${'/user'}/${id}/followedUser`)
export const fetchPost=(id)=>API.get(`/posts/${id}`)
export const createPost = (newPost)=> API.post('/posts' , newPost)
export const updatePost = (id,updatedPost) => API.patch(`${'/posts'}/${id}` , updatedPost)
export const deletePost = (id) => API.delete(`${'/posts'}/${id}`)
export const likePost = (id) => API.patch(`${'/posts'}/${id}/likePost`)
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const signIn =(formData) =>API.post('/user/signin' , formData)
export const signUp =(formData) =>API.post('/user/signup' , formData)
export const message_to =(value,id) =>API.patch(`/user/${id}/message_to` , {value});
export const message_from =(value,id) =>API.patch(`/user/${id}/message_from` , {value});

 
