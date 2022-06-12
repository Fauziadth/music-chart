import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import musicAPI from '../../../services/musicAPI';
import TrackCard from './TrackCard';
import Loading from '../../../component/Loading/Loading';
import { TrackListProps, TrackProps } from '../../../services/models';

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
                setLoading(false);
            })
    }

    useEffect(() => {
        loadArtist();
    }, []);

    if (isLoading) return (<Loading />)

    return (
        <List
            size="large"
            bordered
            dataSource={trackList}
            renderItem={track => <TrackCard data={track} onClick={() => { }} />}
        />
    );
}

export default TrackListView;
