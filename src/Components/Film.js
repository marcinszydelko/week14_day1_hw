import React, {Component} from 'react';

class Film extends Component{

   render() {
       return (
            <a href={this.props.url} target="_blank">
                <h3>
                    {this.props.children}
                </h3>
            </a>
       )
   }
}

export default Film;