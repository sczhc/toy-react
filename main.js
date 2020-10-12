import { createElement, render, Component } from './toy-react';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 1
    }
  }
  render() {
    return <div>
      <h1>my component</h1>
      <span>{this.state.a.toString()}</span>
      <button onclick={() => {this.state.a++;this.rerender();}}>add</button>
    </div>
  }
}

let html = <MyComponent class="my-component"></MyComponent>;

render(html, document.getElementById('toy-react'));