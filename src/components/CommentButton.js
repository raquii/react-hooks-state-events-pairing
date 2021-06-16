function CommentButton({isShown, toggleComments}){
    return(
        <div>
            <button onClick={toggleComments}>
                {isShown? "Hide Comments" : "Show Comments"}
            </button>
        </div>
    )
}

export default CommentButton;