import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import musicAPI, { TrackListProps, TrackProps } from '../../../services/musicAPI';
import { numberWithCommas } from '../../../utils/utlis';
import TrackCard from './TrackCard';

const TrackListView = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [trackList, setTrackList] = useState<Array<TrackProps>>([]);
    const [page, setPage] = useState<number>(1);

    const getQuery = () => {
        return {
            page: page,
            limit: 10
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
                <Col key={idx} xs={24}>
                    <TrackCard data={track} onClick={() => { }} />
                </Col>
            ))}
        </Row>
    );
}

export default TrackListView;
