import {useState} from 'react';
import OpinionButtons from './OpinionButtons';
import CommentButton from './CommentButton';

function Info({videoObj, isShown, toggleComments}){
    const [upvotes, setUpvotes] = useState(videoObj.upvotes);
    const [downvotes, setDownvotes] = useState(videoObj.downvotes);

    function handleOpinionButtonClick(e){
        const key = e.target.name
        key==="upvotes"? setUpvotes(upvotes + 1) : setDownvotes(downvotes + 1);
    }

    return(
        <div>
            <h1>{videoObj.title}</h1>
            <p>{videoObj.views} Views | Uploaded {videoObj.createdAt}</p>
            <OpinionButtons 
                upvotes={upvotes}
                downvotes={downvotes}
                onButtonClick={handleOpinionButtonClick}
            />
            <CommentButton 
                isShown={isShown}
                toggleComments={toggleComments}
            />
        </div>
    )
}

export default Info;