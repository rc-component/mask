import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Mask from '../index';

const boxStyles = {
  width: 100,
  height: 100,
  position: 'relative'
}

storiesOf('Mask', module)
  .add('mask shown', () => {
    return (
      <div style={{...boxStyles}}>
        <Mask show={true}/>
      </div>
  )})
  .add('toggle mask', () => {
    var Foo = React.createClass({
      getInitialState: function () {
        return {
          mask: false
        }
      },
      toggleOverlay: function () {
        this.setState({
          mask: !this.state.mask
        })
      },
      render: function () {
        return (
          <div>
            <button onClick={this.toggleOverlay}>toggle</button>
            <div style={{...boxStyles, width: 200}} onClick={action('click')}>
              <Mask
                show={this.state.mask}
                style={{zIndex: 99, backgroundColor: 'rgba(0,0,0,0.2)'}}
                delay={200}/>
              <div>inner</div>
            </div>
          </div>
        )
      }
    })
    return React.createElement(Foo)
  })
