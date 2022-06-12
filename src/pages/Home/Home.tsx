import { Col, Row } from 'antd';
import React, { Fragment } from 'react';
import ArtistListView from './ArtistListView/ArtistListView';
import TrackListView from './TrackListView/TrackListView';

const Home = () => {
    return (
        <Row gutter={[32, 16]}>
            <Col xs={24}>
                <h1 className="mt-4">Top Artist</h1>
                <ArtistListView />
            </Col>
            <Col xs={24}>
                <h1 className="mt-4">Top Tracks</h1>
                <TrackListView />
            </Col>
        </Row>
    );
}

export default Home;
