import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Hello', module)
    .add('first story', () => (
        <div>First story</div>
    ))