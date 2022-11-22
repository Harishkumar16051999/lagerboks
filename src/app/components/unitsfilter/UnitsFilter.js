import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react';
import UnitsRangeSlider from '../unitsrangeslider/UnitsRangeSlider'

export default class UnitsFilter extends Component {
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
            <Accordion className='card-boxshadow'>
                <Accordion.Title
                    className='py-3 px-2 card-border-bottom fw-600'
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Building
                </Accordion.Title>
                <Accordion.Content className='py-2 px-3 card-border-bottom' active={activeIndex === 1}>
                    <div>
                        <ul>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />Building 1</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />Building 2</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />Building 3</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />Building 4</li>
                            <li><input className='mr-1' type="checkbox" />Building 5</li>
                        </ul>
                    </div>
                </Accordion.Content>

                <Accordion.Title
                    className='py-3 px-2 card-border-bottom fw-600'
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Unit Type
                </Accordion.Title>
                <Accordion.Content className='py-2 px-3 card-border-bottom' active={activeIndex === 2}>
                    <div>
                        <ul>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />Small</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />Medium</li>
                            <li><input className='mr-1' type="checkbox" />Large</li>
                        </ul>
                    </div>
                </Accordion.Content>

                <Accordion.Title
                    className='py-3 px-2 card-border-bottom fw-600'
                    active={activeIndex === 3}
                    index={3}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Dimensions
                </Accordion.Title>
                <Accordion.Content className='py-2 px-3 card-border-bottom' active={activeIndex === 3}>
                    <div>
                        <h6 className='fw-600 mb-2'>SMALL</h6>
                        <ul>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x8x8</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x9x9</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x8x8</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x9x9</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x8x8</li>
                            <li><input className='mr-1' type="checkbox" />10x9x9</li>
                        </ul>
                        <a href="javascript:void(0);" className='text-success text-right d-block' onClick={this.props.modal}>MORE</a>
                    </div>
                </Accordion.Content>

                <Accordion.Title
                    className='py-3 px-2 card-border-bottom fw-600'
                    active={activeIndex === 4}
                    index={4}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Price Range
                </Accordion.Title>
                <Accordion.Content className='py-2 px-3 card-border-bottom' active={activeIndex === 4}>
                    <div>
                        <UnitsRangeSlider />
                    </div>
                </Accordion.Content>

                <Accordion.Title
                    className='py-3 px-2 card-border-bottom fw-600'
                    active={activeIndex === 5}
                    index={5}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Amenity
                </Accordion.Title>
                <Accordion.Content className='py-2 px-3 card-border-bottom' active={activeIndex === 5}>
                    <div>
                        <h6 className='fw-600 mb-2'>SMALL</h6>
                        <ul>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x8x8</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x9x9</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x8x8</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x9x9</li>
                            <li className='mb-2'><input className='mr-1' type="checkbox" />10x8x8</li>
                            <li><input className='mr-1' type="checkbox" />10x9x9</li>
                        </ul>
                        <a href="javascript:void(0);" className='text-success text-right d-block' onClick={this.props.modal}>MORE</a>
                    </div>
                </Accordion.Content>
            </Accordion>
        )
    }
}