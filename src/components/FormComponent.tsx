import React, {FC} from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    age: number,
    password: string,
}

const FormComponent: FC = () => {
    let form = useForm<IFormProps>();
    console.log(form);


    return (
        <div>
            <form>
                console.log('hkhkj');
                <input type='text' name={'username'}/>
                <input type='number' name={'age'}/>
                <input type='text' name={'password'}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;