import axios from "axios";

export const loginUser = async(email:string, password:string)=>{
    const res = await axios.post("/user/login",{email,password});
    if(res.status !==200){
        throw new Error("Unable to login");
    }
    const data = await res.data;
    return data;
};

export const signupUser = async(name:string,email:string, password:string)=>{
    const res = await axios.post("/user/signup",{name,email,password});
    if(res.status !==201){
        throw new Error("Unable to Signup");
    }
    const data = await res.data;
    return data;
};

export const checkAuthStatus = async()=>{
    const res = await axios.get("/user/auth-status");
    if(res.status !==200){
        throw new Error("Unable to login");
    }
    const data = await res.data;
    return data;
};




export const sendChatRequest = async (message: string ) => {
    try {
        const res = await axios.post("/chat/new", { message });
    if (res.status !== 200) {
      throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
    } catch (error) {
        console.log(error);
    }
};


export const getUserChats = async ( ) => {
    try {
        const res = await axios.get("/chat/all-chats");
    if (res.status !== 200) {
      throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteUserChats = async ( ) => {
    try {
        const res = await axios.delete("/chat/delete");
    if (res.status !== 200) {
      throw new Error("Unable to delete chat");
    }
    const data = await res.data;
    return data;
    } catch (error) {
        console.log(error);
    }
};

export const logoutUser = async ( ) => {
    try {
        const res = await axios.get("/user/logout");
    if (res.status !== 200) {
      throw new Error("Unable to delete chat");
    }
    const data = await res.data;
    return data;
    } catch (error) {
        console.log(error);
    }
};