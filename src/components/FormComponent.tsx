import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator";

interface IFormProps {
    username: string,
    age: number,
    password: string,
}

const FormComponent: FC = () => {

    let formObj =
        useForm<IFormProps>({mode: "all", resolver: joiResolver(userValidator)});

    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = formObj


    const
        save = (formValues: IFormProps) => {
            console.log(formValues) // отримуємо значення з інпутів
        }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>

                <input type='text'{...register('username')}/>
                {
                    errors.username && <span>{errors.username.message}</span>
                }
                <br/>
                <input type='text' {...register('password')}/>
                <br/>
                <input type='number' {...register('age')}/>
                {
                    errors.age && <span>{errors.age.message}</span>
                }
                <br/>

                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;