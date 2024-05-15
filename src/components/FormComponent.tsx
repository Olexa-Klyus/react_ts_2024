import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IPostModel} from "../models/IPostModel";
import {IFormModel} from "../models/IFormModel";
import {postService} from "../services/api.service";


const FormComponent: FC = () => {

    let formObj =
        useForm<IFormModel>({mode: "all", resolver: joiResolver(postValidator)});

    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = formObj

    const [post, setPost] = useState<IPostModel | null>(null);

    const
        save = (post: IFormModel) => {

            postService.savePost(post)
                .then((value) => setPost(value.data))
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

            {post && <h2>saved post {post.id} - {post.title}</h2>}
        </div>
    );
};

export default FormComponent;