import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatInput from './ChatInput';

storiesOf('Input', module)
  .add('Default', () => (
    <ChatInput onSubmit={action('message')} clearMessages={action('clear')} />
  ))
  .add('Disabled', () => (
    <ChatInput
      onSubmit={action('message')}
      clearMessages={action('clear')}
      disabled
    />
  ));
