import React, {FC} from 'react';

const FormComponent: FC = () => {
    return (
        <div>
            <form>
                <input type='text' name={'username'}/>
                <input type='text' name={'password'}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;