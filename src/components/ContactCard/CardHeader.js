import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'

class CardHeader extends React.Component {
  state = {
    isFavourite: this.props.isFavourite,
    id: this.props.id
  }
  toggleState = () => {
    this.setState({ isFavourite: !this.state.isFavourite })
  };
  render() {
    const { id, isFavourite } = this.state
    return (
      <div className='contact-card__header'>
        <i className='contact-card__icon'>
          <Icon
            onClick={this.toggleState}
            icon={isFavourite ? 'favourite' : 'notFavourite'}
            sizeBox='15px'></Icon>
        </i>
        <div className='contact-card--show-on-hover'>
          <Link to={`/edit/${id}`}>
            <i className='contact-card__icon'>
              <Icon icon='edit' sizeBox='15px'></Icon>
            </i>
          </Link>
          <i className='contact-card__icon'>
            <Icon icon='trash' sizeBox='15px'></Icon>
          </i>
        </div>
      </div>
    )
  }
}
export default CardHeader