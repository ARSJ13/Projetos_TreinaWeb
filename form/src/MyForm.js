import React, {Component} from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'',
            fruit:'',
            message:''
        }

        this.fruits = [
            {'name': 'Apple', 'value': 'apple'},
            {'name': 'Banana', 'value': 'banana'},
            {'name': 'Orange', 'value': 'orange'},
        ];

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({
            name: event.target.value
        })
    }

    render(){
        return(
            <form>
                <label>
                    Name:
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                </label>
                <select value={this.state.fruit}>
                    {
                        this.fruits.map(fruit => <option value={fruit.value} >{fruit.name}</option>)
                    }
                </select>
                <label>
                    Message:
                    <textarea value={this.state.message}/>
                </label>
                <input type='submit' value='Enviar'/>
                {this.state.name}
            </form>
        )
    }
}

export default MyForm;