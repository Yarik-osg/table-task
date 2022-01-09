import React from 'react';
import {Img, P} from "./styles";

const Home = (): JSX.Element => {
    return (
        <div>
            <span>
                <P>Hello, dear people, who are checking my test task.&#128516;</P>
<P>Now, you are  on the home page called "Home"&#129312;</P>
                <P>If you want to see the tablet I made, on the topic of "Star Wars" click on the button on the sidebar "Table" to view it.&#129488;</P>
    <P>You can search by name, or sort each column in descending or ascending order&#129327;</P>
            </span>
            <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" alt="image"/>
        </div>
    );
};

export default Home;