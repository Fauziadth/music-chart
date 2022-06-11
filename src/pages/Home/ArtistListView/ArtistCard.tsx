import React from 'react';
import { Card, Col, Row } from 'antd';
import { ArtistProps } from '../../../services/musicAPI';
import { numberWithCommas } from '../../../utils/utlis';
import CustomImg from '../../../component/CustomImg/CustomImg';

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
            <Row align="middle">
                <Col sm={24} md={4}>
                    <CustomImg src={data.image[1]['#text']} alt={`${data.name}`} />
                </Col>
                <Col sm={24} md={20} style={{padding : '0 20px'}}>
                    <a href={data.url} target="_blank" className='underline'><h2>{data.name}</h2></a>
                    <h3>Playcount: {numberWithCommas(data.playcount)}</h3>
                    <h3>Listener: {numberWithCommas(data.listeners)}</h3>
                </Col>
            </Row>
        </Card>
    )
}

export default ArtistCard;
