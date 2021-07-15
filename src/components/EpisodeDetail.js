import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Button, Card, Col, Row,List,Avatar} from "antd";

const EpisodeDetail = ({episodeName, setEpisodeName}) => {
    const [single,setSingle]=useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `https://rickandmortyapi.com/api/episode/${episodeName}`,
            );
            console.log(result.data)
            setSingle(result.data);
        };

        fetchData()
    }, [episodeName,setEpisodeName]);
    return (
        <div><Row gutter={[16]}>
            <Col span={8}>

                <Card key={single?.id} title={single?.name} bordered={true} style={{marginTop: 16}}
                      episodeName={episodeName}
                >
                    <p>{single?.episode}</p>
                    <p>{single?.air_date}</p>
                    <p>{single?.url}</p>
                </Card>
            </Col>
            <Col span={16}>
                <List
                    itemLayout="horizontal"
                    dataSource={single?.characters}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.image} />}
                                title={<a href="https://ant.design">{item}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />,
            </Col>

        </Row></div>
    )
}
export default EpisodeDetail