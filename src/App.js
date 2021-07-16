import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
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
    console.log(episodeName,   "FROM APP")

    const [characterName, setCharacterName] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://rickandmortyapi.com/api/episode',
            );
            if (!result.data) return;
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
        <Router>
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1"> <Link to="/episodes">Episodes</Link></Menu.Item>
                            <Menu.Item key="2"> <Link to="/characters">Characters</Link></Menu.Item>
                        </Menu>
                    </Header>

                </Layout>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                        <Switch>
                            <Route path={`/character/${characterName}`}>
                                <CharacterDetail characterName={characterName} setCharacterName={setCharacterName}/>
                            </Route>
                            <Route path="/episodes">
                                <Episodes data={episodeData} episodeName={episodeName} setEpisodeName={setEpisodeName}/>
                            </Route>
                            <Route path="/characters">
                                <Characters data={characterData} characterName={characterName}
                                            setCharacterName={setCharacterName}/>
                            </Route>
                            <Route path={`/episode/${episodeName}`}>
                                <EpisodeDetail episodeName={episodeName} />
                            </Route>
                        </Switch>

                    </Content>
                </Layout>

            </div>
        </Router>
    );
}

export default App;
