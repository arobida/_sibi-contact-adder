import React, { Component } from 'react';
import { Button, Icon, Checkbox, Form, Input, Radio, Select, TextArea, Segment } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class AddContact extends Component {
    // Input contact
    constructor() {
        super()
        this.state = {
            name: '',
            gender: '',
            submittedName: '',
            submittedGender: ''
        }
    }

    handleChange = (e, { name, value }) => this.setState({
        [name]: value
    })

    handleSubmit = () => {
        const { name, gender } = this.state

        this.setState({ submittedName: name, submittedGender: gender, name: '', gender: '' })
    }

    render() {
        const { name, gender, submittedName, submittedGender } = this.state
        return (
            <Segment raised style={{margin:'0 auto',width:'65%'}}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Name' name='name' value={name} placeholder='First name' onChange={this.handleChange}/>
              <Form.Field control={Select} label='Gender' name='gender' value={gender} options={options} placeholder='Gender'onChange={this.handleChange}/>
            </Form.Group>
            <Form.Field control={Button} color="blue">Submit</Form.Field>
          </Form>
         <div style={{color:'black'}}> 
         <strong>onChange:</strong>
        <pre>{this.state.name}</pre>
        <pre>{this.state.gender}</pre>
        <strong>onSubmit:</strong>
        <pre>{ this.state.submittedName}</pre>
        <pre>{ this.state.submittedGender}</pre>
        </div>
        </Segment>
        );
    }
}

export default AddContact
