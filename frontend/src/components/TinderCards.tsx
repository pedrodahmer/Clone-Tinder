import React, { useState, useEffect }from 'react';
import TinderCard from 'react-tinder-card';

import api from '../services/api'

import Card from '../types/interfaces';

import '../styles/layout/tindercards.css'

function TinderCards() {
    const [people, setPeople] = useState<Array<Card>>([]);

    useEffect(() => {
        async function handlesFetchData(){
            const response = await api.get('/tinderClone/card')
                .then(res => res.data);
            
                setPeople(response);
        }

        handlesFetchData()
    }, [])
    
    function swiped(direction:string, name:string){
        console.log('Vocedeslizou'+name+'para a '+direction+"!!");
    }

    function outOfFrame(name:string){
        console.log(name+'saiu da tela!!')
    }

    return (
        <div className="tinder-cards">
            <div className="cards-container">
                {people.map((person) => (
                    <div className="swipe">
                        <TinderCard 
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div className="card" style={{ backgroundImage: `url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
