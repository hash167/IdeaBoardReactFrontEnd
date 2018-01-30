import React, {Component} from 'react'
import axios from 'axios'
import Idea from './Idea'
import update from 'immutability-helper'
import IdeaForm from './IdeaForm'

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null
    }
  }
  componentDidMount(){
    axios.get('http://33.33.33.33:3001/api/v1/ideas.json')
          .then(response => {
            console.log(response)
            this.setState({ideas: response.data})
          })
          .catch(error => console.log(error))
  }
  addNewIdea = ()=>{
    axios.post(
      'http://33.33.33.33:3001/api/v1/ideas',
      {idea:
        {
          title: '',
          body: ''
        }

      }
    )
    .then(response =>{
      console.log(response)
      const ideas = update(this.state.ideas, {
        $splice: [[0,0,response.data]]
      })
      this.setState({
        ideas:ideas,
        editingIdeaId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
      <button className="newIdeaButton" onClick={this.addNewIdea}>
        New Idea
      </button>
      {this.state.ideas.map((idea) => {
        if(this.state.editingIdeaId === idea.id) {
          return(<IdeaForm idea={idea} key={idea.id} />)
        } else {
          return(<Idea idea={idea} key={idea.id} />)
        }

      })}
      </div>
    )
  }
}

export default IdeasContainer
