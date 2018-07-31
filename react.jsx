import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onMount: undefined,
      text: props.text,
    };
  }

  componentDidMount() {
    this.state.onMount = true;
  }

  render() {
    const { onMount, text } = this.state;
    return (
      <h1>
        { text }
        {
          onMount ? ('Mounted') : undefined
        }
      </h1>
    );
  }
}

export default App;
