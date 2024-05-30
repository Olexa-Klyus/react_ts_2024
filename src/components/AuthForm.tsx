import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models";
import {authService} from "../services";


const AuthForm = () => {

    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({defaultValues: {username: 'userSZ1', password: 'P@$$word1'}});


    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    //робимо через useState, бо змінна isAuth невидима в блоці return

    const authenticate = async (formData:AuthDataModel)=> {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    };

    return (
        <div>
            <h3>login Form</h3>
            <div>
                {
                    isAuthState ? <span>ok</span> : <span>not ok</span>
                }
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text"{...register('username')}/>
                <input type="text"{...register('password')}/>
                <button></button>
            </form>
        </div>
    );
};

export default AuthForm;