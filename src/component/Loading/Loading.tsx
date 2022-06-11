import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';


const Loading = () => {
    return (
        <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }} >
            <LoadingOutlined style={{ fontSize: '48px' }} spin />
        </div>
    );
}

export default Loading;
