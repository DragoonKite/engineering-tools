import React from "react";
import { Container, Divider, Dropdown, Grid, Header, Input, Segment} from "semantic-ui-react"

const Unit = () => {
    const options = [
        {key: 'kg', value: 'kg', text: 'kilogram(s)'},
        {key: 'lb', value: 'lb', text: 'pound(s)'},
        {key: 'st', value: 'st', text: 'stone(s)'},
        {key: 'ton', value: 'ton', text: 'ton(s)'}
    ]
    return(
        <Container>
            <Header as="h2">Select two units to convert between</Header>
            <Segment>
                <Grid columns={2}>
                    <Grid.Column>
                        <Dropdown
                            placeholder="From"
                            selection
                            search
                            options={options}
                        >   
                        </Dropdown>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            placeholder="To"
                            selection
                            search
                            options={options}
                        >   
                        </Dropdown>
                    </Grid.Column>    
                </Grid>
                <Divider vertical>To</Divider>
            </Segment>
            <Segment>
                <Input placeholder="Original Value"/>
                <Input placeholder="Converted Value"/>
                <Divider vertical>=</Divider>
            </Segment>
            
        </Container>
    )
}

export default Unit;