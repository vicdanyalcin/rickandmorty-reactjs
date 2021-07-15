import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Avatar,Row,Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

 const Episodes = () =>{
    const [data, setData] = useState();
 console.log(data);
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://rickandmortyapi.com/api/episode',
          );
     
          setData(result.data);
        };
     
        fetchData();
      }, []);
     
    return (
        <>
                        <h2>Episodes</h2>

        <Row gutter={[16]}>
              {data?.results.map(item => (
                <Col span={8}>

                <Card key={item.id} title={item.name} bordered={true}       style={{ marginTop: 16 }}
>
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