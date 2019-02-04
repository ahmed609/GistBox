var GistAddForm = React.createClass({

    getInitialState: function() {
      return {
            username:''
      };
    },

    onChange: function(e){
        this.setState({ username: e.target.value});
    },

    addGist: function(e) {
        e.preventDefault();

        this.props.onAdd(this.state.username);
        this.setState({ username: '' });
    },



    render: function() {
        return (
          <div>
              <form classNamme="form-inline justify-content-center" onSubmit={this.addGist}>
                  <input className="form-control" value={this.state.username} onChange={this.onChange} placeholder="Enter Githib Username..." />
                  <button className="btn btn-success mt-3">View latest Gist</button>
              </form>
          </div>
        );
    }
});
export default GistAddForm;