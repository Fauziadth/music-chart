import React, { useState } from 'react';
import { Card, Col, Row, Tag, Tooltip } from 'antd';
import { PlayCircleOutlined, UserOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

import CustomImg from '../../../component/CustomImg/CustomImg';
import Loading from '../../../component/Loading/Loading';
import musicAPI from '../../../services/musicAPI';
import { numberWithCommas } from '../../../utils/utlis';
import { ArtistProps, DetailedArtistProps } from '../../../services/models';
import { initDetailedArtist } from '../../../services/initmodels';

interface ArtistCardProps {
    data: ArtistProps
}

const ArtistCard = ({
    data
}: ArtistCardProps) => {
    const [isExpand, setExpand] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [details, setDetails] = useState<DetailedArtistProps>(initDetailedArtist);

    const loadArtist = () => {
        setLoading(true);
        setExpand(true);
        musicAPI.getArtistDetail({ artist: data.name })
            .then(response => {
                setDetails(response.data.artist);
                setLoading(false);
            })
    }

    return (
        <Card>
            <Row align="middle" justify='center'>
                <Col sm={24} md={4}>
                    <CustomImg src={data.image[1]['#text']} alt={`${data.name}`} />
                </Col>
                <Col sm={22} md={18} style={{ padding: '0 20px' }}>
                    <a href={data.url} target="_blank" className='underline'><h2>{data.name}</h2></a>
                    <h3 className='mb-0'>
                        <Tooltip title="Play count">
                            <PlayCircleOutlined className='mr-2' />
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
                <Col sm={2} md={2} style={{ padding: '0 20px', fontSize: '30px', cursor: 'pointer', color:'#299ED3' }}
                    onClick={() => {
                        if (isExpand) setExpand(false)
                        else loadArtist()
                    }}>
                    {isExpand ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </Col>
            </Row>

            {/* Additional information through expand collapse part */}
            {isExpand &&
                <Row align="middle" justify='center'>
                    {isLoading ?
                        <Loading />
                        :
                        <div className='pt-4'>
                            {details.tags.tag.map((t, idx) => <a key={idx} href={t.url} target="_blank"><Tag color={'blue'}>{t.name}</Tag></a>)}
                            <div className='mt-2' dangerouslySetInnerHTML={{ __html : details.bio.summary}}/>
                        </div>
                    }
                </Row>}
        </Card>
    )
}

export default ArtistCard;
