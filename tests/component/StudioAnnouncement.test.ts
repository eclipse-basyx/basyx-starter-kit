import { mount } from '@vue/test-utils';
import { defineComponent } from 'vue';
import StudioAnnouncement from '@/components/StudioAnnouncement.vue';
import HomePage from '@/pages/index.vue';
import { useAppStore } from '@/stores/app';

const ButtonStub = defineComponent({
  props: ['href'],
  template: '<component :is="href ? \'a\' : \'button\'" :href="href"><slot /></component>',
});

const stubs = {
  'v-dialog': { template: '<div><slot /></div>' },
  'v-container': { template: '<div><slot /></div>' },
  'v-btn': ButtonStub,
  'v-icon': true,
  'v-img': true,
};

describe('Studio announcement', () => {
  it('announces Studio and links Learn more to studio.basyx.org', () => {
    const wrapper = mount(StudioAnnouncement, { global: { stubs } });

    expect(wrapper.get('h1').text()).toContain('BaSyx Studio');
    const learnMore = wrapper.get('a[href="https://studio.basyx.org"]');
    expect(learnMore.text()).toBe('Learn more');
    expect(learnMore.attributes('target')).toBe('_blank');
    expect(learnMore.attributes('rel')).toBe('noopener noreferrer');
    expect(wrapper.get('button').text()).toBe('Continue to basyx.org');
  });

  it('opens with the announcement and continues to the existing homepage without resetting config', async () => {
    const store = useAppStore();
    store.initializeStarterDefaults();
    store.updateRegistryIntegration(false);
    const wrapper = mount(HomePage, {
      global: {
        stubs: {
          ...stubs,
          StudioAnnouncement,
          StartPage: { template: '<main>Original BaSyx homepage</main>' },
        },
      },
    });

    expect(wrapper.findComponent(StudioAnnouncement).exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(false);

    await wrapper.get('button').trigger('click');

    expect(wrapper.findComponent(StudioAnnouncement).exists()).toBe(false);
    expect(wrapper.get('main').text()).toBe('Original BaSyx homepage');
    expect(store.getRegistryIntegration).toBe(false);
  });
});
