import React 				from 'react'					;
import { Component} 		from 'react'					;
import { PropTypes} 		from 'react'					;
import Task 				from './Task.jsx'				;
import {createContainer}	from 'meteor/react-meteor-data'	;
import {Tasks} 				from '../api/tasks.js'			; 

/*=====================================
		 App component 
		 represents the whole app
=====================================*/
class 		App 
extends 	Component 
{
  renderTasks() {
					taches = this.props.tasks;
					return taches.map(
							(task) => (<Task key={task._id} task={task} />)	
					);
				  }
 
  render() {
				return (<div className="container">
							<header>
							  <h1>Todo List</h1>
							</header>
							<ul>
							  {this.renderTasks()}
							</ul>
							  </div>
					);
			  }
}
/*=====================================
				propTypes
=====================================*/
App.propTypes = {
	tasks	 : PropTypes.array.isRequired,
};

/*=====================================
			Container
=====================================*/
local_taches = () => {
					requete = Tasks.find({});
					values 	= requete.fetch();
					json 	= {tasks:values}; 
					return json;
					} 
export default 
createContainer(	local_taches, App	);
