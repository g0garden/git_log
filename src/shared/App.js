import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Header from "../components/Header";
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import PostList from '../pages/PostList';

import { history } from "../redux/configureStore";
import { useDispatch } from 'react-redux';
import { actionCreators} from '../redux/modules/user';

function App() {
  const dispatch = useDispatch();
  const local_token = localStorage.getItem("token") ? true : false;


  //제일 처음에 렌더링 될때 
  useEffect(() => {
    if(local_token){
      dispatch(actionCreators.loginCheck(local_token));
    }

  },[])

  return (
    <React.Fragment>
      <Background>
    <Responsive>
      <Header/>
      <ConnectedRouter history={history}>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={PostList} />
      </ConnectedRouter>
    </Responsive>
    </Background>
    </React.Fragment>
  );
}

const Background = styled.div`
  ${(props) => props.theme.border_box};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.main_bg_color};
`;
const Responsive = styled.div`
  ${(prop) => prop.theme.responsiveContainer};
  width: 70vw;
  margin:auto;
`;

export default App;
