import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

interface IFormProps {
    title: string,
    body: string,
    userId: number,
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


            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: formValues.title,
                    body: formValues.body,
                    userId: formValues.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
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

                <input type='text' {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>


                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;