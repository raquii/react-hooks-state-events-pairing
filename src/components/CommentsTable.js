import Comment from "./Comment";

function CommentsTable({comments}){

    const commentsCard = comments.map(commentObj=>{
        return (
            <Comment 
                key={commentObj.id} 
                user={commentObj.user} 
                comment={commentObj.comment}
            />
        );
    });

    return(
        <div>
            <h2>{comments.length} Comments</h2>
            {commentsCard}
        </div>
        
    )
}

export default CommentsTable;