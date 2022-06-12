import { DetailedArtistProps } from "./models";

export const initDetailedArtist : DetailedArtistProps = {
    name: "",
    mbid: "",
    url: "",
    image: [],
    streamable: "",
    ontour: "",
    stats: {
        listeners: "",
        playcount: ""
    },
    tags : {
        tag : []
    },
    bio : {
        published : "",
        summary : "",
        content : "",
    }
}
