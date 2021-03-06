import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Card, Col, Row, List, Spin, Select, Form} from "antd";
import FilterForm from "./FilterForm";

const {Option} = Select;
const EpisodeDetail = ({episodeName, value, onSelect}) => {
    const [single, setSingle] = useState()
    const [single2, setSingle2] = useState();


    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);

    const [form] = Form.useForm();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://rickandmortyapi.com/api/episode/${episodeName}`,
            );
            setIsLoading2(true);

            setSingle(result.data);
            setIsLoading2(false);

        };
        fetchData()
    }, [episodeName]);

    const url = single?.characters.map(function (x) {
        return x.replace("https://rickandmortyapi.com/api/character/", '');
    });
    const toNumberE = url?.map(function (x) {
        return parseInt(x, 10);
    });
    const realUrl = `https://rickandmortyapi.com/api/character/${toNumberE}`
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                realUrl,
            );
            setIsLoading(true);
            if (value === true) setSingle2(result.data.sort((a, b) => a.name.localeCompare(b.name)));
            if (value === false) setSingle2(result.data.sort((a, b) => b.name.localeCompare(a.name)));
            setSingle2(result.data)
            setIsLoading(false);

        };
        fetchData()
    }, [realUrl, value]);

    const onFinish = (e) => {
        let filterData = Array.from(single2)
        let newFilteredData = filterData.filter((f) => (f.name).toLowerCase().includes(e.name))
        setSingle2(newFilteredData)
    }
    const onReset = async () => {
        form.resetFields();
        const result = await axios(
            realUrl,
        );
        setIsLoading(true);
        setSingle2(result.data)
        setIsLoading(false);

    };
    return (
        <Spin spinning={isLoading || isLoading2}>
            <div><Row gutter={[16]}>
                <Col span={8}>
                    <Card key={single?.id} title={single?.name} bordered={true} style={{marginTop: 16}}
                          episodeName={episodeName}
                    >
                        <p>{single?.episode}</p>
                        <p>{single?.air_date}</p>
                    </Card>
                </Col>
                <Col span={16}>
                    <FilterForm onFinish={onFinish} value={value} form={form} onClick={onReset}/>
                    <Select
                        showSearch
                        style={{width: 200}}
                        placeholder="Order By"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children
                                .toLowerCase()
                                .localeCompare(optionB.children.toLowerCase())
                        }
                        onSelect={onSelect}
                    >
                        <Option value="1">(A-Z)</Option>
                        <Option value="2">(Z-A)</Option>
                    </Select>
                    <List style={{marginTop: 16}}
                          itemLayout="horizontal"
                          dataSource={single2}
                          bordered
                          renderItem={item => (
                              <List.Item extra={
                                  <img
                                      width={200}
                                      alt="logo"
                                      src={item?.image}
                                  />
                              }>
                                  <List.Item.Meta
                                      title={<><h3>Name: {item?.name}</h3><h3>Gender: {item?.gender}</h3>
                                          <h3>Status: {item?.status}</h3><h3>Species: {item?.species}</h3></>}
                                  />
                              </List.Item>
                          )}
                    />
                </Col>
            </Row></div>
        </Spin>

    )
}
export default EpisodeDetail