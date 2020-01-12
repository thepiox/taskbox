import React from 'react';
import Task from '../Task/Task';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../../lib/redux';
import { bindActionCreators, Dispatch } from 'redux';

interface TaskListProps {
	loading?: any;
	tasks?: any;
	onPinTask?: any;
	onArchiveTask?: any;
}

const TaskListContainer: React.FC<TaskListProps> = ({ loading = false, tasks, onPinTask, onArchiveTask }) => {
	const events = {
		onPinTask,
		onArchiveTask,
	};

	const LoadingRow = (
		<div className="loading-item">
			<span className="glow-checkbox" />
			<span className="glow-text">
				<span>Loading</span> <span>cool</span> <span>state</span>
			</span>
		</div>
	);

	if (loading) {
		return (
			<div className="list-items">
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
			</div>
		);
	}

	if (tasks.length === 0) {
		return (
			<div className="list-items">
				<div className="wrapper-message">
					<span className="icon-check" />
					<div className="title-message">You have no tasks</div>
					<div className="subtitle-message">Sit back and relax</div>
				</div>
			</div>
		);
	}

	const tasksInOrder = [
		...tasks.filter((t: any) => t.state === 'TASK_PINNED'),
		...tasks.filter((t: any) => t.state !== 'TASK_PINNED'),
	];

	return (
		<div className="list-items">
			{tasksInOrder.map(task => (
				<Task key={task.id} task={task} {...events} />
			))}
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
	{
		onArchiveTask: (id) => dispatch(archiveTask(id)),
		onPinTask: (id) => dispatch(pinTask(id)),
	},
	dispatch
);

const mapStateToProps = ({ tasks }: any) => ({
	tasks: tasks.filter((t: any) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
