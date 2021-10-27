import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Card from '../../comps/Card';
import Detail from '../../comps/Details'

storiesOf('Card', module)
.add('Basic Card', () => <Card />)
.add('Basic Detail', () => <Detail />)
