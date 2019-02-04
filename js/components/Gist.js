var Gist = React.createClass({

    render: function() {
        return (
            <div style={{color:'white', fontSize:18, fontWeight:'bold',}}>
                {this.props.username}'s last Gist is <a href={this.props.url} target="_blank">here</a>
            </div>
        );
    }
});
export default Gist;