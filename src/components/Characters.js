import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Avatar,Row,Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

 const Characters = () =>{
    const [data, setData] = useState();
 console.log(data);
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://rickandmortyapi.com/api/character',
          );
     
          setData(result.data);
        };
     
        fetchData();
      }, []);
     
    return (
        <>
                        <h2>Characters</h2>

        <Row gutter={[16]}>

              {data?.results.map(char => (
                <Col span={8}>

                <Card key={char.id} title={char.name} bordered={true}       style={{ marginTop: 16 }}
>
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