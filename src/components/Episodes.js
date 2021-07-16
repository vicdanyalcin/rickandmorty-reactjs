import React from 'react';
import {Card, Row, Col, Button} from 'antd';
import {useHistory} from "react-router-dom";


const Episodes = ({data,episodeName,setEpisodeName}) => {
    let history = useHistory();
const handleClick=(item)=> {
    history.push(`/episode/${item}`)
    setEpisodeName(item)


}
    return (
        <>
            <h2>Episodes</h2>
            <Row gutter={[16]}>
                {data?.results.map(item => (
                    <Col span={8} key={item.id}>

                        <Card  title={item.name} bordered={true} style={{marginTop: 16}}
                        >
                            <Button onClick={()=>handleClick(item.id)} >Learn More...</Button>
                            <p>{item.episode}</p>
                            <p>{item.air_date}</p>
                        </Card>
                    </Col>

                ))}

            </Row>
        </>
    )
}
export default Episodes