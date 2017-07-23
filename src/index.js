import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import Overlay from 'rc-overlay'
import Spin from 'rc-spinner'

export default class Mask extends Component {
  static defaultProps = {
    spinHeight: 30,
    spinColor: '#ffffff',
    delay: 0,
    show: false
  }
  static propTypes = {
    delay: PropTypes.number,
    show: PropTypes.bool,
    spinHeight: PropTypes.number,
    spinColor: PropTypes.string
  }
  componentDidMount() {
    var el = ReactDom.findDOMNode(this)
    this.setPosition(el)
  }
  componentDidUpdate() {
    var el = ReactDom.findDOMNode(this)
    this.setPosition(el)
  }
  setPosition(el) {
    if (el && this.props.show) {
      let div = el.children[0]
      let sh = this.props.spinHeight
      div.style.position = 'absolute'
      div.style.top = (el.clientHeight - sh)/2 + 'px'
      div.style.left = (el.clientWidth - sh)/2 + 'px'
    }
  }
  render() {
    let props = this.props
    return (
      <Overlay
        className={props.className}
        delay={props.delay}
        style={props.style}
        show={props.show}>
        {do {
          if (props.show) <Spin color={props.spinColor}/>
        }}
      </Overlay>
    )
  }
}
