import React from "react";
import {Form, Input, Button} from 'antd';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const FilterForm = ({onFinish, onClick, form}) => {
    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="name" label="Name" rules={[{required: true}]}>
                <Input/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Search
                </Button>
                <Button htmlType="button" onClick={onClick}>
                    Reset Filter
                </Button>

            </Form.Item>
        </Form>
    );
};

export default FilterForm