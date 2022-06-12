import axios from "axios";
import { LASTFM_BASE } from "../constant";
import { convertQuery } from "../utils/utlis";

const musicAPI = {
    getTopArtisList: (query: Object) => {
        const api = "chart.gettopartists"

        return axios.get(`${LASTFM_BASE}&method=${api}${convertQuery(query)}`)
    },
    getTopTrackList: (query: Object) => {
        const api = "chart.gettoptracks"

        return axios.get(`${LASTFM_BASE}&method=${api}${convertQuery(query)}`)
    },
    getSearchArtist: (query: Object) => {
        const api = "artist.search"

        return axios.get(`${LASTFM_BASE}&method=${api}${convertQuery(query)}`)
    },
    getSearchTrack: (query: Object) => {
        const api = "track.search"

        return axios.get(`${LASTFM_BASE}&method=${api}${convertQuery(query)}`)
    },
}

export default musicAPI;