import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import youtubeAccessKey from '../apis/youtubeKey.json';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
      }, [defaultSearchTerm]);

    const search = async query => {
        const response = await youtube.get("/search", {
            params: {
            q: query,
            part: "snippet",
            maxResults: 2,
            type: 'video',
            key: youtubeAccessKey.key
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search];
}

export default useVideos;