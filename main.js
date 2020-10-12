import { createElement, render, Component } from './toy-react';

class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

let html = <MyComponent class="my-component">
  <div class="a">
    <div>abc</div>
  </div>
</MyComponent>;

render(html, document.getElementById('toy-react'));