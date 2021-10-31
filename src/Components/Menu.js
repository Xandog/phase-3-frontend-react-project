import React from 'react';

function Menu({sandwiches}){
    //just rendering some of our sandwich data in a basic way, may need to add a seperate "Sandwich" component later for CSS purposes
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {sandwiches.map(sandwich => <li>{sandwich}</li>)}
            </ul>
        </div>
    )
}

export default Menu;