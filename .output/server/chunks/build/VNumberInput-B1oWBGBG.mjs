import { ref, computed, shallowRef, watch, toRef, createElementVNode, createVNode, Fragment, mergeProps, onScopeDispose, nextTick } from 'vue';
import { V as VTextField, m as makeVTextFieldProps } from './VTextField-CmLAcn2i.mjs';
import { c as useForm } from './VInput-CF1s2jmS.mjs';
import { a5 as genericComponent, bk as useLocale, bo as useProxiedModel, C as clamp, bp as useRender, k as VBtn, l as VDefaultsProvider, a3 as forwardRefs, $ as extractNumber, Z as escapeForRegex, aV as propsFactory, aR as omit } from './server.mjs';
import { V as VDivider } from './VDivider-D2ayNrXO.mjs';

const HOLD_REPEAT = 50;
const HOLD_DELAY = 500;
function useHold({
  toggleUpDown
}) {
  onScopeDispose(holdStop);
  function holdStart(value) {
    tick(value);
    (void 0).addEventListener("pointerup", holdStop);
    (void 0).addEventListener("blur", holdStop);
    (void 0).setTimeout(() => {
      (void 0).setInterval(() => tick(value), HOLD_REPEAT);
    }, HOLD_DELAY);
  }
  function holdStop() {
    return;
  }
  onScopeDispose(holdStop);
  function tick(value) {
    toggleUpDown(value === "up");
  }
  return {
    holdStart,
    holdStop
  };
}
const makeVNumberInputProps = propsFactory({
  controlVariant: {
    type: String,
    default: "default"
  },
  inset: Boolean,
  hideInput: Boolean,
  modelValue: {
    type: Number,
    default: null
  },
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },
  step: {
    type: Number,
    default: 1
  },
  precision: {
    type: Number,
    default: 0
  },
  minFractionDigits: {
    type: Number,
    default: null
  },
  decimalSeparator: {
    type: String,
    validator: (v) => !v || v.length === 1
  },
  ...omit(makeVTextFieldProps(), ["modelValue", "validationValue"])
}, "VNumberInput");
const VNumberInput = genericComponent()({
  name: "VNumberInput",
  props: {
    ...makeVNumberInputProps()
  },
  emits: {
    "update:focused": (val) => true,
    "update:modelValue": (val) => true
  },
  setup(props, {
    slots
  }) {
    const vTextFieldRef = ref();
    const {
      holdStart
    } = useHold({
      toggleUpDown
    });
    const form = useForm(props);
    const controlsDisabled = computed(() => form.isDisabled.value || form.isReadonly.value);
    const isFocused = shallowRef(props.focused);
    const {
      decimalSeparator: decimalSeparatorFromLocale
    } = useLocale();
    const decimalSeparator = computed(() => props.decimalSeparator?.[0] || decimalSeparatorFromLocale.value);
    function correctPrecision(val, precision = props.precision, trim = true) {
      const fixed = precision == null ? String(val) : val.toFixed(precision);
      if (isFocused.value && trim) {
        return Number(fixed).toString().replace(".", decimalSeparator.value);
      }
      if (props.minFractionDigits === null || precision !== null && precision < props.minFractionDigits) {
        return fixed.replace(".", decimalSeparator.value);
      }
      let [baseDigits, fractionDigits] = fixed.split(".");
      fractionDigits = (fractionDigits ?? "").padEnd(props.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${props.minFractionDigits}})0+$`, "g"), "");
      return [baseDigits, fractionDigits].filter(Boolean).join(decimalSeparator.value);
    }
    const model = useProxiedModel(props, "modelValue", null, (val) => val ?? null, (val) => val == null ? val ?? null : clamp(Number(val), props.min, props.max));
    const _inputText = shallowRef(null);
    const _lastParsedValue = shallowRef(null);
    watch(model, (val) => {
      if (isFocused.value && !controlsDisabled.value && Number(_inputText.value?.replace(decimalSeparator.value, ".")) === val) ;
      else if (val == null) {
        _inputText.value = null;
        _lastParsedValue.value = null;
      } else if (!isNaN(val)) {
        _inputText.value = correctPrecision(val);
        _lastParsedValue.value = Number(_inputText.value.replace(decimalSeparator.value, "."));
      }
    }, {
      immediate: true
    });
    const inputText = computed({
      get: () => _inputText.value,
      set(val) {
        if (val === null || val === "") {
          model.value = null;
          _inputText.value = null;
          _lastParsedValue.value = null;
          return;
        }
        const parsedValue = Number(val.replace(decimalSeparator.value, "."));
        if (!isNaN(parsedValue)) {
          _inputText.value = val;
          _lastParsedValue.value = parsedValue;
          if (parsedValue <= props.max && parsedValue >= props.min) {
            model.value = parsedValue;
          }
        }
      }
    });
    const isOutOfRange = computed(() => {
      if (_lastParsedValue.value === null) return false;
      const numberFromText = Number(_inputText.value?.replace(decimalSeparator.value, "."));
      return numberFromText !== clamp(numberFromText, props.min, props.max);
    });
    const canIncrease = computed(() => {
      if (controlsDisabled.value) return false;
      return (model.value ?? 0) + props.step <= props.max;
    });
    const canDecrease = computed(() => {
      if (controlsDisabled.value) return false;
      return (model.value ?? 0) - props.step >= props.min;
    });
    const controlVariant = computed(() => {
      return props.hideInput ? "stacked" : props.controlVariant;
    });
    const incrementIcon = toRef(() => controlVariant.value === "split" ? "$plus" : "$collapse");
    const decrementIcon = toRef(() => controlVariant.value === "split" ? "$minus" : "$expand");
    const controlNodeSize = toRef(() => controlVariant.value === "split" ? "default" : "small");
    const controlNodeDefaultHeight = toRef(() => controlVariant.value === "stacked" ? "auto" : "100%");
    const incrementSlotProps = {
      props: {
        onClick: onControlClick,
        onPointerup: onControlMouseup,
        onPointerdown: onUpControlMousedown,
        onPointercancel: onControlMouseup
      }
    };
    const decrementSlotProps = {
      props: {
        onClick: onControlClick,
        onPointerup: onControlMouseup,
        onPointerdown: onDownControlMousedown,
        onPointercancel: onControlMouseup
      }
    };
    watch(() => props.precision, () => formatInputValue());
    watch(() => props.minFractionDigits, () => formatInputValue());
    function inferPrecision(value) {
      if (value == null) return 0;
      const str = value.toString();
      const idx = str.indexOf(".");
      return ~idx ? str.length - idx : 0;
    }
    function toggleUpDown(increment = true) {
      if (controlsDisabled.value) return;
      if (model.value == null) {
        inputText.value = correctPrecision(clamp(0, props.min, props.max));
        return;
      }
      let inferredPrecision = Math.max(inferPrecision(model.value), inferPrecision(props.step));
      if (props.precision != null) inferredPrecision = Math.max(inferredPrecision, props.precision);
      if (increment) {
        if (canIncrease.value) inputText.value = correctPrecision(model.value + props.step, inferredPrecision);
      } else {
        if (canDecrease.value) inputText.value = correctPrecision(model.value - props.step, inferredPrecision);
      }
    }
    function onBeforeinput(e) {
      if (controlsDisabled.value) return;
      if (!e.data) return;
      const inputElement = e.target;
      const {
        value: existingTxt,
        selectionStart,
        selectionEnd
      } = inputElement ?? {};
      const potentialNewInputVal = existingTxt ? existingTxt.slice(0, selectionStart) + e.data + existingTxt.slice(selectionEnd) : e.data;
      const potentialNewNumber = extractNumber(potentialNewInputVal, props.precision, decimalSeparator.value);
      if (!new RegExp(`^-?\\d*${escapeForRegex(decimalSeparator.value)}?\\d*$`).test(potentialNewInputVal)) {
        e.preventDefault();
        inputElement.value = potentialNewNumber;
        nextTick(() => inputText.value = potentialNewNumber);
      }
      if (props.precision == null) return;
      if (potentialNewInputVal.split(decimalSeparator.value)[1]?.length > props.precision) {
        e.preventDefault();
        inputElement.value = potentialNewNumber;
        nextTick(() => inputText.value = potentialNewNumber);
        const cursorPosition = (selectionStart ?? 0) + e.data.length;
        inputElement.setSelectionRange(cursorPosition, cursorPosition);
      }
      if (props.precision === 0 && potentialNewInputVal.endsWith(decimalSeparator.value)) {
        e.preventDefault();
        inputElement.value = potentialNewNumber;
        nextTick(() => inputText.value = potentialNewNumber);
      }
    }
    async function onKeydown(e) {
      if (["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(e.key) || e.ctrlKey) return;
      if (["ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        clampModel();
        await nextTick();
        if (e.key === "ArrowDown") {
          toggleUpDown(false);
        } else {
          toggleUpDown();
        }
      }
    }
    function onControlClick(e) {
      e.stopPropagation();
    }
    function onControlMouseup(e) {
      const el = e.currentTarget;
      el?.releasePointerCapture(e.pointerId);
      e.preventDefault();
    }
    function onUpControlMousedown(e) {
      const el = e.currentTarget;
      el?.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
      holdStart("up");
    }
    function onDownControlMousedown(e) {
      const el = e.currentTarget;
      el?.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
      holdStart("down");
    }
    function clampModel() {
      if (controlsDisabled.value) return;
      if (!vTextFieldRef.value) return;
      const actualText = vTextFieldRef.value.value;
      const parsedValue = Number(actualText.replace(decimalSeparator.value, "."));
      if (actualText && !isNaN(parsedValue)) {
        inputText.value = correctPrecision(clamp(parsedValue, props.min, props.max));
      } else {
        inputText.value = null;
      }
    }
    function formatInputValue() {
      if (controlsDisabled.value) return;
      inputText.value = model.value !== null && !isNaN(model.value) ? correctPrecision(model.value, props.precision, false) : null;
    }
    function trimDecimalZeros() {
      if (controlsDisabled.value) return;
      if (model.value === null || isNaN(model.value)) {
        inputText.value = null;
        return;
      }
      inputText.value = model.value.toString().replace(".", decimalSeparator.value);
    }
    function onFocus() {
      trimDecimalZeros();
    }
    function onBlur() {
      clampModel();
    }
    useRender(() => {
      const {
        modelValue: _,
        type,
        ...textFieldProps
      } = VTextField.filterProps(props);
      function incrementControlNode() {
        return !slots.increment ? createVNode(VBtn, {
          "aria-hidden": "true",
          "data-testid": "increment",
          "disabled": !canIncrease.value,
          "height": controlNodeDefaultHeight.value,
          "icon": incrementIcon.value,
          "key": "increment-btn",
          "onClick": onControlClick,
          "onPointerdown": onUpControlMousedown,
          "onPointerup": onControlMouseup,
          "onPointercancel": onControlMouseup,
          "size": controlNodeSize.value,
          "variant": "text",
          "tabindex": "-1"
        }, null) : createVNode(VDefaultsProvider, {
          "key": "increment-defaults",
          "defaults": {
            VBtn: {
              disabled: !canIncrease.value,
              height: controlNodeDefaultHeight.value,
              size: controlNodeSize.value,
              icon: incrementIcon.value,
              variant: "text"
            }
          }
        }, {
          default: () => [slots.increment(incrementSlotProps)]
        });
      }
      function decrementControlNode() {
        return !slots.decrement ? createVNode(VBtn, {
          "aria-hidden": "true",
          "data-testid": "decrement",
          "disabled": !canDecrease.value,
          "height": controlNodeDefaultHeight.value,
          "icon": decrementIcon.value,
          "key": "decrement-btn",
          "onClick": onControlClick,
          "onPointerdown": onDownControlMousedown,
          "onPointerup": onControlMouseup,
          "onPointercancel": onControlMouseup,
          "size": controlNodeSize.value,
          "variant": "text",
          "tabindex": "-1"
        }, null) : createVNode(VDefaultsProvider, {
          "key": "decrement-defaults",
          "defaults": {
            VBtn: {
              disabled: !canDecrease.value,
              height: controlNodeDefaultHeight.value,
              size: controlNodeSize.value,
              icon: decrementIcon.value,
              variant: "text"
            }
          }
        }, {
          default: () => [slots.decrement(decrementSlotProps)]
        });
      }
      function controlNode() {
        return createElementVNode("div", {
          "class": "v-number-input__control"
        }, [decrementControlNode(), createVNode(VDivider, {
          "vertical": controlVariant.value !== "stacked"
        }, null), incrementControlNode()]);
      }
      function dividerNode() {
        return !props.hideInput && !props.inset ? createVNode(VDivider, {
          "vertical": true
        }, null) : void 0;
      }
      const appendInnerControl = controlVariant.value === "split" ? createElementVNode("div", {
        "class": "v-number-input__control"
      }, [createVNode(VDivider, {
        "vertical": true
      }, null), incrementControlNode()]) : props.reverse || controlVariant.value === "hidden" ? void 0 : createElementVNode(Fragment, null, [dividerNode(), controlNode()]);
      const hasAppendInner = slots["append-inner"] || appendInnerControl;
      const prependInnerControl = controlVariant.value === "split" ? createElementVNode("div", {
        "class": "v-number-input__control"
      }, [decrementControlNode(), createVNode(VDivider, {
        "vertical": true
      }, null)]) : props.reverse && controlVariant.value !== "hidden" ? createElementVNode(Fragment, null, [controlNode(), dividerNode()]) : void 0;
      const hasPrependInner = slots["prepend-inner"] || prependInnerControl;
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": inputText.value,
        "onUpdate:modelValue": ($event) => inputText.value = $event,
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.value,
        "error": props.error || isOutOfRange.value || void 0,
        "onBeforeinput": onBeforeinput,
        "onFocus": onFocus,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "class": ["v-number-input", {
          "v-number-input--default": controlVariant.value === "default",
          "v-number-input--hide-input": props.hideInput,
          "v-number-input--inset": props.inset,
          "v-number-input--reverse": props.reverse,
          "v-number-input--split": controlVariant.value === "split",
          "v-number-input--stacked": controlVariant.value === "stacked"
        }, props.class],
        "style": props.style,
        "inputmode": "decimal"
      }), {
        ...slots,
        "append-inner": hasAppendInner ? (...args) => createElementVNode(Fragment, null, [slots["append-inner"]?.(...args), appendInnerControl]) : void 0,
        "prepend-inner": hasPrependInner ? (...args) => createElementVNode(Fragment, null, [prependInnerControl, slots["prepend-inner"]?.(...args)]) : void 0
      });
    });
    return forwardRefs({}, vTextFieldRef);
  }
});

export { VNumberInput as V };
//# sourceMappingURL=VNumberInput-B1oWBGBG.mjs.map
