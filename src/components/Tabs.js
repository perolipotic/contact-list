import React, { Component } from 'react'

class Tabs extends Component {
  state = {
    value: 'all'
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
          (<p
            onClick={() => this.setTab(tab.value)}
            className={`tabs__item ${this.isActive(tab.value)}`}
            active={this.state.value}
            key={index}>
            {tab.label}
          </p>)
        )}
      </div>
    )
  }
}

export default Tabs
