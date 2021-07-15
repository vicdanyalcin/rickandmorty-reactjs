import React from 'react';
import {Card, Row, Col, Button} from 'antd';


const Episodes = ({data,episodeName,setEpisodeName}) => {

const handleClick=(item)=> {
    setEpisodeName(item)
}
    return (
        <>
            <h2>Episodes</h2>
            <Row gutter={[16]}>
                {data?.results.map(item => (
                    <Col span={8}>

                        <Card key={item.id} title={item.name} bordered={true} style={{marginTop: 16}} episodeName={episodeName}
                        >
                            <Button onClick={()=>handleClick(item.id)} >Learn More...</Button>
                            <p>{item.episode}</p>
                            <p>{item.air_date}</p>
                            <p>{item.url}</p>
                        </Card>
                    </Col>

                ))}

            </Row>
        </>
    )
}
export default Episodes