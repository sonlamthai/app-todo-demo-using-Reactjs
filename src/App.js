import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import arrdown from './image/icon/arrow-down.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [
        { title: "Đi Làm", isComplete: false },
        { title: "Đi Chơi", isComplete: false },
        { title: "Đi Ngủ", isComplete: false }

      ],
      inputValue: ""
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    let toDoList = this.state.toDoList
    let index = toDoList.indexOf(item);
    return (event) => {
      this.setState({
        toDoList: [
          ...toDoList.slice(0, index),
          {
            ...item, isComplete: !item.isComplete
          },
          ...toDoList.slice(index + 1)
        ]

        // toDoList: toDoList.map((action) => {
        //   console.log('aa');
        //   return action !== item ? {...action} : {...action, isComplete: !action.isComplete};
        // })
      })
    }
  }

  onKeyUp(event) {
      let toDoList = this.state.toDoList;
      let text = event.target.value;
      if (event.keyCode === 13) {
        if (!text) {
          return
        }

        text = text.trim();
        if (!text) {
          return;
        }

        this.setState({
          inputValue: "",
          toDoList: [
            ...toDoList,
            { title: text, isComplete: false }
          ]
        })

      }
    
  }

  onChange(event) {
    let text = event.target.value;
    this.setState({
      inputValue: text
    })
  }



  render() {
    const toDoList = this.state.toDoList;
    let inputValue = this.state.inputValue;
    return (
      <div className="App">
        <div className="Header">
          <img src={arrdown} width={32} height={32} />
          <input type="text"
            placeholder="Add the new item"
            value={inputValue}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp} />
        </div>
        {toDoList.length && toDoList.map((item, index) =>
          <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />
        )
        }

      </div>
    );
  }
}


export default App;
