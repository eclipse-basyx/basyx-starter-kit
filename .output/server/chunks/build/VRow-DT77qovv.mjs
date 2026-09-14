import { a5 as genericComponent, W as deprecate, J as convertToUnit, aV as propsFactory, aG as makeTagProps, aq as makeDensityProps, ao as makeComponentProps, am as keys, u as breakpoints } from './server.mjs';
import { computed, h, capitalize } from 'vue';

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    const offsetKey = "offset" + capitalize(val);
    props[offsetKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap$1 = {
  col: keys(breakpointProps),
  offset: keys(offsetProps),
  order: ["order", "orderSm", "orderMd", "orderLg", "orderXl", "orderXxl"]
};
function parseCols(val) {
  if (typeof val === "string" && val.includes("/")) {
    const [cols, size] = val.split("/");
    return {
      cols: Number(cols),
      size: Number(size)
    };
  }
  return {
    cols: val
  };
}
function parseBreakpoint(type, prop, val) {
  if (val == null || val === false) {
    return {};
  }
  const {
    cols,
    size
  } = parseCols(val);
  const breakpoint = prop.replace(type, "").toLowerCase();
  if (type === "offset") {
    return {
      className: `v-col--offset-${breakpoint}-${cols}`,
      variables: [{
        [`--v-col-offset-base-${breakpoint}`]: size
      }]
    };
  } else if (type === "order") {
    return {
      className: `order-${breakpoint}-${cols}`
    };
  }
  return {
    className: cols === "" || cols === true ? `v-col--${breakpoint}` : `v-col--cols-${breakpoint}-${cols}`,
    variables: [{
      [`--v-col-size-base-${breakpoint}`]: size
    }]
  };
}
const ALIGN_SELF_VALUES = ["auto", "start", "end", "center", "baseline", "stretch"];
const alignSelfValidator = (str) => ALIGN_SELF_VALUES.includes(str);
const makeVColProps = propsFactory({
  cols: {
    type: [Boolean, String, Number],
    default: false
  },
  ...breakpointProps,
  offset: {
    type: [String, Number],
    default: null
  },
  ...offsetProps,
  /** @deprecated use order-* class instead */
  order: {
    type: [String, Number],
    default: null
  },
  /** @deprecated use order-sm-* class instead */
  orderSm: {
    type: [String, Number],
    default: null
  },
  /** @deprecated use order-md-* class instead */
  orderMd: {
    type: [String, Number],
    default: null
  },
  /** @deprecated use order-lg-* class instead */
  orderLg: {
    type: [String, Number],
    default: null
  },
  /** @deprecated use order-xl-* class instead */
  orderXl: {
    type: [String, Number],
    default: null
  },
  /** @deprecated use order-xxl-* class instead */
  orderXxl: {
    type: [String, Number],
    default: null
  },
  /** @deprecated use align-self-* class instead */
  alignSelf: {
    type: String,
    default: null,
    validator: alignSelfValidator
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCol");
const VCol = genericComponent()({
  name: "VCol",
  props: makeVColProps(),
  setup(props, {
    slots
  }) {
    const sizeBaseOverride = computed(() => parseCols(props.cols).size);
    const offsetBaseOverride = computed(() => parseCols(props.offset).size);
    const responsive = computed(() => {
      const classList = ["v-col"];
      const variablesList = [];
      let type;
      for (type in propMap$1) {
        propMap$1[type].forEach((prop) => {
          const value = props[prop];
          const {
            className,
            variables
          } = parseBreakpoint(type, prop, value);
          if (className) classList.push(className);
          if (variables) variablesList.push(...variables);
        });
      }
      const {
        cols
      } = parseCols(props.cols);
      const {
        cols: offset
      } = parseCols(props.offset);
      classList.push({
        [`v-col--cols-${cols}`]: cols,
        [`v-col--offset-${offset}`]: offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      return {
        classes: classList,
        variables: variablesList
      };
    });
    return () => h(props.tag, {
      class: [responsive.value.classes, props.class],
      style: [{
        "--v-col-size-base": sizeBaseOverride.value
      }, {
        "--v-col-offset-base": offsetBaseOverride.value
      }, responsive.value.variables, props.style]
    }, slots.default?.());
  }
});
const ALIGNMENT = ["start", "end", "center"];
const SPACE = ["space-between", "space-around", "space-evenly"];
const ALIGN_VALUES = [...ALIGNMENT, "baseline", "stretch"];
const alignValidator = (str) => ALIGN_VALUES.includes(str);
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, "stretch"];
const alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
const propMap = {
  align: ["align", "alignSm", "alignMd", "alignLg", "alignXl", "alignXxl"],
  justify: ["justify", "justifySm", "justifyMd", "justifyLg", "justifyXl", "justifyXxl"],
  alignContent: ["alignContent", "alignContentSm", "alignContentMd", "alignContentLg", "alignContentXl", "alignContentXxl"]
};
const classMap = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const makeVRowProps = propsFactory({
  /** @deprecated use density="compact" instead */
  dense: Boolean,
  /** @deprecated use align-* class instead */
  align: {
    type: String,
    default: null,
    validator: alignValidator
  },
  /** @deprecated use align-sm-* class instead */
  alignSm: {
    type: String,
    default: null,
    validator: alignValidator
  },
  /** @deprecated use align-md-* class instead */
  alignMd: {
    type: String,
    default: null,
    validator: alignValidator
  },
  /** @deprecated use align-lg-* class instead */
  alignLg: {
    type: String,
    default: null,
    validator: alignValidator
  },
  /** @deprecated use align-xl-* class instead */
  alignXl: {
    type: String,
    default: null,
    validator: alignValidator
  },
  /** @deprecated use align-xxl-* class instead */
  alignXxl: {
    type: String,
    default: null,
    validator: alignValidator
  },
  /** @deprecated use justify-* class instead */
  justify: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  /** @deprecated use justify-sm-* class instead */
  justifySm: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  /** @deprecated use justify-md-* class instead */
  justifyMd: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  /** @deprecated use justify-lg-* class instead */
  justifyLg: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  /** @deprecated use justify-xl-* class instead */
  justifyXl: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  /** @deprecated use justify-xxl-* class instead */
  justifyXxl: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  /** @deprecated use align-content-* class instead */
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  /** @deprecated use align-content-sm-* class instead */
  alignContentSm: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  /** @deprecated use align-content-md-* class instead */
  alignContentMd: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  /** @deprecated use align-content-lg-* class instead */
  alignContentLg: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  /** @deprecated use align-content-xl-* class instead */
  alignContentXl: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  /** @deprecated use align-content-xxl-* class instead */
  alignContentXxl: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  noGutters: Boolean,
  gap: [Number, String, Array],
  size: [Number, String],
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VRow");
const VRow = genericComponent()({
  name: "VRow",
  props: makeVRowProps(),
  setup(props, {
    slots
  }) {
    if (props.dense) {
      deprecate("dense", 'density="comfortable"');
    }
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        "v-row--no-gutters": props.noGutters,
        "v-row--density-default": props.density === "default" && !props.noGutters && !props.dense,
        "v-row--density-compact": props.density === "compact",
        "v-row--density-comfortable": props.density === "comfortable" || props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    const horizontalGap = computed(() => {
      return Array.isArray(props.gap) ? convertToUnit(props.gap[0] || 0) : convertToUnit(props.gap);
    });
    const verticalGap = computed(() => {
      return Array.isArray(props.gap) ? convertToUnit(props.gap[1] || 0) : horizontalGap.value;
    });
    return () => h(props.tag, {
      class: ["v-row", classes.value, props.class],
      style: [{
        "--v-col-gap-x": horizontalGap.value,
        "--v-col-gap-y": verticalGap.value,
        "--v-row-columns": props.size
      }, props.style]
    }, slots.default?.());
  }
});

export { VCol as V, VRow as a };
//# sourceMappingURL=VRow-DT77qovv.mjs.map
