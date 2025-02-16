import React , { useState } from "react";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Reading from "./components/Reading";
import CardImages from "./components/CardImages";
import Footer from "./components/Footer";

function App(){
    const [toggleBool , setToggleBool] = useState(true);
    const [data, setData] = useState({
        key: "",
        description: "",
        title: "",
        image: "",
        meaning: ""

    });
    let iter = [];
    for(let i = 1; i < 6; i++){
        iter.push(i);
    }
    async function onCardClick(){
        const data = await fetch("https://tarotapi.dev/api/v1/cards");
        const response = await data.json();
        const cardDeck =[];
        response.cards.forEach((element) => {
            let rNumber = Math.floor(Math.random() * CardImages.length);
            console.log(rNumber);
            cardDeck.push({
                description: element.desc,
                title: element.name,
                key: element.value,
                meaning: element.meaning_up,
                image: CardImages[rNumber].image
            })
        });
        setData(selectAcard(cardDeck));   
        setToggleBool(false);
    }
    function selectAcard(deck){
        let randomNumber = Math.floor(Math.random() * deck.length) + 1;
        return deck[randomNumber];
    }

    function onResetClick(){
        setToggleBool(true);
    }
    return(
        <React.Fragment>
            <Navbar resetClick={onResetClick}/>
            <div className="center-box">
            {
            toggleBool

             ? 
             <React.Fragment>
             <Greeting />
             {iter.map(() => {          
                return <Card Clicked={onCardClick}/>
            })}
            </React.Fragment>
            : <Reading title={data.title} key={data.key} image={data.image} description={data.description} meaning={data.meaning}/>
            }
            
    
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default App;