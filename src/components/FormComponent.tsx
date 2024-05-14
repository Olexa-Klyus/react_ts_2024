import React, {FC} from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    age: number,
    password: string,
}

const FormComponent: FC = () => {
    let formObj = useForm<IFormProps>();

    let {
        register,
        handleSubmit,
        formState: {errors}
    } = formObj


    const
        save = (formValues: IFormProps) => {
            console.log(formValues) // отримуємо значення з інпутів
        }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>

                <input type='text'
                    // реєстрація та варіант валідації
                       {...register('username',
                           {
                               required: {value: true, message: 'this field is required'},
                               maxLength: {value: 10, message: 'max length 10'},
                           })}
                />

                {errors.username && <span>{errors.username.message}</span>}
                <br/>
                <input type='text' {...register('password')}/>
                <br/>
                <input type='number' {...register('age')}/>
                <br/>

                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;