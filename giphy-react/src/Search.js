import React, { Component } from 'react';

class Search extends Component {
    render(){
        const Search = this.props.gifs.map((image)  => {
            console.log(image)
            console.log(image.images.fixed_height.url)
            return (
                <div>
                <img 
                    key={image.id}
                    src={image.images.fixed_height.url}
                />
                </div>
            );
            } ) 
        return (
            <div>
                <ul>
                    {Search}
                </ul>
            </div>
        )
    }
}

export default Search;