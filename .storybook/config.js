import Vue from 'vue';
import { configure } from '@storybook/vue';

import {installCommon} from '../src/components/common';
import '../src/assets/tailwind.css';

installCommon();
Vue.prototype.$showBorders = false;

configure(require.context('../src', true, /\.stories\.js$/), module);