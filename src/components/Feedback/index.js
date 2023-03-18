// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  render() {
    const {resources} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>How satisfied are you with our customer support performance?</h1>
          <div>
            <ul className="total-list-container">
              {resources.emojis.map(eacthItem => (
                <li className="list-item" key={eacthItem.id}>
                  <div className="emoji-and-name">
                    <img
                      className="emoji-image"
                      src={eacthItem.imageUrl}
                      alt=""
                      onClick="display('sectionTwo')"
                    />
                    <p>{eacthItem.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
