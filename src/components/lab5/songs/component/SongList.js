import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../action";

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="">
                        <button className="" onClick={() => this.props.selectSong(song)}>
                            select
                        </button>
                    </div>
                    <div>{song.title}</div>
                </div>
            )
        });
    }
    render(){
        return <div>{this.renderList()}</div>
    }
}
const mapStateToProps = (state) => {
    return {songs: state.songs};
}
export default connect(mapStateToProps, {selectSong})(SongList);