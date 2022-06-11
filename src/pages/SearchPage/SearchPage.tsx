import React, { Fragment, useState } from 'react';
import { Col, Input, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchArtistListView from './SearchArtistList/SearchArtistListView';
import SearchTrackListView from './SearchTrackList/SearchTrackListView';

const SearchPage = () => {
    const [keyword, setKeyword] = useState<string>("")
    const [searchedKey, setSearchedKey] = useState<string>("")

    return (
        <Fragment>
            <Input
                value={keyword}
                bordered={true}
                placeholder={"Search..."}
                size="large"
                onChange={(e) => { setKeyword(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') setSearchedKey(keyword);
                }}
                suffix={
                    <SearchOutlined
                        onClick={() => { setSearchedKey(keyword) }}
                    />
                } />

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
