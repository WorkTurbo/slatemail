global.document= window.document;
global.navigator = window.navigator;
var $ = require('jquery');
var Q = require('Q');
var MessageView = require('../modules/messageView.js');
var dbHandler = new window.dbHandler();
var React = require('react');

var ProjectListReact = React.createClass({displayName: "ProjectListReact",
	getInitialState: function(){
		return {data:[]};
	},
	render: function(){
		var project_item_nodes = this.props.data.map(function(project_names){
				return (
					React.createElement(ProjectItem, null)
				);
			});
		return (
			React.createElement("div", {className: "project_list"}, 
				project_item_nodes
			)
			);
	}
});
var ProjectItem = React.createClass({displayName: "ProjectItem",
	render: function(){
		var project_data = this.props.data;
		return (
			React.createElement("div", {className: "project_item"})
		);
	}
});

function ProjectList(container){
	this.container = container;
	this.dbHandler = new dbHandler();
	this.render();
}
ProjectList.prototype = {
	render:function(){
		this.dbHandler.listProjects()
			.then(function(project_names){
				console.log(project_names);
				// React.render(<ProjectListReact data="{projects}"/>, this.container[0]);
			});
	}
};