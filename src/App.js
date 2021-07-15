import {Layout, Menu} from 'antd';
import CharacterDetail from "./components/CharacterDetail"
import Characters from "./components/Characters"
import EpisodeDetail from "./components/EpisodeDetail"
import Episodes from "./components/Episodes"
import {useEffect, useState} from "react";
import axios from "axios";

const {Header, Content} = Layout;

const App = () => {
    const [episodeData, setEpisodeData] = useState();
    const [episodeName, setEpisodeName] = useState();
    const [characterName, setCharacterName] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://rickandmortyapi.com/api/episode',
            );

            setEpisodeData(result.data);
        };
        fetchData();
    }, []);
    const [characterData, setCharacterData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://rickandmortyapi.com/api/character',
            );

            setCharacterData(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>

            </Layout>
            <Layout style={{padding: '0 24px 24px'}}>

                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <CharacterDetail characterName={characterName} setCharacterName={setCharacterName}/>


                    <Episodes data={episodeData} episodeName={episodeName} setEpisodeName={setEpisodeName}/>
                    <Characters data={characterData} characterName={characterName} setCharacterName={setCharacterName}/>
                    <EpisodeDetail episodeName={episodeName} setEpisodeName={setEpisodeName}/>

                </Content>
            </Layout>
        </div>
    );
}

export default App;
