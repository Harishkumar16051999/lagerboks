import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class MoreInfoAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title
        className='text-primary text-center'
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          More Info
        </Accordion.Title>
        <Accordion.Content className='text-left py-2 px-3' active={activeIndex === 1}>
          <div>
            <h6 class="fw-500 text-primary mb-1">Description</h6>
            <p>M3 may have deviations as the height in our warehouses varies. Feel free to contact us for specific information about your storage room. Total volume: Approx. 4.1 m³</p>
          </div>
        </Accordion.Content>
      </Accordion>
    )
  }
}