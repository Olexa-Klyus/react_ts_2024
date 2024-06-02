import {FC} from "react";

const withCommonLogicWrapper = (Component: FC) => {

    const WrapperComponent = (props: any) => {
        return (
            <div>
                HELLO WRAPPER
                <Component/>

            </div>
        )
    }
    return WrapperComponent
}
