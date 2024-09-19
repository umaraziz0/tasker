import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HomePage from '~/pages/index.vue';

describe('HomePage', () => {
  it('renders Hello World', () => {
    const wrapper = mount(HomePage);

    expect(wrapper.text()).toContain('Hello World');
  });
});
