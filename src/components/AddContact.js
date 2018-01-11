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
            email: '',
            submittedName: '',
            submittedGender: '',
            submittedEmail: ''
        }
    }

    handleChange = (e, { name, value }) => this.setState({
        [name]: value
    })

    handleSubmit = () => {
        const { name, gender, email } = this.state

        this.setState({ submittedName: name, submittedGender: gender, submittedEmail: '', name: '', gender: '', email: '' })
    }

    render() {
        const { name, gender, email, submittedName, submittedGender, submittedEmail } = this.state
        return (
            <Segment raised style={{margin:'0 auto',width:'65%'}}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Name' name='name' value={name} placeholder='First name' onChange={this.handleChange}/>
              <Form.Field control={Select} label='Gender' name='gender' value={gender} options={options} placeholder='Gender'onChange={this.handleChange}/>
              <Form.Field control={Input} label='Email' name='email' value={email} placeholder='Email address' onChange={this.handleChange}/>
            </Form.Group>
            <Form.Field control={Button} color="blue">Submit</Form.Field>
          </Form>
         <div style={{color:'black'}}> 
         <strong>onChange:</strong>
        <p>{this.state.name}</p>
        <p>{this.state.gender}</p>
        <p>{this.state.email}</p>
        <strong>onSubmit:</strong>
        <p>{ this.state.submittedName}</p>
        <p>{ this.state.submittedGender}</p>
        <p>{ this.state.submittedEmail}</p>
        </div>
        </Segment>
        );
    }
}

export default AddContact
