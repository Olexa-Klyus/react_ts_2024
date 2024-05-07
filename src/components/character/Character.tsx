import React, {FC} from 'react';

interface IProps {
    name: string;
    img: string;
}

type ITypeProps = IProps & { children?: React.ReactNode }

const Character: FC<ITypeProps> = ({name, img, children}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{children}</p>
            <img src={img} alt={name}/>
        </div>
    );
};

export default Character;