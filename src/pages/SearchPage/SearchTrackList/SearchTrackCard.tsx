import React from 'react';

import CustomImg from '../../../component/CustomImg/CustomImg';
import { SearchedTrackProps } from '../../../services/models';

interface SearchArtistCardProps {
    data: SearchedTrackProps
    onClick: () => void
}

const SearchTrackCard = ({
    data,
    onClick
}: SearchArtistCardProps) => {

    return (
        <a
            className='shadow'
            href={data.url}
            target="_blank"
            style={{ width: 480 }}
            onClick={() => { onClick() }}
        >
            <CustomImg alt="track image" src={data.image[2]['#text']} />
            <div className='p-3'>
                <div> {data.name} </div>
                <small> {data.artist} </small>
            </div>
        </a>
    )
}

export default SearchTrackCard;
