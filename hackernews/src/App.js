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

// filter 메서드에 searchTerm을 전달하고 조건을 확인하는 함수를 반환하는 함수
// 고차함수
const inSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  // this.state를 초기화하는 클래스 생성자를 추가한다.
  constructor(props) {
    super(props);
    this.state = {
      // list: list
      list,
      // 프로퍼티 초기값을 설정한다.
      searchTerm: '',
    }
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onSearchChange(e) {
    // e는 합성이벤트이다.
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
    const {searchTerm, list} = this.state;
    // 컴포넌트를 분리하고 사용할 프로퍼티를 전달한다.
    return (
      <div className="APP">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
        search
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const {value, onChange, children} = this.props;
    return (
      <form>
        {children}
        <input 
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    ) 
  }
}

class Table extends Component {
  render() {
    const {list, pattern, onDismiss} = this.props;
    return (
      <div>
      {list.filter(inSearched(pattern)).map(item => 
        <div key={item.objectID}>
          <span><a href={item.url}>{item.title}</a></span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <button 
            onClick={() => onDismiss(item.objectID)} 
            type="button"
          >dismiss</button>
        </div>
      )}
      </div>
    )
  }
}

export default App;
