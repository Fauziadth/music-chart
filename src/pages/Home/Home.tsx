import { Col, Row } from 'antd';
import React, { Fragment } from 'react';
import ArtistListView from './ArtistListView/ArtistListView';
import TrackListView from './TrackListView/TrackListView';

const Home = () => {
    return (
        <Row>
            <Col xs={24} sm={12}>
                <ArtistListView />
            </Col>
            <Col xs={24} sm={12}>
                <TrackListView />
            </Col>
        </Row>
    );
}

export default Home;
