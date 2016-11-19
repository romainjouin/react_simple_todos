import React 	from 'react'					;
import { Component , PropTypes} 	from 'react'					;
import Task 					from './Task.jsx'				;
import {createContainer}		from 'meteor/react-meteor-data'	;
import {Tasks} 					from '../api/tasks.js'			; 

/*=====================================
		 App component 
		 represents the whole app
=====================================*/
//export 		default 
class 		App 
extends 	Component 
{
  getTasks() {
				liste_tasks =[	{ _id: 1, text: 'This is task 1' },
								{ _id: 2, text: 'This is task 2' },
								{ _id: 3, text: 'This is task 3' }];
				return liste_tasks;
			}
 
  renderTasks() {
				taches = this.props.tasks;
	//			taches = this.getTasks();

	/*			taches =[	{ _id: 1, text: 'This is task 1' },
								{ _id: 2, text: 'This is task 2' },
								{ _id: 3, text: 'This is task 3' }];*/
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
/*export default createContainer(
				() =>  {
							requete = Tasks.find({});
							values 	= requete.fetch();
							json 	= {tasks : values}
							return json;
						},
					App
		);*/
export default createContainer(
			() => {
					requete = Tasks.find({});
					values 	= requete.fetch();
					json 	= {tasks:values}; 
					return json;
					}, 
				App
	);
