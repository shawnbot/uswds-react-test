import React, { Component } from 'react';

import Wrapper from './Wrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {title: 'Section one', text: 'This is the first section.'},
      ],
      stack: [
        {title: 'Section two', text: 'This is the second section.'},
        {title: 'Section three', text: 'This is the third section.'},
        {title: 'Section four', text: 'This is the fourth section.'},
        {title: 'Section five', text: 'This is the fifth section.'},
        {title: 'Section six', text: 'This is the sixth section.'},
        {title: 'Section seven', text: 'This is the seventh section.'},
      ],
    };
  }

  addItem() {
    let {items, stack} = this.state;
    items.push(stack.shift());
    this.setState({items, stack});
  }

  restart() {
    let {items, stack} = this.state;
    stack = items.concat(stack);
    items = [stack.shift()];
    this.setState({items, stack});
  }

  render() {
    const {stack, items} = this.state;
    return (
      <Wrapper>
        <p>
          <button disabled={stack.length === 0}
            onClick={this.addItem.bind(this)}>
            Add an item
          </button>
          <button onClick={this.restart.bind(this)}>
            Start over
          </button>
        </p>
        <ul className="usa-accordion usa-accordion-bordered" aria-multiselectable="true">
          {items.map((item, i) => {
            const id = item.id || `item${i}`;
            return (
              <li key={i}>
                <button className="usa-accordion-button"
                  aria-expanded="false" aria-controls={id}>
                  {item.title}
                </button>
                <div id={id} className="usa-accordion-content">
                  <p>{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    );
  }
}

export default App;
