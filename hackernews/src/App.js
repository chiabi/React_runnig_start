import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: list
      list,
      // 프로퍼티 초기값을 설정한다.
      searchTerm: '',
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onSearchChange(e) {
    this.setState({searchTerm: e.target.value})
  }
  onDismiss(id) {
    // 이벤트가 발생한 item의 id랑 같지 않은 id의 데이터만 다시 리스트에 담는다.
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    // (wrong!!!) this.state.list = updatedList
    this.setState({list: updatedList});
  }
  render() {
    return (
      <div className="APP">
        <form>
          <input 
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        {this.state.list.map(item => 
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <button 
              onClick={() => this.onDismiss(item.objectID)} 
              type="button"
            >dismiss</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
