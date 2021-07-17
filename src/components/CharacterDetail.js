import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Card, Col, List, Row, Spin} from "antd";

const CharacterDetail = ({characterName, setCharacterName}) => {

    const [singleChar, setSingleChar] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [single2,setSingle2]=useState()
    const [item,setItem]=useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `https://rickandmortyapi.com/api/character/${characterName}`,
            );
            setSingleChar(result.data);
        };

        fetchData()
    }, [characterName, setCharacterName]);
    const url = singleChar?.episode.map(function (x) {
        return x.replace("https://rickandmortyapi.com/api/episode/", '');
    });
    const toNumberE = url?.map(function (x) {
        return parseInt(x, 10);
    });
    const realUrl = `https://rickandmortyapi.com/api/episode/${toNumberE}`
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                realUrl,
            );
            setIsLoading(true);
            // if (value === true) setSingle2(result.data.sort((a, b) => a.name.localeCompare(b.name)));
            // if (value === false) setSingle2(result.data.sort((a, b) => b.name.localeCompare(a.name)));
            setSingle2(result.data)
            setIsLoading(false);

        };
        fetchData()
    }, [realUrl]);

    return (
        <Spin spinning={isLoading}><div><Row gutter={[16]}>
            <Col span={8}>

                <Card key={singleChar?.id} title={singleChar?.name} bordered={true} style={{marginTop: 16}}>
                    <p>Name: {singleChar?.name}</p>
                    <p>Origin: {singleChar?.origin?.name}</p>
                    <p>Status: {singleChar?.status}</p>
                    <p>Species: {singleChar?.species}</p>
                    <p>Location:{singleChar?.location?.name}</p>
                    <img alt={singleChar?.name} src={singleChar?.image}/>

                </Card>
            </Col>
            <Col span={16} style={{marginTop: 16}}>
                <List
                      itemLayout="horizontal"
                      dataSource={single2}
                      bordered
                      item={item}
                      setItem={setItem}
                      renderItem={item => (
                          <List.Item>
                              <List.Item.Meta
                                  title={ <>
                                      <h3>
                                          {item.name}
                                      </h3>
                                  </>}
                              />
                          </List.Item>
                      )}
                />            </Col>

        </Row></div></Spin>)
}
export default CharacterDetail