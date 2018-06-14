import React from 'react';


class Watchlist extends React.Component {
  onOff(){
    if (this.props.onList === false) {
      return "Add To Watchlist"
    }else if (this.props.onList === true) {
      return "Remove From Watchlist"
    }
  }

  componentDidMount(){
    this.props.fetchWatchList();
  }

  render(){
    return (
      <button onClick={this.props.watchlistAction} className="addOrRemove">
      {this.onOff()}
    </button>
  )
  }
}

export default Watchlist;
