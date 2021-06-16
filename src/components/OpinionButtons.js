function OpinionButtons({upvotes, downvotes, onButtonClick}){
    return(
        <>
            <button name="upvotes" onClick={onButtonClick}>{upvotes}👍</button>
            <button name="downvotes" onClick={onButtonClick}>{downvotes}👎</button>
        </>
    )    
}

export default OpinionButtons;