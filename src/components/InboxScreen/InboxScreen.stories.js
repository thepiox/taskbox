import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { defaultTasksData } from '../TaskList/TaskList.stories';
import InboxScreen from './InboxScreen';

export default {
	component: InboxScreen,
	title: 'InboxScreen',
	decorators: [(story) => <Provider store={store}>{story()}</Provider>]
};

// A super-simple mock of a redux store
const store = {
	getState: () => ({ tasks: defaultTasksData }),
	subscribe: () => 0,
	dispatch: action('dispatch')
};

export const Default = () => <InboxScreen />;
export const Error = () => <InboxScreen error="Something" />;
