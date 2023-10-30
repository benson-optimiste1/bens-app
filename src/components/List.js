import { useState } from "react";

function BeerListComponent(props){
    console.log('props->', props)
    return(
        <div className="beer-type">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
    
}

export default function BeerList(){
    const [beersTypes, setBeersTypes] = useState()

    const HandleButton = () => {
        fetch('https://api.sampleapis.com/beers/stouts')
        .then(res => res.json())
        .then(data => setBeersTypes(data))
        .catch(x => console.error(x))
    }

    return(
        <section className="beer-types">
            
            {!beersTypes
            ? (
                <div> <p>La bière, c'est la vie</p>
                 <button onClick={() => HandleButton()}>Beer's List</button>
                </div>
            )
            : beersTypes.map(singleType => {
                return (
                    <BeerListComponent
                    title={singleType.title}
                    description={singleType.de}
                    />
                )
            })
            }
        </section>
    )
}