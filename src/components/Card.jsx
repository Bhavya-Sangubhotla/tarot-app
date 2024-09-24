import react from "react";

function Card(props){
    

    function handleClick(){
        props.Clicked();
    }
    return(
        <div className="card-holder">
            <button className="card-button" onClick={handleClick}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M2Nnlu84RLriAoueaxcTvUtKBAj7rpBxaw&s" alt="tarot-card.img" />
            </button>
        </div>
    )
}
export default Card;