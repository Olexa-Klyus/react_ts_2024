import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

interface IFormProps {
    title: string,
    body: string,
}

const FormComponent: FC = () => {

    let formObj =
        useForm<IFormProps>({mode: "all", resolver: joiResolver(postValidator)});

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

                <input type='text'{...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>

                <input type='text' {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>

                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;