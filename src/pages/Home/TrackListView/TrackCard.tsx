import React from 'react';
import { Card } from 'antd';
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
            <h2>{data.name}</h2>
            <h3>Playcount: {numberWithCommas(data.playcount)}</h3>
            <h3>Listener: {numberWithCommas(data.listeners)}</h3>
        </Card>
    )
}

export default TrackCard;
