import React from 'react';
import { Card, Col, Row, Tooltip } from 'antd';
import { PlayCircleOutlined, UserOutlined } from '@ant-design/icons';

import CustomImg from '../../../component/CustomImg/CustomImg';
import { numberWithCommas } from '../../../utils/utlis';
import { ArtistProps } from '../../../services/models';

interface ArtistCardProps {
    data: ArtistProps
    onClick: () => void
}

const ArtistCard = ({
    data,
    onClick
}: ArtistCardProps) => {

    return (
        <Card onClick={() => { onClick() }}>
            <Row align="middle" justify='center'>
                <Col sm={24} md={4}>
                    <CustomImg src={data.image[1]['#text']} alt={`${data.name}`} />
                </Col>
                <Col sm={24} md={20} style={{padding : '0 20px'}}>
                    <a href={data.url} target="_blank" className='underline'><h2>{data.name}</h2></a>
                    <h3 className='mb-0'>
                        <Tooltip title="Play count">
                            <PlayCircleOutlined className='mr-2' />
                        </Tooltip>
                        {numberWithCommas(data.playcount)}
                    </h3>
                    <h3 className='mb-0'>
                        <Tooltip title="Listeners">
                            <UserOutlined className='mr-2' />
                        </Tooltip>
                        {numberWithCommas(data.listeners)}
                    </h3>
                </Col>
            </Row>
        </Card>
    )
}

export default ArtistCard;
