import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css';

const loader = requireContext('../src/components', true, /\.stories\.js$/);

configure(loader, module);
