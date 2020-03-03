import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={profile} alt="profile-pic" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Talha. I'm a software engineer</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Karachi, Pakistan</p>
            <p>My favourite langauage is C#</p>
            <div>
              <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
