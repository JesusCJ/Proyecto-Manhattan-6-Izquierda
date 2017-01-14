
var React = require('react');

var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');



var App = React.createClass({



	getInitialState(){



		// Extract the favorite locations from local storage

		var favorites = [];

		if(localStorage.favorites){
			favorites = JSON.parse(localStorage.favorites);
		}

		// Nobody would get mad if we center it on Paris by default

		return {
			favorites: favorites,
			currentAddress: 'Paris, France',
			mapCoordinates: {
				lat: 40.4165000,
				lng: -3.7025600
			}
		};
	},

	toggleFavorite(address){

		if(this.isAddressInFavorites(address)){
			this.removeFromFavorites(address);
		}
		else{
			this.addToFavorites(address);
		}

	},

	addToFavorites(address){

		var favorites = this.state.favorites;

		favorites.push({
			address: address,
			timestamp: Date.now()
		});

		this.setState({
			favorites: favorites
		});

		localStorage.favorites = JSON.stringify(favorites);
	},

	removeFromFavorites(address){

		var favorites = this.state.favorites;
		var index = -1;

		for(var i = 0; i < favorites.length; i++){

			if(favorites[i].address == address){
				index = i;
				break;
			}

		}

		// If it was found, remove it from the favorites array

		if(index !== -1){
			
			favorites.splice(index, 1);

			this.setState({
				favorites: favorites
			});

			localStorage.favorites = JSON.stringify(favorites);
		}

	},

	isAddressInFavorites(address){

		var favorites = this.state.favorites;

		for(var i = 0; i < favorites.length; i++){

			if(favorites[i].address == address){
				return true;
			}

		}

		return false;
	},

	searchForAddress(address){
		
		var self = this;

		// We will use GMaps' geocode functionality,
		// which is built on top of the Google Maps API

		GMaps.geocode({
			address: address,
			callback: function(results, status) {

				if (status !== 'OK') return;

				var latlng = results[0].geometry.location;

				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});

			}
		});

	},

	render(){
		return (

			<div className="App">

  				<div1 className ="App-Header">
				
      			<h className= "Hea">FindOut</h>

        		</div1>
        		<div2 className ="App-Searcher">
        			<Search onSearch={this.searchForAddress} />
        		</div2>
        		
				<Map ref="child" lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
			
			</div>

		);
	}

});

module.exports = App;