/**
 * Created by Ahmed Davis on 5/16/17.
 */
import Gist from './Gist';
import GistAddForm from './GistAddForm';

var GistBox = React.createClass({
    getInitialState: function () {
      return { gists: [] };
    },

    addGist: function(username) {
        var url = `https://api.github.com/users/${username}/gists`;
        $.get(url, function(result){
           var username = result[0].owner.login;
           var url = result[0].html_url;
           var gists = this.state.gists.concat({ username, url});

           this.setState({ gists });
        }.bind(this));
    },

    render: function() {
        var newGist = function (gist) {
            return <Gist username={gist.username} url={gist.url} style={{color:'white'}}/>
        };

        return (
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage:'url(./img/banner-1557842_1920.jpg)', color:'black'}}>
                 <div className="container text-center">
                     <h1 className="mt-0" style={{ fontSize: 65, fontFamily: 'Corben', fontWeight:'700',}}>GistBox</h1>
                     <GistAddForm onAdd={this.addGist} />
                     { this.state.gists.map(newGist) }
                 </div>
             </div>
        );
   }
});
export default GistBox;

