import { useSSRContext, createVNode, normalizeStyle, normalizeClass, createElementVNode, shallowRef, computed, ref, toRef, watchEffect, mergeProps, defineComponent, watch, withCtx, unref, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { aV as propsFactory, aG as makeTagProps, ao as makeComponentProps, a5 as genericComponent, bp as useRender, aH as makeThemeProps, aD as makeRoundedProps, aB as makeLocationProps, at as makeElevationProps, an as makeBorderProps, b1 as useBackgroundColor, b2 as useBorder, b8 as useElevation, bl as useLocation, br as useRounded, aX as provideTheme, bw as useRtl, aW as provideDefaults, n as VImg, l as VDefaultsProvider, J as convertToUnit, ax as makeLayoutItemProps, aR as omit, bo as useProxiedModel, bD as useToggleScope, bg as useLayoutItem, bq as useResizeObserver, ay as makeLayoutProps, ar as makeDimensionProps, K as createLayout, b6 as useDimension, bf as useLayout, bC as useTheme, C as clamp, k as VBtn, b7 as useDisplay, r as __nuxt_component_1, b3 as useCookie, bd as useGtag } from './server.mjs';
import { V as VSwitch } from './VSwitch-CzKEuP1X.mjs';
import { a as VExpandTransition, V as VDivider } from './VDivider-D2ayNrXO.mjs';
import { u as useSsrBoot } from './ssrBoot-BRsRdwag.mjs';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
import { V as VSpacer } from './VSpacer-D_joSj59.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-Ct4vBNpb.mjs';
import { _ as _imports_0$1 } from './Icon_BaSyx-Ddk1adz2.mjs';
import { V as VDialog } from './VDialog-8BBeNphn.mjs';
import { V as VCard, c as VCardTitle, b as VCardText } from './VCard-BMbud2FD.mjs';
import { a as VRow, V as VCol } from './VRow-DT77qovv.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'perfect-debounce';
import 'js-yaml';
import 'lz-string';
import './VInput-CF1s2jmS.mjs';
import './VSelectionControl-BgxnoM3f.mjs';
import './VCardActions-_afJsMdG.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "Theme"
  },
  __name: "Theme",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const isDarkTheme = ref(false);
    function toggleTheme() {
      theme.change(isDarkTheme.value ? "dark" : "light");
      localStorage.setItem("theme", theme.global.name.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSwitch, mergeProps({
        modelValue: isDarkTheme.value,
        "onUpdate:modelValue": [($event) => isDarkTheme.value = $event, toggleTheme],
        "hide-details": "",
        density: "compact",
        inset: "",
        "false-icon": "mdi-weather-sunny",
        "true-icon": "mdi-weather-night",
        color: isDarkTheme.value ? "#000" : "#fff",
        style: { "margin-top": "3px" },
        "aria-label": "theme switch"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Theme.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$3, { __name: "Theme" });
const _imports_0 = "" + __buildAssetsURL("Logo_BaSyx_wide.CmBn-LUs.svg");
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, {
    slots
  }) {
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar-title", props.class]),
        "style": normalizeStyle(props.style)
      }, {
        default: () => [hasText && createElementVNode("div", {
          "class": "v-toolbar-title__placeholder"
        }, [slots.text ? slots.text() : props.text, slots.default?.()])]
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  collapsePosition: {
    type: String,
    default: "start"
  },
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: {
    type: Boolean,
    default: null
  },
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, {
    slots
  }) {
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(props.extended === null ? !!slots.extension?.() : props.extended);
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = slots.extension?.();
      isExtended.value = props.extended === null ? !!extension : props.extended;
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar", `v-toolbar--collapse-${props.collapsePosition}`, {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, locationStyles.value, props.style])
      }, {
        default: () => [hasImage && createElementVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => [createElementVNode("div", {
            "class": "v-toolbar__content",
            "style": {
              height: convertToUnit(contentHeight.value)
            }
          }, [slots.prepend && createElementVNode("div", {
            "class": "v-toolbar__prepend"
          }, [slots.prepend?.()]), hasTitle && createVNode(VToolbarTitle, {
            "key": "title",
            "text": props.title
          }, {
            text: slots.title
          }), slots.default?.(), slots.append && createElementVNode("div", {
            "class": "v-toolbar__append"
          }, [slots.append?.()])])]
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createElementVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props, args = {}) {
  const {
    canScroll,
    layoutSize
  } = args;
  let previousScroll = 0;
  let previousScrollHeight = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const isAtBottom = shallowRef(false);
  const reachedBottomWhileScrollingDown = shallowRef(false);
  const hasEnoughScrollableSpace = shallowRef(true);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  function getScrollMetrics(targetEl) {
    const clientHeight = "window" in targetEl ? (void 0).innerHeight : targetEl.clientHeight;
    const scrollHeight = "window" in targetEl ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    return {
      clientHeight,
      scrollHeight
    };
  }
  function checkScrollableSpace() {
    const targetEl = target.value;
    if (!targetEl) return;
    const {
      clientHeight,
      scrollHeight
    } = getScrollMetrics(targetEl);
    const maxScrollableDistance = scrollHeight - clientHeight;
    const elementHeight = layoutSize?.value || 0;
    const minRequiredDistance = scrollThreshold.value + elementHeight;
    hasEnoughScrollableSpace.value = maxScrollableDistance > minRequiredDistance;
  }
  function onScroll() {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value) return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    const currentScrollHeight = targetEl instanceof Window ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    if (previousScrollHeight !== currentScrollHeight) {
      if (currentScrollHeight > previousScrollHeight) {
        checkScrollableSpace();
      }
      previousScrollHeight = currentScrollHeight;
    }
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
    const {
      clientHeight,
      scrollHeight
    } = getScrollMetrics(targetEl);
    const atBottom = currentScroll.value + clientHeight >= scrollHeight - 5;
    if (!isScrollingUp.value && atBottom && currentScroll.value >= scrollThreshold.value && hasEnoughScrollableSpace.value) {
      reachedBottomWhileScrollingDown.value = true;
    }
    const scrollJumped = Math.abs(currentScroll.value - previousScroll) > 100;
    const atTop = currentScroll.value <= 5;
    const scrolledUpSignificantly = isScrollingUp.value && previousScroll - currentScroll.value > 1;
    if (scrolledUpSignificantly && !atBottom || scrollJumped && currentScroll.value < scrollThreshold.value || atTop) {
      reachedBottomWhileScrollingDown.value = false;
    }
    isAtBottom.value = atBottom;
  }
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll,
    isAtBottom,
    reachedBottomWhileScrollingDown,
    hasEnoughScrollableSpace
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...omit(makeVToolbarProps(), ["location"]),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    slots
  }) {
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      const behavior = new Set(props.scrollBehavior?.split(" ") ?? []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const appBarHeight = computed(() => {
      const height2 = vToolbarRef.value?.contentHeight ?? 0;
      const extensionHeight = vToolbarRef.value?.extensionHeight ?? 0;
      return height2 + extensionHeight;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio,
      isAtBottom,
      reachedBottomWhileScrollingDown,
      hasEnoughScrollableSpace
    } = useScroll(props, {
      canScroll,
      layoutSize: appBarHeight
    });
    const canHide = toRef(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted) return 0;
      const height2 = vToolbarRef.value?.contentHeight ?? 0;
      const extensionHeight = vToolbarRef.value?.extensionHeight ?? 0;
      if (!canHide.value) return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(() => !!props.scrollBehavior, () => {
      watchEffect(() => {
        if (!canHide.value) {
          isActive.value = true;
          return;
        }
        if (scrollBehavior.value.inverted) {
          isActive.value = currentScroll.value > scrollThreshold.value;
          return;
        }
        if (!hasEnoughScrollableSpace.value) {
          isActive.value = true;
          return;
        }
        if (reachedBottomWhileScrollingDown.value) {
          isActive.value = false;
          return;
        }
        isActive.value = isScrollingUp.value && !isAtBottom.value || currentScroll.value < scrollThreshold.value;
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(() => props.location),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(() => props.absolute)
    });
    useRender(() => {
      const toolbarProps = omit(VToolbar.filterProps(props), ["location"]);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    name: "AppBar"
  },
  __name: "AppBar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Theme = __nuxt_component_0$1;
      _push(ssrRenderComponent(VAppBar, mergeProps({
        flat: "",
        class: "bg-appBar border-b-thin",
        height: 54
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "py-0 pl-7 pr-0",
              fluid: "",
              style: { "max-width": "1300px", "display": "flex" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "plain",
                    to: "/",
                    style: { "margin-top": "6px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, {
                          src: _imports_0,
                          contain: "",
                          width: 120,
                          alt: "BaSyx Logo"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, {
                            src: _imports_0,
                            contain: "",
                            width: 120,
                            alt: "BaSyx Logo"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, {
                    vertical: "",
                    style: { "height": "24px", "margin-top": "11px" },
                    class: "mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Theme, { class: "mr-3 ml-2" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-github",
                    variant: "plain",
                    href: "https://github.com/eclipse-basyx",
                    target: "_blank",
                    "aria-label": "Open BaSyx GitHub page"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-docker",
                    variant: "plain",
                    href: "https://hub.docker.com/u/eclipsebasyx",
                    target: "_blank",
                    "aria-label": "Open BaSyx DockerHub page"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-email",
                    variant: "plain",
                    href: "mailto:basyx-dev@eclipse.org",
                    "aria-label": "Send email to the BaSyx developers"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      variant: "plain",
                      to: "/",
                      style: { "margin-top": "6px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: _imports_0,
                          contain: "",
                          width: 120,
                          alt: "BaSyx Logo"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(VDivider, {
                      vertical: "",
                      style: { "height": "24px", "margin-top": "11px" },
                      class: "mr-2"
                    }),
                    createVNode(_component_Theme, { class: "mr-3 ml-2" }),
                    createVNode(VBtn, {
                      icon: "mdi-github",
                      variant: "plain",
                      href: "https://github.com/eclipse-basyx",
                      target: "_blank",
                      "aria-label": "Open BaSyx GitHub page"
                    }),
                    createVNode(VBtn, {
                      icon: "mdi-docker",
                      variant: "plain",
                      href: "https://hub.docker.com/u/eclipsebasyx",
                      target: "_blank",
                      "aria-label": "Open BaSyx DockerHub page"
                    }),
                    createVNode(VBtn, {
                      icon: "mdi-email",
                      variant: "plain",
                      href: "mailto:basyx-dev@eclipse.org",
                      "aria-label": "Send email to the BaSyx developers"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                class: "py-0 pl-7 pr-0",
                fluid: "",
                style: { "max-width": "1300px", "display": "flex" }
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "plain",
                    to: "/",
                    style: { "margin-top": "6px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: _imports_0,
                        contain: "",
                        width: 120,
                        alt: "BaSyx Logo"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode(VDivider, {
                    vertical: "",
                    style: { "height": "24px", "margin-top": "11px" },
                    class: "mr-2"
                  }),
                  createVNode(_component_Theme, { class: "mr-3 ml-2" }),
                  createVNode(VBtn, {
                    icon: "mdi-github",
                    variant: "plain",
                    href: "https://github.com/eclipse-basyx",
                    target: "_blank",
                    "aria-label": "Open BaSyx GitHub page"
                  }),
                  createVNode(VBtn, {
                    icon: "mdi-docker",
                    variant: "plain",
                    href: "https://hub.docker.com/u/eclipsebasyx",
                    target: "_blank",
                    "aria-label": "Open BaSyx DockerHub page"
                  }),
                  createVNode(VBtn, {
                    icon: "mdi-email",
                    variant: "plain",
                    href: "mailto:basyx-dev@eclipse.org",
                    "aria-label": "Send email to the BaSyx developers"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "AppBar" });
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='svg4488'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:svg='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20292'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%2300a389;%20}%20.cls-1,%20.cls-2%20{%20stroke-width:%200px;%20}%20.cls-2%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3crect%20id='rect3716'%20class='cls-2'%20x='8.5'%20y='8.3'%20width='163.3'%20height='164.2'/%3e%3cpath%20id='path2589'%20class='cls-1'%20d='M8.5,8.3v45.7c3.6-.2,7.1-.4,10.8-.7,39.7-3,94-10.1,152.5-35.4v-9.6H8.5ZM171.8,21.8C114.2,47.6,56.7,58.6,8.5,62.5v18.8c47.8-8.4,106.2-23.5,163.3-50.6v-8.9ZM171.8,36.8c-56,27.8-114.2,45.3-163.3,56.1v32.1c43.2-17.6,103.7-44.9,163.3-80.4v-7.8ZM171.8,57C112.3,95.9,51.9,127.1,8.5,147.7v24.7c38.8-20,95.7-52.3,163.3-99.6v-15.8ZM171.8,76.5c-52.5,39.4-106.1,72.3-148,95.9h22.2c29.4-17.4,65-40.2,100.5-66.8,8.3-6.2,16.8-12.6,25.3-19.2v-9.9ZM171.8,92.6c-37.2,31.3-74,58.4-104.9,79.8h104.9v-79.8Z'/%3e%3cpath%20id='path2633'%20class='cls-2'%20d='M226.7,172.4h21.9v-48h37v-17.2h-37v-27h38.9v-17.2h-60.8v109.4ZM302.6,172.4h21v-29.6c0-11.6,0-32.9,17.1-32.9s7.5.6,9.4,1.7v-21.2c-2.2-.6-4.4-.6-6.4-.6-12.5,0-21.2,12.7-22.1,20.2h-.3v-18.3h-18.6v80.7ZM365.8,113.9c7.1-5.3,16-8.8,24.9-8.8s18.2,4.4,18.2,17.4h-11.6c-8.8,0-19.1.8-27.1,4.7-8,3.9-13.8,11-13.8,23.1s13.9,24,28.2,24,20.1-5,24.9-13.9h.3c.2,2.5.2,7.8.9,12.1h18.5c-.5-6.3-.8-11.9-.9-18-.2-6-.3-12.1-.3-20.2v-10.3c0-23.8-10.2-34-34.8-34s-19.9,2.4-28.1,6.1l.6,18ZM376.4,149c0-12.4,14-14,23.4-14h9.1c0,6.3-.9,12.1-4.4,16.6-3.3,4.4-8.3,7.2-14.7,7.2s-13.3-3-13.3-9.9M519.7,91.6h-21v39.5c0,10.3-3.3,26.8-18.5,26.8s-13.6-13.3-13.6-23.2v-43.1h-21v50.9c0,18.2,8.3,31.7,27.4,31.7s20.1-5,26.5-12.9h.3v11h19.9v-80.7ZM541.3,172.4h21v-39.5c0-10.3,3.3-26.8,18.5-26.8s13.6,13.3,13.6,23.2v43.1h21v-51c0-18.2-8.3-31.7-27.4-31.7s-19.9,3.6-26.5,12.9h-.3v-11h-19.9v80.7ZM637.1,172.4h21v-39.5c0-10.3,3.3-26.8,18.5-26.8s13.6,13.3,13.6,23.2v43.1h21v-51c0-18.2-8.3-31.7-27.4-31.7s-20.1,5-25.4,12.9h-.3v-47.8h-21v117.6ZM724.6,132.5c0,23.2,15.5,41.7,42.2,41.7s42.3-18.5,42.3-41.7-18.3-42.8-42.3-42.8-42.2,16.1-42.2,42.8M746.5,130c0-12.1,6.6-24,20.2-24s20.4,11.6,20.4,24-4.2,27.9-20.4,27.9-20.2-14.6-20.2-27.9M830.1,172.4h21v-65.4h18.3v-15.4h-18.3v-10c0-6.3,2.2-12.4,9.3-12.4s7.2,1.7,9.1,2.8l1.7-17.4c-4.1-.9-10-1.7-15.4-1.7-16.6,0-25.7,11.3-25.7,27.4v11.3h-15.5v15.4h15.5v65.4ZM897.1,124.1c1-10.8,6.9-19,18.7-19s16.5,8.8,17.1,19h-35.7ZM947,150.7c-7.9,4.4-16.6,8.2-26.8,8.2s-22.1-7.4-23-20.4h55.8c0-28.2-8.5-48.7-38.4-48.7s-37.4,19.3-37.4,42.6,15.5,41.9,42.2,41.9,20-2.2,27.7-6.4v-17.1ZM968,172.4h21v-29.6c0-11.6,0-32.9,17.1-32.9s7.5.6,9.4,1.7v-21.2c-2.2-.6-4.4-.6-6.4-.6-12.5,0-21.2,12.7-22.1,20.2h-.3v-18.3h-18.6v80.7Z'/%3e%3cpath%20id='path2635'%20class='cls-2'%20d='M957.1,227.2c-4.8,0-9.1,1.2-12.7,3.7-3.8,2.6-5.7,7-5.8,13,0,2.2.3,4,1,5.6.7,1.6,1.6,3,2.7,4.1,1.2,1.1,2.5,2.2,3.8,3,1.3.8,2.7,1.4,4.1,2.1,3,1.1,5.7,2.4,8,3.7,1.1.6,1.8,1.4,2.5,2.4.6.9,1,1.9,1,3.3,0,2.4-1.1,4.2-3.1,5.3-2,1.2-4.2,1.8-6.4,1.8-4.2,0-8.3-1.2-12-3.4l-.9,9.9c2.5.6,4.7,1.1,6.7,1.5,1.9.4,4.1.6,6.8.6,5.6,0,10.3-1.3,14.1-3.8,3.8-2.6,5.7-6.7,5.8-12.6,0-2.4-.3-4.4-.9-6.1-.7-1.6-1.6-3-2.7-4.1-1.1-1.2-2.3-2.3-3.7-3.1-1.4-.8-2.7-1.5-4.1-2.1-1.5-.6-3-1.2-4.3-1.8-1.4-.5-2.5-1.1-3.7-1.8-1.1-.6-2-1.3-2.7-2.1-.7-.8-1-1.8-1-3s.2-2.7.7-3.7c.6-1,1.3-1.8,2.1-2.4.9-.6,1.9-1,2.8-1.2.9-.2,1.8-.3,2.7-.3,3.8,0,7.4.9,10.8,2.4l.9-9c-3.9-1.3-8-1.9-12.6-1.9ZM871,228.1v54.8h10.5v-54.8h-10.5ZM896.7,228.1v54.8h31.4v-8.6h-20.9v-15.4h18.9v-8.6h-18.9v-13.6h20.7v-8.6h-31.2ZM984.1,228.1v54.8h31.4v-8.6h-20.9v-15.4h18.9v-8.6h-18.9v-13.6h20.7v-8.6h-31.2Z'/%3e%3c/svg%3e";
const _imports_2 = "" + __buildAssetsURL("Logo_IESE_Light.BYy96UtT.svg");
const _imports_3 = "" + __buildAssetsURL("Logo_HTW_Dark.BY6xMVP9.svg");
const _imports_4 = "" + __buildAssetsURL("Logo_HTW_Light.B6EGUgNc.svg");
const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "footer"
  }),
  ...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
  name: "VFooter",
  props: makeVFooterProps(),
  setup(props, {
    slots
  }) {
    const layoutItemStyles = ref();
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
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position: toRef(() => "bottom"),
        layoutSize: height,
        elementSize: computed(() => props.height === "auto" ? void 0 : height.value),
        active: toRef(() => props.app),
        absolute: toRef(() => props.absolute)
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style])
    }, slots));
    return {};
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "AppFooter"
  },
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const { mdAndUp } = useDisplay();
    const cookieDialog = ref(false);
    const currentConsent = ref(false);
    const consent = ref(true);
    const indeterminate = ref(false);
    const isDarkTheme = computed(() => theme.global.current.value.dark);
    function getCookieStatus() {
      const consentCookie = useCookie("consent", { maxAge: 31536e3 });
      if (consentCookie.value === "granted") {
        consent.value = true;
        currentConsent.value = true;
        indeterminate.value = false;
      } else if (consentCookie.value === "denied") {
        consent.value = false;
        currentConsent.value = false;
        indeterminate.value = false;
      } else {
        indeterminate.value = true;
      }
    }
    function updateConsent() {
      const { gtag } = useGtag();
      if (typeof gtag !== "function") {
        return;
      }
      if (!consent.value) {
        gtag("consent", "update", {
          ad_storage: "denied",
          analytics_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied"
        });
        (void 0).cookie = "consent=denied; max-age=31536000";
        currentConsent.value = false;
      } else {
        gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted"
        });
        (void 0).cookie = "consent=granted; max-age=31536000";
        currentConsent.value = true;
      }
    }
    watch(cookieDialog, (newValue) => {
      if (newValue) {
        getCookieStatus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VFooter, {
        height: 40,
        app: "",
        style: { "z-index": "1004" },
        color: "footer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "position": "absolute", "left": "16px", "display": "flex", "align-items": "center" })}" data-v-b023631d${_scopeId}><a href="https://eclipse.dev/basyx/" target="_blank" title="BaSyx Website" class="mr-2" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-b023631d${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} width="24" height="24" alt="BaSyx Icon" data-v-b023631d${_scopeId}></a>`);
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-email",
              size: "x-small",
              variant: "plain",
              href: "mailto:basyx-dev@eclipse.org",
              "aria-label": "Send email to the BaSyx developers"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-github",
              size: "x-small",
              variant: "plain",
              href: "https://github.com/eclipse-basyx",
              target: "_blank",
              "aria-label": "Open BaSyx GitHub page"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-docker",
              size: "x-small",
              variant: "plain",
              href: "https://hub.docker.com/u/eclipsebasyx",
              target: "_blank",
              "aria-label": "Open BaSyx DockerHub page"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-book-open-variant",
              size: "x-small",
              variant: "plain",
              href: "https://wiki.basyx.org/",
              target: "_blank",
              "aria-label": "Go to BaSyx documentation"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-cookie",
              size: "x-small",
              variant: "plain",
              "aria-label": "Open cookie policy page",
              onClick: ($event) => cookieDialog.value = true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-card-account-details-outline",
              size: "x-small",
              variant: "plain",
              to: "/impressum",
              "aria-label": "Open imprint page"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-shield-account-outline",
              size: "x-small",
              variant: "plain",
              to: "/datenschutz",
              "aria-label": "Open privacy policy page"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(mdAndUp)) {
              _push2(`<div class="text-caption text-disabled text-footerText" style="${ssrRenderStyle({ "position": "absolute", "left": "50%", "transform": "translateX(-50%)" })}" data-v-b023631d${_scopeId}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} <span class="d-none d-sm-inline-block" data-v-b023631d${_scopeId}>Eclipse BaSyx™</span> — <a class="text-decoration-none on-surface" href="https://opensource.org/licenses/mit-license.php" rel="noopener noreferrer" target="_blank" data-v-b023631d${_scopeId}> MIT License </a><span class="mx-1" data-v-b023631d${_scopeId}>·</span>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "text-decoration-none on-surface",
                to: "/impressum"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Impressum`);
                  } else {
                    return [
                      createTextVNode("Impressum")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span class="mx-1" data-v-b023631d${_scopeId}>·</span>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "text-decoration-none on-surface",
                to: "/datenschutz"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Datenschutz`);
                  } else {
                    return [
                      createTextVNode("Datenschutz")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(mdAndUp)) {
              _push2(`<div style="${ssrRenderStyle({ "position": "absolute", "right": "16px", "display": "flex", "align-items": "center" })}" data-v-b023631d${_scopeId}><a href="https://www.iese.fraunhofer.de/" target="_blank" title="Fraunhofer IESE" style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" class="mr-6" data-v-b023631d${_scopeId}>`);
              if (isDarkTheme.value) {
                _push2(`<img${ssrRenderAttr("src", _imports_1)} width="87.67" height="25" alt="Fraunhofer IESE Logo" data-v-b023631d${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", _imports_2)} width="87.67" height="25" alt="HTW Berlin Logo" data-v-b023631d${_scopeId}>`);
              }
              _push2(`</a><a href="https://www.htw-berlin.de/" target="_blank" title="HTW Berlin" style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-b023631d${_scopeId}>`);
              if (isDarkTheme.value) {
                _push2(`<img${ssrRenderAttr("src", _imports_3)} width="130" height="16.36" alt="HTW Berlin Logo" data-v-b023631d${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", _imports_4)} width="130" height="16.36" alt="HTW Berlin Logo" data-v-b023631d${_scopeId}>`);
              }
              _push2(`</a></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { style: { "position": "absolute", "left": "16px", "display": "flex", "align-items": "center" } }, [
                createVNode("a", {
                  href: "https://eclipse.dev/basyx/",
                  target: "_blank",
                  title: "BaSyx Website",
                  class: "mr-2",
                  style: { "width": "24px", "height": "24px" }
                }, [
                  createVNode("img", {
                    src: _imports_0$1,
                    width: "24",
                    height: "24",
                    alt: "BaSyx Icon"
                  })
                ]),
                createVNode(VBtn, {
                  icon: "mdi-email",
                  size: "x-small",
                  variant: "plain",
                  href: "mailto:basyx-dev@eclipse.org",
                  "aria-label": "Send email to the BaSyx developers"
                }),
                createVNode(VBtn, {
                  icon: "mdi-github",
                  size: "x-small",
                  variant: "plain",
                  href: "https://github.com/eclipse-basyx",
                  target: "_blank",
                  "aria-label": "Open BaSyx GitHub page"
                }),
                createVNode(VBtn, {
                  icon: "mdi-docker",
                  size: "x-small",
                  variant: "plain",
                  href: "https://hub.docker.com/u/eclipsebasyx",
                  target: "_blank",
                  "aria-label": "Open BaSyx DockerHub page"
                }),
                createVNode(VBtn, {
                  icon: "mdi-book-open-variant",
                  size: "x-small",
                  variant: "plain",
                  href: "https://wiki.basyx.org/",
                  target: "_blank",
                  "aria-label": "Go to BaSyx documentation"
                }),
                createVNode(VBtn, {
                  icon: "mdi-cookie",
                  size: "x-small",
                  variant: "plain",
                  "aria-label": "Open cookie policy page",
                  onClick: ($event) => cookieDialog.value = true
                }, null, 8, ["onClick"]),
                createVNode(VBtn, {
                  icon: "mdi-card-account-details-outline",
                  size: "x-small",
                  variant: "plain",
                  to: "/impressum",
                  "aria-label": "Open imprint page"
                }),
                createVNode(VBtn, {
                  icon: "mdi-shield-account-outline",
                  size: "x-small",
                  variant: "plain",
                  to: "/datenschutz",
                  "aria-label": "Open privacy policy page"
                })
              ]),
              unref(mdAndUp) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-caption text-disabled text-footerText",
                style: { "position": "absolute", "left": "50%", "transform": "translateX(-50%)" }
              }, [
                createTextVNode(" © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " ", 1),
                createVNode("span", { class: "d-none d-sm-inline-block" }, "Eclipse BaSyx™"),
                createTextVNode(" — "),
                createVNode("a", {
                  class: "text-decoration-none on-surface",
                  href: "https://opensource.org/licenses/mit-license.php",
                  rel: "noopener noreferrer",
                  target: "_blank"
                }, " MIT License "),
                createVNode("span", { class: "mx-1" }, "·"),
                createVNode(_component_NuxtLink, {
                  class: "text-decoration-none on-surface",
                  to: "/impressum"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Impressum")
                  ]),
                  _: 1
                }),
                createVNode("span", { class: "mx-1" }, "·"),
                createVNode(_component_NuxtLink, {
                  class: "text-decoration-none on-surface",
                  to: "/datenschutz"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Datenschutz")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              unref(mdAndUp) ? (openBlock(), createBlock("div", {
                key: 1,
                style: { "position": "absolute", "right": "16px", "display": "flex", "align-items": "center" }
              }, [
                createVNode("a", {
                  href: "https://www.iese.fraunhofer.de/",
                  target: "_blank",
                  title: "Fraunhofer IESE",
                  style: { "display": "flex", "align-items": "center" },
                  class: "mr-6"
                }, [
                  isDarkTheme.value ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_1,
                    width: "87.67",
                    height: "25",
                    alt: "Fraunhofer IESE Logo"
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_2,
                    width: "87.67",
                    height: "25",
                    alt: "HTW Berlin Logo"
                  }))
                ]),
                createVNode("a", {
                  href: "https://www.htw-berlin.de/",
                  target: "_blank",
                  title: "HTW Berlin",
                  style: { "display": "flex", "align-items": "center" }
                }, [
                  isDarkTheme.value ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_3,
                    width: "130",
                    height: "16.36",
                    alt: "HTW Berlin Logo"
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_4,
                    width: "130",
                    height: "16.36",
                    alt: "HTW Berlin Logo"
                  }))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: cookieDialog.value,
        "onUpdate:modelValue": ($event) => cookieDialog.value = $event,
        width: "640px",
        height: "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { align: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-header" data-v-b023631d${_scopeId5}>Cookie Policy</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-header" }, "Cookie Policy")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "auto" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      icon: "mdi-close",
                                      variant: "plain",
                                      onClick: ($event) => cookieDialog.value = false
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        icon: "mdi-close",
                                        variant: "plain",
                                        onClick: ($event) => cookieDialog.value = false
                                      }, null, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-header" }, "Cookie Policy")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSpacer),
                                createVNode(VCol, { cols: "auto" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      icon: "mdi-close",
                                      variant: "plain",
                                      onClick: ($event) => cookieDialog.value = false
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { align: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-header" }, "Cookie Policy")
                                ]),
                                _: 1
                              }),
                              createVNode(VSpacer),
                              createVNode(VCol, { cols: "auto" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    icon: "mdi-close",
                                    variant: "plain",
                                    onClick: ($event) => cookieDialog.value = false
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-normalText" data-v-b023631d${_scopeId3}> We collect anonymous analytics data to improve our service. </div><div class="text-normalText" data-v-b023631d${_scopeId3}>You can always change or withdraw your consent later.</div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "mt-3 mb-2" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, {
                          align: "center",
                          class: "my-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSwitch, {
                                      modelValue: consent.value,
                                      "onUpdate:modelValue": ($event) => consent.value = $event,
                                      "hide-details": "",
                                      class: "mr-2",
                                      label: "Cookies: " + (indeterminate.value ? "not set" : currentConsent.value ? "accepted" : "denied"),
                                      indeterminate: indeterminate.value
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSwitch, {
                                        modelValue: consent.value,
                                        "onUpdate:modelValue": ($event) => consent.value = $event,
                                        "hide-details": "",
                                        class: "mr-2",
                                        label: "Cookies: " + (indeterminate.value ? "not set" : currentConsent.value ? "accepted" : "denied"),
                                        indeterminate: indeterminate.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "indeterminate"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      variant: "tonal",
                                      onClick: ($event) => updateConsent()
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Update Consent`);
                                        } else {
                                          return [
                                            createTextVNode("Update Consent")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        variant: "tonal",
                                        onClick: ($event) => updateConsent()
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Update Consent")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VSwitch, {
                                      modelValue: consent.value,
                                      "onUpdate:modelValue": ($event) => consent.value = $event,
                                      "hide-details": "",
                                      class: "mr-2",
                                      label: "Cookies: " + (indeterminate.value ? "not set" : currentConsent.value ? "accepted" : "denied"),
                                      indeterminate: indeterminate.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "indeterminate"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "tonal",
                                      onClick: ($event) => updateConsent()
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Update Consent")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-normalText" }, " We collect anonymous analytics data to improve our service. "),
                          createVNode("div", { class: "text-normalText" }, "You can always change or withdraw your consent later."),
                          createVNode(VDivider, { class: "mt-3 mb-2" }),
                          createVNode(VRow, {
                            align: "center",
                            class: "my-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VSwitch, {
                                    modelValue: consent.value,
                                    "onUpdate:modelValue": ($event) => consent.value = $event,
                                    "hide-details": "",
                                    class: "mr-2",
                                    label: "Cookies: " + (indeterminate.value ? "not set" : currentConsent.value ? "accepted" : "denied"),
                                    indeterminate: indeterminate.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "indeterminate"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "tonal",
                                    onClick: ($event) => updateConsent()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Update Consent")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode(VRow, { align: "center" }, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-header" }, "Cookie Policy")
                              ]),
                              _: 1
                            }),
                            createVNode(VSpacer),
                            createVNode(VCol, { cols: "auto" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  icon: "mdi-close",
                                  variant: "plain",
                                  onClick: ($event) => cookieDialog.value = false
                                }, null, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-normalText" }, " We collect anonymous analytics data to improve our service. "),
                        createVNode("div", { class: "text-normalText" }, "You can always change or withdraw your consent later."),
                        createVNode(VDivider, { class: "mt-3 mb-2" }),
                        createVNode(VRow, {
                          align: "center",
                          class: "my-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VSwitch, {
                                  modelValue: consent.value,
                                  "onUpdate:modelValue": ($event) => consent.value = $event,
                                  "hide-details": "",
                                  class: "mr-2",
                                  label: "Cookies: " + (indeterminate.value ? "not set" : currentConsent.value ? "accepted" : "denied"),
                                  indeterminate: indeterminate.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "indeterminate"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "tonal",
                                  onClick: ($event) => updateConsent()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Update Consent")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(VRow, { align: "center" }, {
                        default: withCtx(() => [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-header" }, "Cookie Policy")
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-close",
                                variant: "plain",
                                onClick: ($event) => cookieDialog.value = false
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-normalText" }, " We collect anonymous analytics data to improve our service. "),
                      createVNode("div", { class: "text-normalText" }, "You can always change or withdraw your consent later."),
                      createVNode(VDivider, { class: "mt-3 mb-2" }),
                      createVNode(VRow, {
                        align: "center",
                        class: "my-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VSwitch, {
                                modelValue: consent.value,
                                "onUpdate:modelValue": ($event) => consent.value = $event,
                                "hide-details": "",
                                class: "mr-2",
                                label: "Cookies: " + (indeterminate.value ? "not set" : currentConsent.value ? "accepted" : "denied"),
                                indeterminate: indeterminate.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "indeterminate"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "tonal",
                                onClick: ($event) => updateConsent()
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Update Consent")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-b023631d"]]), { __name: "AppFooter" });
const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLayoutProps()
}, "VLayout");
const VLayout = genericComponent()({
  name: "VLayout",
  props: makeVLayoutProps(),
  setup(props, {
    slots
  }) {
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createElementVNode("div", {
      "ref": layoutRef,
      "class": normalizeClass([layoutClasses.value, props.class]),
      "style": normalizeStyle([dimensionStyles.value, layoutStyles.value, props.style])
    }, [slots.default?.()]));
    return {
      getLayoutItem,
      items
    };
  }
});
const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, {
    slots
  }) {
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class]),
      "style": normalizeStyle([mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style])
    }, {
      default: () => [props.scrollable ? createElementVNode("div", {
        "class": "v-main__scroller"
      }, [slots.default?.()]) : slots.default?.()]
    }));
    return {};
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppBar = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  const _component_AppFooter = __nuxt_component_2;
  _push(ssrRenderComponent(VLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AppBar, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VMain, {
          "min-height": _ctx.$vuetify.display.mdAndUp ? 800 : 550
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtPage)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_AppBar),
          createVNode(VMain, {
            "min-height": _ctx.$vuetify.display.mdAndUp ? 800 : 550
          }, {
            default: withCtx(() => [
              createVNode(_component_NuxtPage)
            ]),
            _: 1
          }, 8, ["min-height"]),
          createVNode(_component_AppFooter)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-ojRPk0bX.mjs.map
