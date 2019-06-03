import React from 'react'

function Home () {
    return (
        <p>Home</p>
    )
}
function About () {
    return (
        <p>about</p>
    )
}
function Inbox () {
    return (
        <p>Inbox</p>
    )
}

function App () {

  getInitialState() {
    return {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default:      Child = Home;
    }

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    )
  }
}

export default App