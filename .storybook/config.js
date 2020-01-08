import { configure } from '@storybook/vue';
import '../src/assets/tailwind.css';

configure(require.context('../src', true, /\.stories\.js$/), module);