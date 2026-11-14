import { mount, type VueWrapper } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { vi } from 'vitest';
import { defineComponent, ref } from 'vue';
import StartPage from '@/components/StartPage.vue';
import { useAppStore } from '@/stores/app';

vi.mock('vuetify', () => ({
  useDisplay: () => ({ mdAndUp: ref(true) }),
  useTheme: () => ({ global: { name: ref('light') } }),
}));

const LinkStub = defineComponent({
  props: ['href', 'to'],
  template:
    '<component :is="href || to ? \'a\' : \'div\'" :href="href || to" @click.prevent><slot /></component>',
});

function mountStartPage(): VueWrapper {
  return mount(StartPage, {
    global: {
      stubs: {
        'v-container': { template: '<main><slot /></main>' },
        'v-row': { template: '<div><slot /></div>' },
        'v-col': { template: '<div><slot /></div>' },
        'v-card': LinkStub,
        'v-btn': LinkStub,
        'v-list-item': { template: '<div><slot /></div>' },
        'v-list-item-title': { template: '<div><slot /></div>' },
        'v-list-item-subtitle': { template: '<div><slot /></div>' },
        'v-chip': { template: '<span><slot /></span>' },
        'v-icon': true,
        'v-img': true,
        'v-overlay': true,
        'v-tooltip': true,
        'v-kbd': { template: '<kbd><slot /></kbd>' },
        AAS_Logo: true,
      },
    },
  });
}

describe('Start page', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('resets configuration when starting a new project', async () => {
    const store = useAppStore();
    const reset = vi.spyOn(store, 'reset');
    const wrapper = mountStartPage();

    expect(reset).not.toHaveBeenCalled();

    await wrapper.get('a[href="/get-started/introduction"]').trigger('click');
    expect(reset).toHaveBeenCalledOnce();
  });

  it('keeps the existing BaSyx resource links available', () => {
    const wrapper = mountStartPage();
    const links = wrapper.findAll('a').map(link => link.attributes('href'));

    expect(links).toEqual(
      expect.arrayContaining([
        'https://wiki.basyx.org/',
        'https://www.iese.fraunhofer.de/en/solution/dataspace.html',
        'https://hub.docker.com/u/eclipsebasyx',
        'https://github.com/eclipse-basyx',
      ])
    );
  });
});
