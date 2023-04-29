import React from "react";

function Discussion() {
  return <section id="Discussion">
   <div className="Discussion-heading">
        <h2>JOIN THE DISCUSSION</h2>
      </div>

      <div className="discussion-form">
        <div className="empty-img"></div>
        <form>
          <textarea placeholder="What's on your mind?"></textarea>
          <br></br>
          <button>Post</button>
        </form>
      </div>

  </section>
}

export default Discussion;