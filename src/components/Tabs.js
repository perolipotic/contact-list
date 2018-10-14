import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Tabs extends Component {
  state = {
    value: this.props.fav ? 'fav' : 'all'
  }
  tabs = [
    { label: 'All contacts', value: 'all' },
    { label: 'My Favorites', value: 'fav' }
  ]
  isActive(value) {
    if (this.state.value === value) {
      return 'tabs__item--active'
    }
    else return ''
  }

  setTab = (value) => {
    this.setState({ value })
  }
  render() {
    return (
      <div className="tabs">
        {this.tabs.map((tab, index) =>
          (<Link
            to={`${tab.value === 'all' ? '/' : 'fav'}`}
            onClick={() => this.setTab(tab.value)}
            className={`tabs__item ${this.isActive(tab.value)}`}
            key={index}>
            {tab.label}
          </Link>)
        )}
      </div>
    )
  }
}

export default Tabs
