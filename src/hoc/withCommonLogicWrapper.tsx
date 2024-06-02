import {FC} from "react";

export const withCommonLogicWrapper = (Component: FC) => {

    const WrapperComponent = (props: any) => {
        return (
            <div>
                <h2>HELLO WRAPPER</h2>
                <Component {...props}/>
                <h3>HELLO WRAPPER</h3>
            </div>
        )
    }
    return WrapperComponent
}
