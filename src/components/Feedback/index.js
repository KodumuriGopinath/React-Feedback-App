// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onEmojiButtonClicked = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {resources} = this.props
    const {isClicked} = this.state
    console.log(isClicked)

    return (
      <div className="bg-container">
        <div className="card-container">
          {isClicked ? (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <div>
                <ul className="total-list-container">
                  {resources.emojis.map(eacthItem => (
                    <li className="list-item" key={eacthItem.id}>
                      <div className="emoji-and-name">
                        <img
                          className="emoji-image"
                          src={eacthItem.imageUrl}
                          alt={eacthItem.name}
                          onClick={this.onEmojiButtonClicked}
                        />
                        <p>{eacthItem.name}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="second-card">
              <img
                className="love-image"
                src={resources.loveEmojiUrl}
                alt="love emoji"
              />
              <h2 className="love-heading">Thank You!</h2>
              <p className="description">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
