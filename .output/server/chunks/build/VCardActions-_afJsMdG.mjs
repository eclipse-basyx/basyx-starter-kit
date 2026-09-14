import { a5 as genericComponent, ao as makeComponentProps, aW as provideDefaults, bp as useRender, aV as propsFactory, aG as makeTagProps } from './server.mjs';
import { h, capitalize, camelize, createVNode, normalizeStyle, normalizeClass } from 'vue';

function createSimpleFunctional(klass, tag = "div", name) {
  return genericComponent()({
    name: name ?? capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      },
      ...makeComponentProps()
    },
    setup(props, {
      slots
    }) {
      return () => {
        return h(props.tag, {
          class: [klass, props.class],
          style: props.style
        }, slots.default?.());
      };
    }
  });
}
const makeVCardActionsProps = propsFactory({
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardActions");
const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeVCardActionsProps(),
  setup(props, {
    slots
  }) {
    provideDefaults({
      VBtn: {
        slim: true,
        variant: "text"
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-card-actions", props.class]),
      "style": normalizeStyle(props.style)
    }, slots));
    return {};
  }
});

export { VCardActions as V, createSimpleFunctional as c };
//# sourceMappingURL=VCardActions-_afJsMdG.mjs.map
