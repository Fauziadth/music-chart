import React, { Fragment, useState } from 'react';
import { Col, Input, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchArtistListView from './SearchArtistList/SearchArtistListView';
import SearchTrackListView from './SearchTrackList/SearchTrackListView';

const SearchPage = () => {
    const [keyword, setKeyword] = useState<string>("")
    const [searchedKey, setSearchedKey] = useState<string>("")

    const search = () => {
        setSearchedKey(keyword);
    }

    return (
        <Fragment>
            <Input
                value={keyword}
                className={searchedKey ? 'small-input' : 'big-input' }
                placeholder={"Search artist or track"}
                style={{ width: '50%', marginTop: '30px' }}
                size="large"
                onChange={(e) => { setKeyword(e.target.value) }}
                onKeyDown={(e) => { if (e.key === 'Enter') search(); }}
                suffix={<SearchOutlined onClick={() => { search() }} />}
            />

            {searchedKey && <SearchArtistListView
                keyword={searchedKey}
            />}
            {searchedKey && <SearchTrackListView
                keyword={searchedKey}
            />}
        </Fragment>
    );
}

export default SearchPage;
