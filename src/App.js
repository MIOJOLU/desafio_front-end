import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'

class App extends React.Component {
  constructor(args) {
    super();
    this.state = {
      dados: []
    }
  }


  async componentDidMount(){
    const url = 'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus'
    const resp = await fetch(url)
    const info = await resp.json()
    this.setState({dados: info})
  }

  render() {
    return(
      <div> 
        <NavBar data = {this.state.dados} key={this.state.dados.id}></NavBar>
      </div>
    )
  }
}

export default App;
