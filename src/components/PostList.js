import React, { Component } from 'react'
const rootStyle = {
    margin: "0 auto",
    width: "max-content",
    padding: "0 10px",
    color:"purple",
    fontFamily:"Verdana"
  };
  const cardStyle = {
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    padding: "12px",
    marginBottom: "10px",
    textAlign: "center",
    backgroundColor: "#fafafa",
  };

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const url = 'https://finalspaceapi.com/api/v0/character/?sort=desc';
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({ posts: posts })
    }
    
    render() {
        const { posts } = this.state;
        
        return (
        <div className="root" style={rootStyle}>
        {posts.map((character) => (
          <div className="card" style={cardStyle} key={character.id}>
            <div className="card--image">
              <img src={character.img_url} alt={character.name} />{" "}
            </div>
            <div className="card--title">{character.name}</div>
            <div className="card--title">{character.gender}</div>
          {/* <div className="card--text">{character.species}</div>*/}
          </div>
        ))}
      </div>
            
        )
    }
}

export default PostList