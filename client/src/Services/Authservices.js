import axios from 'axios'

export const loginUser = async(credentials) =>{

    const res = await axios.post('http://localhost:4000/user/login',credentials)

    return res

}

export const SignupUser = async(credentials) =>{

    const res = await axios.post('http://localhost:4000/user/signup',credentials)

    return res

}
    