import { createVNode, normalizeStyle, normalizeClass } from 'vue';
import { a5 as genericComponent, aX as provideTheme, b2 as useBorder, br as useRounded, b1 as useBackgroundColor, b8 as useElevation, bp as useRender, aV as propsFactory, at as makeElevationProps, aH as makeThemeProps, aG as makeTagProps, aD as makeRoundedProps, ao as makeComponentProps, an as makeBorderProps } from './server.mjs';

const makeVKbdProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "kbd"
  }),
  ...makeThemeProps(),
  ...makeElevationProps()
}, "VKbd");
const VKbd = genericComponent()({
  name: "VKbd",
  props: makeVKbdProps(),
  setup(props, {
    slots
  }) {
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      elevationClasses
    } = useElevation(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-kbd", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, props.style])
    }, slots));
    return {};
  }
});

export { VKbd as V };
//# sourceMappingURL=VKbd-jkyggUsO.mjs.map
