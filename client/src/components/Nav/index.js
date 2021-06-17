import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react"

export default class MenuExampleSecondary extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Button as= {Link} to="/">
                Home
            </Button>
          </Menu.Item>
         
          <Menu.Menu position='right'>
            <Menu.Item
                name='unit'
                active={activeItem === 'unit'}
                onClick={this.handleItemClick}
            >
                <Button as= {Link} to="/unit">
                    Unit Conversion
                </Button>
            </Menu.Item>
            <Menu.Item
                name='static'
                active={activeItem === 'static'}
                onClick={this.handleItemClick}
            >
                <Button as= {Link} to="/static">
                    Statics
                </Button>
            </Menu.Item>  
          </Menu.Menu>
        </Menu>
      )
    }
}
