import axios from 'axios'
//액션 타입 생성
const SET_JWT = 'signin/SET_JWT'

export const setJwt = data => ({type: SET_JWT, data})

const initialState = {
    data: ''
}


export const userLogin = async (user, onSetJwt, {history}) => {
    await axios.post("http://localhost:8080/api/users/login", user,
    {
        headers:
        {
            'Content-Type' :'application/json'
        }
    })
        .then(function (response) {
            onSetJwt({ token: response.data })
            localStorage.setItem("token", response.data)
            history.push("/main/home")
        })
        .catch(function (error) {
            console.log(error)
        })
}

//리듀서 선언
export default function signin(state = initialState, action) {
    switch (action.type) {
        case SET_JWT:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}