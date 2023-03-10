import React from "react";
import {Route, Routes} from "react-router-dom";

import Login from "pages/Login";
import Home from "pages/Home";
import styled from "styled-components";
import Register from "../pages/Register";
import Search from "../pages/Search";
import {useUser} from "../hook/User";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  padding: 25px;

  background: #ffffff;
  box-shadow: inset 0 3px 5px -3px #000000;
`

/**
 * This is the Component that will switch out what Component is being shown
 * depending on the "url" of the page
 * <br>
 * You'll notice that we have a <Routes> Component and inside it, we have
 * multiple <Route> components. Each <Route> maps a specific "url" to show a
 * specific Component.
 * <br>
 * Whenever you add a Route here make sure to add a corresponding NavLink in
 * the NavBar Component.
 * <br>
 * You can essentially think of this as a switch statement:
 * @example
 * switch (url) {
 *     case "/login":
 *         return <Login/>;
 *     case "/":
 *         return <Home/>;
 * }
 *
 */
const Content = () => {
    const {
        accessToken, setAccessToken,
        refreshToken, setRefreshToken
    } = useUser();

    return (
        <StyledDiv>
            <Routes>
                {!accessToken ? <Route path="/" element={<Login/>}/> : <Route path="/" element={<Home/>}/>}
                <Route path="/search" element={<Search/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </StyledDiv>
    );
}

export default Content;
