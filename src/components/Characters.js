import React from 'react';
import {Card, Row, Col, Button} from 'antd';
import { useHistory } from "react-router-dom";

const Characters = ({data, characterName, setCharacterName}) => {
    let history = useHistory();

    const handleClick = (item) => {
        console.log(characterName)
        setCharacterName(item)
        history.push(`/character/${characterName}`)
    }
    return (
        <>
            <h2>Characters</h2>

            <Row gutter={[16]}>

                {data?.results.map(char => (
                    <Col span={8}>

                        <Card key={char.id} title={char.name} bordered={true} style={{marginTop: 16}}
                              characterName={characterName}
                        >
                            <Button onClick={() => handleClick(char.id)}>Learn More...</Button>

                            <p>{char.gender}</p>
                            <p>{char.species}</p>
                            <img alt={char.name} src={char.image}/>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Characters