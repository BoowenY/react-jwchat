import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import { toClasses } from '../../utils/toClass'

const emojiList = [
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐คฃ',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐ฅฐ',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐คช',
  '๐คจ',
  '๐ง',
  '๐ค',
  '๐',
  '๐คฉ',
  '๐ฅณ',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐ฃ',
  '๐',
  '๐ซ',
  '๐ฉ',
  '๐ฅบ',
  '๐ข',
  '๐ญ',
  '๐ค',
  '๐ ',
  '๐ก',
  '๐คฌ',
  '๐คฏ',
  '๐ณ',
  '๐ฅต',
  '๐ฅถ',
  '๐ฑ',
  '๐จ',
  '๐ฐ',
  '๐ฅ',
  '๐',
  '๐ค',
  '๐ค',
  '๐คญ',
  '๐คซ',
  '๐คฅ',
  '๐ถ',
  '๐',
  '๐',
  '๐ฌ',
  '๐',
  '๐ฏ',
  '๐ฆ',
  '๐ง',
  '๐ฎ',
  '๐ฒ',
  '๐ฅฑ',
  '๐ด',
  '๐คค',
  '๐ช',
  '๐ต',
  '๐ค',
  '๐ฅด',
  '๐คข',
  '๐คฎ',
  '๐คง',
  '๐ท',
  '๐ค',
  '๐ค',
]

export default class EmojiPopover extends Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    addEventListener('click', (e) => {
      if (e.target.getAttribute('datatype') === 'emoji') {
        this.switchEmojiModal(true)
      } else {
        this.switchEmojiModal(false)
      }
    })
  }

  switchEmojiModal = (vis = null) => {
    if (vis !== null) {
      this.setState({ visible: vis })
    } else {
      this.setState({ visible: !this.state.visible })
    }
  }

  iconClickHandle = (emoji) => {
    this.props.onSelect(emoji)
  }

  render() {
    return (
      <div className={style.content}>
        <div
          className={style.emoji_wrapper}
          style={{ display: !this.state.visible && 'none' }}>
          {emojiList.map((emoji) => (
            <span
              onClick={this.iconClickHandle.bind(this, emoji)}
              className={style.emoji_item}
              datatype={emoji}
              key={emoji}>
              {emoji}
            </span>
          ))}
        </div>
        <div
          className={toClasses([style.tool_icon, style.emoji])}
          datatype="emoji"></div>
      </div>
    )
  }
}

EmojiPopover.propTypes = {
  onSelect: PropTypes.func.isRequired,
}
