import React, {Component} from 'react'
class AddUnicorn extends Component {

state = {
    name: null,
    age: null,
    color: null
}
handleChange = (e) => {
    
    this.setState({
       [e.target.id]: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
this.props.addUnicorn(this.state);
}
    render(){
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>

                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                
                    <label htmlFor="name">Color:</label>
                    <input type="text" id="color" onChange={this.handleChange}/>
                
                <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddUnicorn