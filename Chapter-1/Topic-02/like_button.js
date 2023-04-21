'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this  ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

 document.querySelectorAll('#mybutton').forEach(
   domContainer => {
    const root = ReactDOM.createRoot(domContainer);
    const commentID = parseInt(domContainer.dataset.commentid,10); 
    root.render(
      
      e(LikeButton,{commentID: commentID })
    
    );


   } );
