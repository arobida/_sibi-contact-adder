import React from 'react';
import { Button, Icon, Checkbox, Form, Input, Radio, Select, TextArea, Segment } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

const AddContact = () => {
    // Input contact

    return (
        <Segment raised style={{margin:'0 auto',width:'65%'}}>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='First name' placeholder='First name' />
              <Form.Field control={Input} label='Last name' placeholder='Last name' />
              <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Field control={Button} color="primary">Submit</Form.Field>
          </Form>
        </Segment>
    );
};

export default AddContact
