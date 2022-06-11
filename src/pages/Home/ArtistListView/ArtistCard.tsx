import React from 'react';
import { Card, Col, Row } from 'antd';
import { ArtistProps } from '../../../services/musicAPI';
import { numberWithCommas } from '../../../utils/utlis';

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
            <Row>
                <Col xs={24} sm={4}>
                    <img src={data.image[0]['#text']} alt={`${data.name}`} />
                </Col>
                <Col xs={24} sm={20}>
                    <h2>{data.name}</h2>
                    <h3>Playcount: {numberWithCommas(data.playcount)}</h3>
                    <h3>Listener: {numberWithCommas(data.listeners)}</h3>
                </Col>
            </Row>
        </Card>
    )
}

export default ArtistCard;
