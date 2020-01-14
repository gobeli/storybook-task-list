import { configure } from '@storybook/vue';

import {installCommon} from '../src/components/common/index';
import '../src/assets/tailwind.css';

installCommon();

configure(require.context('../src', true, /\.stories\.js$/), module);