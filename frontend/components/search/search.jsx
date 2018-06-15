import React from 'react';
import SearchIndex from './search_index';


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search_keyword: ''
    }

    this.clearSearch = this.clearSearch.bind(this);
  }

  update() {
    return e => this.setState({
      search_keyword: e.currentTarget.value
    }, () => this.props.searchStocks(this.state.search_keyword))
  }


  clearSearch(){
    this.setState({
      search_keyword: ''
    })
  }

  render() {
    return (
      <div className="search-block">
      <input type="text"
        value={this.state.search_keyword}
        onChange={this.update()}
        id="searchbar"
        className="login-input"
        placeholder="Search stock name or symbol"
        autoComplete="off"
      />
    <SearchIndex stockslist = {this.props.stockslist}
      searchKeyword = {this.state.search_keyword}
      clearSearch = {this.clearSearch}
      />

  </div>
    )
  }
}


export default Search;
