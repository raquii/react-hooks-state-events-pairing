import video from "../data/video.js";
import {useState} from 'react';
import Info from './Info';
import CommentsTable from "./CommentsTable";

function App() {
  const [isShown, setIsShown] = useState(true);


  function toggleComments(){
    setIsShown(isShown=> !isShown);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <Info 
        videoObj ={video}
        isShown={isShown}
        toggleComments={toggleComments}

      />
      {isShown && <CommentsTable 
        comments={video.comments}
      />}
    </div>
  );
}

export default App;
