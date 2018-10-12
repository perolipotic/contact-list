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
          <i className='contact-card__icon'>
            <Link to={`/edit/${id}`}>
              <Icon icon='edit' sizeBox='15px'></Icon>
            </Link>
          </i>
          <i className='contact-card__icon'>
            <Icon icon='trash' sizeBox='15px'></Icon>
          </i>
        </div>
      </div>
    )
  }
}
export default CardHeader