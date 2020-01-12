import React from 'react';

import TaskListContainer from './TaskList';
import { taskData, actionsData } from '../Task/Task.stories';

export default {
	component: TaskListContainer,
	title: 'TaskList',
	decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
	excludeStories: /.*Data$/
};

export const defaultTasksData = [
	{ ...taskData, id: '1', title: 'Task 1' },
	{ ...taskData, id: '2', title: 'Task 2' },
	{ ...taskData, id: '3', title: 'Task 3' },
	{ ...taskData, id: '4', title: 'Task 4' },
	{ ...taskData, id: '5', title: 'Task 5' },
	{ ...taskData, id: '6', title: 'Task 6' }
];

export const withPinnedTasksData = [...defaultTasksData.slice(0, 5), { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }];

export const Default = () => <TaskListContainer tasks={defaultTasksData} {...actionsData} />;
export const WithPinnedTasks = () => <TaskListContainer tasks={withPinnedTasksData} {...actionsData} />;
export const Loading = () => <TaskListContainer loading tasks={[]} {...actionsData} />;
export const Empty = () => <TaskListContainer tasks={[]} {...actionsData} />;
