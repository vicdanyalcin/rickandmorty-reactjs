import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Avatar, Card, Col, List, Row} from "antd";

const CharacterDetail = ({characterName, setCharacterName}) => {
    console.log(characterName,"C from DETAIL")
    const [singleChar,setSingleChar]=useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `https://rickandmortyapi.com/api/character/${characterName}`,
            );
            console.log(result.data)
            setSingleChar(result.data);
        };

        fetchData()
    }, [characterName,setCharacterName]);
    return (
        <div><Row gutter={[16]}>
            <Col span={8}>

                <Card key={singleChar?.id} title={singleChar?.name} bordered={true} style={{marginTop: 16}}>
                    <p>{singleChar?.name}</p>
                    <p>{singleChar?.status}</p>
                    <p>{singleChar?.species}</p>
                </Card>
            </Col>


        </Row></div>    )
}
export default CharacterDetail