import React from 'react';
import { useDispatch } from 'react-redux';
import { setJwt } from './signin';
import SignIn from '../pages/SignIn';

function SignInContainer () {
    // const token = useSelector(state =>state.signin.token);

    const dispatch = useDispatch()  
    const onSetJwt = token => dispatch(setJwt(token))

    return (
        <SignIn onSetJwt = {onSetJwt} />
    )
}

export default SignInContainer