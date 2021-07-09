import React, { useState} from "react";
import { Container, Divider, Dropdown, Grid, Header, Input, Segment} from "semantic-ui-react"
import { massConversions } from "../utils/unitConversions";

const Unit = () => {
    const [fromUnit, setFromUnit] = useState('')
    const [toUnit, setToUnit] = useState('')
    const [fromValue, setFromValue] = useState(0)
    const [toValue, setToValue] = useState(0)

    const handleFormChange = (e) => {
        setFromValue(e.this.value)
    }

    const options = [
        {key: 'kg', value: 'kg', text: 'kilogram(s)'},
        {key: 'lb', value: 'lb', text: 'pound(s)'},
        {key: 'st', value: 'st', text: 'stone(s)'},
        {key: 'ton', value: 'ton', text: 'ton(s)'}
    ]

    const massConvert = () => {
        setToValue(massConversions(fromUnit, toUnit, fromValue))
    }
    return(
        <Container>
            <Header as="h2">Select two units to convert between</Header>
            <Segment>
                <Grid columns={2}>
                    <Grid.Column>
                        <Dropdown
                            placeholder="From"
                            id="from"
                            selection
                            search
                            options={options}
                            onChange={setFromUnit(options.value)}
                        >   
                        </Dropdown>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            placeholder="To"
                            id="to"
                            selection
                            search
                            options={options}
                            onChange={setToUnit(options.value)}
                        >   
                        </Dropdown>
                    </Grid.Column>    
                </Grid>
                <Divider vertical>To</Divider>
            </Segment>
            <Segment>
                <Input 
                    placeholder="Original Value"
                    id="original"
                    value={fromValue}
                    onChange={[
                        handleFormChange(), 
                        massConvert()
                    ]}
                />
                <Input 
                    placeholder="Converted Value"
                    id="convert"
                    value={toValue}
                />
                <Divider vertical>=</Divider>
            </Segment>
            
        </Container>
    )
}

export default Unit;