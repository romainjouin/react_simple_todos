import React 				from 'react'					;
import { Component} 		from 'react'					;
import { PropTypes} 		from 'react'					;
import Task 				from './Task.jsx'				;
import {createContainer}	from 'meteor/react-meteor-data'	;
import {Tasks} 				from '../api/tasks.js'			; 
//import ReactDOM 			from 'react-dom'				;
import ReactDOM from 'react-dom';
/*=====================================

		 App component 
		 represents the whole app
=====================================*/
class 		App 
extends 	Component 
{
  handleSubmit(event) 
	{
			event.preventDefault();
			const ref		= this.refs.textInput; 
			const node		= ReactDOM.findDOMNode(ref);
			const text 		= node.value.trim();
			const to_insert = { 	text,  
									createdAt: new Date(), // current time
								}
		   Tasks.insert( to_insert  );
		 
			node.value = '';
  	}
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
								<form 	className	=	"new-task" 
										onSubmit	=	{this.handleSubmit.bind(this)} >
											<input	type		=	"text"
													ref			=	"textInput"
													placeholder	=	"Type to add new tasks"
											/>
								</form>
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
					filter 	= {};
					sorter	= {sort : {createdAt : -1}};
					requete = Tasks.find(filter, sorter);
					values 	= requete.fetch();
					json 	= {tasks:values}; 
					return json;
					} 
export default 
createContainer(	local_taches, App	);
