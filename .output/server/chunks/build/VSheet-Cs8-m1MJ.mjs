import { createVNode, normalizeStyle, normalizeClass } from 'vue';
import { a5 as genericComponent, aX as provideTheme, b1 as useBackgroundColor, b2 as useBorder, b6 as useDimension, b8 as useElevation, bl as useLocation, bn as usePosition, br as useRounded, bp as useRender, aV as propsFactory, aH as makeThemeProps, aG as makeTagProps, aD as makeRoundedProps, aC as makePositionProps, aB as makeLocationProps, at as makeElevationProps, ar as makeDimensionProps, ao as makeComponentProps, an as makeBorderProps } from './server.mjs';

const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, {
    slots
  }) {
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style])
    }, slots));
    return {};
  }
});

export { VSheet as V, makeVSheetProps as m };
//# sourceMappingURL=VSheet-Cs8-m1MJ.mjs.map
