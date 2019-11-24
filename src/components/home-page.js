import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
    
    const Body = styled.div`
        height: 100vh;
        display: grid;
        grid-template-columns: 12vw 1fr;
        grid-template-rows: 10vh 1fr 5vh;
        grid-template-areas: "header header"
                              "aside main"                          
                              "footer footer" 
        ;

        header {
            background: red;
            grid-area: header;
        }

        aside {
            background: blue;
            grid-area: aside;
        }

        main {
            background: green;
            grid-area: main;
        }

        footer {
            background: yellow;
            grid-area: footer;
        }
    `;
    
    return (
        <Body>
            <header/>
            <aside/>
            <main/>
            <footer/>
        </Body>
    );
}

export default HomePage;