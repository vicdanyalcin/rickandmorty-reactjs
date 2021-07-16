import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";

const Characters = ({ data, characterName, setCharacterName }) => {
  let history = useHistory();

  const handleClick = (item) => {
    setCharacterName(item);
    history.push(`/character/${item}`);
  };
  return (
    <>
      <h2>Characters</h2>

      <Row gutter={[16]}>
        {data?.results.map((char) => (
          <Col span={8}>
            <Card
              key={characterName}
              title={char.name}
              bordered={true}
              style={{ marginTop: 16 }}
            >
              <Button onClick={() => handleClick(char.id)}>
                Learn More...
              </Button>

              <p>{char.gender}</p>
              <p>{char.species}</p>
              <img alt={char.name} src={char.image} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Characters;
