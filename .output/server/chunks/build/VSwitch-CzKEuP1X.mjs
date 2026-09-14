import { ref, toRef, useId, createVNode, mergeProps, createElementVNode, Fragment, normalizeStyle, normalizeClass } from 'vue';
import { d as VScaleTransition } from './VDivider-D2ayNrXO.mjs';
import { a5 as genericComponent, bo as useProxiedModel, bj as useLoader, bp as useRender, a0 as filterInputAttrs, l as VDefaultsProvider, m as VIcon, L as LoaderSlot, q as VProgressCircular, a3 as forwardRefs, j as SUPPORTS_MATCH_MEDIA, aV as propsFactory } from './server.mjs';
import { u as useFocus, V as VInput, b as makeVInputProps } from './VInput-CF1s2jmS.mjs';
import { V as VSelectionControl, b as makeVSelectionControlProps } from './VSelectionControl-BgxnoM3f.mjs';

const makeVSwitchProps = propsFactory({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false
  },
  ...makeVInputProps(),
  ...makeVSelectionControlProps()
}, "VSwitch");
const VSwitch = genericComponent()({
  name: "VSwitch",
  inheritAttrs: false,
  props: makeVSwitchProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, {
    attrs,
    slots
  }) {
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const control = ref();
    const inputRef = ref();
    const isForcedColorsModeActive = SUPPORTS_MATCH_MEDIA;
    const loaderColor = toRef(() => {
      return typeof props.loading === "string" && props.loading !== "" ? props.loading : props.color;
    });
    const uid = useId();
    const id = toRef(() => props.id || `switch-${uid}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    function onTrackClick(e) {
      e.stopPropagation();
      e.preventDefault();
      control.value?.input?.click();
    }
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": inputRef,
        "class": ["v-switch", {
          "v-switch--flat": props.flat
        }, {
          "v-switch--inset": props.inset
        }, {
          "v-switch--indeterminate": indeterminate.value
        }, loaderClasses.value, props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: ({
          id: id2,
          messagesId,
          isDisabled,
          isReadonly,
          isValid
        }) => {
          const slotProps = {
            model,
            isValid
          };
          return createVNode(VSelectionControl, mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [($event) => model.value = $event, onChange],
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? "mixed" : void 0,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: ({
              backgroundColorClasses,
              backgroundColorStyles
            }) => createElementVNode("div", {
              "class": normalizeClass(["v-switch__track", backgroundColorClasses.value]),
              "style": normalizeStyle(backgroundColorStyles.value),
              "onClick": onTrackClick
            }, [slots["track-true"] && createElementVNode("div", {
              "key": "prepend",
              "class": "v-switch__track-true"
            }, [slots["track-true"](slotProps)]), slots["track-false"] && createElementVNode("div", {
              "key": "append",
              "class": "v-switch__track-false"
            }, [slots["track-false"](slotProps)])]),
            input: ({
              inputNode,
              icon,
              backgroundColorClasses,
              backgroundColorStyles
            }) => createElementVNode(Fragment, null, [inputNode, createElementVNode("div", {
              "class": normalizeClass(["v-switch__thumb", {
                "v-switch__thumb--filled": icon || props.loading
              }, props.inset || isForcedColorsModeActive ? void 0 : backgroundColorClasses.value]),
              "style": normalizeStyle(props.inset ? void 0 : backgroundColorStyles.value)
            }, [slots.thumb ? createVNode(VDefaultsProvider, {
              "defaults": {
                VIcon: {
                  icon,
                  size: "x-small"
                }
              }
            }, {
              default: () => [slots.thumb({
                ...slotProps,
                icon
              })]
            }) : createVNode(VScaleTransition, null, {
              default: () => [!props.loading ? icon && createVNode(VIcon, {
                "key": String(icon),
                "icon": icon,
                "size": "x-small"
              }, null) : createVNode(LoaderSlot, {
                "name": "v-switch",
                "active": true,
                "color": isValid.value === false ? void 0 : loaderColor.value
              }, {
                default: (slotProps2) => slots.loader ? slots.loader(slotProps2) : createVNode(VProgressCircular, {
                  "active": slotProps2.isActive,
                  "color": slotProps2.color,
                  "indeterminate": true,
                  "size": "16",
                  "width": "2"
                }, null)
              })]
            })])])
          });
        }
      });
    });
    return forwardRefs({}, inputRef);
  }
});

export { VSwitch as V };
//# sourceMappingURL=VSwitch-CzKEuP1X.mjs.map
