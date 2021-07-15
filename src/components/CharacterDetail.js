import React, {useEffect, useState} from 'react'
import axios from "axios";

const CharacterDetail = ({characterName, setCharacterName}) => {
    const [singleChar,setSingleChar]=useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `https://rickandmortyapi.com/api/character/${characterName}`,
            );
            console.log(result.data)
            setSingleChar(result.data);
            console.log(singleChar)
        };

        fetchData()
    }, [characterName,setCharacterName,singleChar]);
    return (
        <div>{singleChar?.name}</div>
    )
}
export default CharacterDetail