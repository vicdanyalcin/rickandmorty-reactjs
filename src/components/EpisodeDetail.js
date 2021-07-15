import React, {useEffect, useState} from 'react'
import axios from "axios";

const EpisodeDetail = ({episodeName, setEpisodeName}) => {
    const [single,setSingle]=useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `https://rickandmortyapi.com/api/episode/${episodeName}`,
            );
            console.log(result.data)
            setSingle(result.data);
            console.log(single)
        };

        fetchData()
    }, [episodeName,setEpisodeName,single]);
    return (
        <div>{single?.name}</div>
    )
}
export default EpisodeDetail