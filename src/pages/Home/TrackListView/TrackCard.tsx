import React from 'react';
import { Card, Col, Row, Tooltip } from 'antd';
import { PlayCircleOutlined, UserOutlined } from '@ant-design/icons';
import { TrackProps } from '../../../services/musicAPI';
import { numberWithCommas } from '../../../utils/utlis';

interface TrackCardProps {
    data: TrackProps
    onClick: () => void
}

const TrackCard = ({
    data,
    onClick
}: TrackCardProps) => {

    return (
        <Card onClick={() => { onClick() }}>
            <Row align='middle' justify='space-between'>
                <Col xs={24} md={16}>
                    <h2 className='mb-0'>{data.name}</h2>
                    <small>{data.artist.name}</small>
                </Col>
                <Col xs={24} md={8}>
                    <h3 className='mb-0'>
                        <Tooltip title="Play count">
                            <PlayCircleOutlined className='mr-2'/>
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

export default TrackCard;
