import React, {AnchorHTMLAttributes, MouseEvent} from "react";
import {useRouter} from "next/router";

type Props = {} & AnchorHTMLAttributes<any>;

export const Link: React.FC<Props> = (props) => {
    const router = useRouter();
    const {children, ...elementProps} = props;

    const handleClick = (e: MouseEvent<any, any>): void => {
        e.preventDefault();
        router.push(props.href as string);
    }

    return <a {...elementProps} onClick={handleClick}>
        {children}
    </a>
}