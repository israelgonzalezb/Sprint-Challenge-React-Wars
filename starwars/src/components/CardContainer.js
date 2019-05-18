import React from 'react';

class CardContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  characters = () => {
    return this.props.characters.map(x=>{
    return <div>{x.name}</div>;
      })
  }
  
  render() {
    return (
    <div>{this.characters()}</div>
    )
  }
  
}

export default CardContainer;