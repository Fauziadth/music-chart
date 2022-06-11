import React from 'react';
import { Card } from 'antd';
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
            <h2>{data.name}</h2>
            <h3>Playcount: {numberWithCommas(data.playcount)}</h3>
            <h3>Listener: {numberWithCommas(data.listeners)}</h3>
        </Card>
    )
}

export default ArtistCard;
