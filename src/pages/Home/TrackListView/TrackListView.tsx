import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import musicAPI, { TrackListProps, TrackProps } from '../../../services/musicAPI';
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
        <Col xs={24}>
            <Card onClick={() => { onClick() }}>
                <h2>{data.name}</h2>
                <h3>Playcount: {numberWithCommas(data.playcount)}</h3>
                <h3>Listener: {numberWithCommas(data.listeners)}</h3>
            </Card>
        </Col>
    )
}

const TrackListView = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [trackList, setTrackList] = useState<Array<TrackProps>>([]);
    const [page, setPage] = useState<number>(1);

    const getQuery = () => {
        return {
            page : page,
            limit : 10
        }
    }

    const loadArtist = () => {
        setLoading(true);
        musicAPI.getTopTrackList(getQuery())
            .then(response => {
                const data: TrackListProps = response.data.tracks;
                setTrackList(data.track);
            })
    }

    useEffect(() => {
        loadArtist();
    }, []);

    return (
        <Row gutter={[16, 16]} style={{ padding: "20px" }}>
            {trackList.map((track, idx) => (
                <TrackCard key={idx} data={track} onClick={() => { }} />
            ))}
        </Row>
    );
}

export default TrackListView;
