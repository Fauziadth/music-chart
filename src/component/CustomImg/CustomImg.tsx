import React, { useState } from 'react';
import { Skeleton } from 'antd';


interface CustomImgProps {
    src: string,
    alt: string,
}

const CustomImg = ({
    src,
    alt,
}: CustomImgProps) => {
    const [isFailed, setFailed] = useState<boolean>(false)

    const onError = () => {
        setFailed(true);
    }

    if (isFailed) return <Skeleton.Image style={{width : 174, height : 174}}/>
    return (
        <img style={{borderRadius : 'inherit'}} alt={alt} src={src} onError={onError} />
    );
}

export default CustomImg;
