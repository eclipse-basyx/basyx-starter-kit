import { defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, useId, toRef, toRefs, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { bC as useTheme, b0 as useAppStore, b7 as useDisplay, n as VImg, p as VOverlay, a5 as genericComponent, bo as useProxiedModel, by as useScopeId, bp as useRender, a3 as forwardRefs, aV as propsFactory, aR as omit, aJ as makeVOverlayProps } from './server.mjs';
import { _ as _imports_0 } from './Icon_BaSyx-Ddk1adz2.mjs';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
import { a as VRow, V as VCol } from './VRow-DT77qovv.mjs';
import { V as VCard } from './VCard-BMbud2FD.mjs';
import { V as VListItem, b as VListItemTitle, a as VListItemSubtitle } from './VListItem-DqdlKWJZ.mjs';
import { V as VKbd } from './VKbd-jkyggUsO.mjs';
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
import './VCardActions-_afJsMdG.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    name: "AasLogo"
  },
  __name: "AAS_Logo",
  __ssrInlineRender: true,
  props: {
    fillColor: {}
  },
  setup(__props) {
    const props = __props;
    const { mdAndUp } = useDisplay();
    const { fillColor } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        id: "Layer_1",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 245.15 223.11",
        style: { "enable-background": "new 0 0 245.15 223.11" },
        width: unref(mdAndUp) ? "90px" : "60px",
        height: unref(mdAndUp) ? "90px" : "60px",
        "xml:space": "preserve"
      }, _attrs))}><g><defs><rect id="SVGID_1_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000009582176661471637310000000063719271100119971_"><use xlink:href="#SVGID_1_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M189.32,155.22c-15.37,0-24.45-7.58-24.45-20.79h17.2c0,5.05,2.47,7.66,7.8,7.66c4.3,0,6.77-2.02,6.77-5.14c0-3.79-2.79-4.63-9.96-6.56c-10.99-3.11-20.71-6.15-20.71-19.02c0-11.36,8.6-18.77,23.34-18.77c14.42,0,22.94,6.65,22.94,19.53h-16.73c0-4.38-2.39-6.82-7.01-6.82c-3.98,0-6.29,1.85-6.29,4.63c0,3.45,2.63,4.46,10.27,6.4c11.15,2.86,20.95,6.31,20.95,19.53C213.45,147.81,204.37,155.22,189.32,155.22z M136.82,153.87l-2.87-10.77h-19.19l-2.87,10.77H95.09l19.03-59.93h20.47l19.04,59.93H136.82z M69.04,153.87l-2.87-10.77H46.98l-2.87,10.77H27.3l19.04-59.93h20.47l19.04,59.93H69.04z M242.22,90.83l-17.7-19.59c-2.08-2.3-4.99-3.6-8.04-3.6H28.67c-3.05,0-5.97,1.31-8.04,3.6L2.93,90.83C1.05,92.92,0,95.66,0,98.5v112.73c0,6.22,4.91,11.27,10.97,11.27h7.35c6.06,0,10.97-5.04,10.97-11.27v-14.86c0-2.83,1.03-5.55,2.9-7.63l7.53-8.4c2.08-2.32,5.01-3.64,8.07-3.64h149.04c2.88,0,5.65,1.17,7.7,3.24l8.61,8.72c2.09,2.12,3.27,5.01,3.27,8.03v14.54c0,6.22,4.91,11.27,10.97,11.27h6.79c6.06,0,10.97-5.04,10.97-11.27V98.5C245.15,95.66,244.1,92.92,242.22,90.83z"></path></g><g><defs><rect id="SVGID_00000121241972207664850630000009389239196996317844_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000150824108345844767050000009212941396622761354_"><use xlink:href="#SVGID_00000121241972207664850630000009389239196996317844_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M124.48,105.56h-0.16c-1.43,6.57-3.11,13.64-4.94,20.2l-1.12,4.13h12.19l-1.12-4.13C127.58,119.2,125.91,112.13,124.48,105.56z"></path></g><g><defs><rect id="SVGID_00000054962021081869610780000011010052152544973223_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000039110274149152147070000006046919851359985330_"><use xlink:href="#SVGID_00000054962021081869610780000011010052152544973223_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M56.69,105.56h-0.16c-1.43,6.57-3.11,13.64-4.94,20.2l-1.12,4.13h12.19l-1.12-4.13C59.8,119.2,58.13,112.13,56.69,105.56z"></path></g><g><defs><rect id="SVGID_00000054235510347434458760000014525823084601683383_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000124841134715476283420000001486810719191865481_"><use xlink:href="#SVGID_00000054235510347434458760000014525823084601683383_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M188.07,34.76c4.77,0,8.63,3.87,8.63,8.64c0,4.77-3.87,8.64-8.63,8.64c-4.77,0-8.64-3.87-8.64-8.64C179.44,38.62,183.3,34.76,188.07,34.76z"></path></g><g><defs><rect id="SVGID_00000062173212734435256850000004094476170873701820_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000051365534868004459220000016195907608638197664_"><use xlink:href="#SVGID_00000062173212734435256850000004094476170873701820_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M151.37,38.85c-1.41,3.06-1.41,6.58,0,9.64c0.65,1.2,1.94,1.91,3.3,1.83c1.36,0.08,2.64-0.63,3.28-1.82c1.38-3.07,1.38-6.59,0-9.66c-0.65-1.19-1.92-1.9-3.28-1.82C153.31,36.94,152.02,37.65,151.37,38.85z M149.21,50.39c-2.41-4.15-2.41-9.28,0-13.43c2.58-3.01,7.12-3.36,10.13-0.78c0.28,0.24,0.54,0.5,0.78,0.78c2.41,4.15,2.41,9.28,0,13.43c-2.58,3.01-7.11,3.37-10.12,0.79C149.72,50.93,149.45,50.67,149.21,50.39z"></path></g><g><defs><rect id="SVGID_00000123412067943432987220000005517160922369301660_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000151542658373558329050000015680404070128872857_"><use xlink:href="#SVGID_00000123412067943432987220000005517160922369301660_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M122.69,0.93c4.77,0,8.63,3.87,8.63,8.64c0,4.77-3.87,8.64-8.63,8.64c-4.77,0-8.64-3.87-8.64-8.64C114.05,4.8,117.92,0.93,122.69,0.93z"></path></g><g><defs><rect id="SVGID_00000147211843331420635360000000401754571851100573_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000139288427978451982500000002244077096965231254_"><use xlink:href="#SVGID_00000147211843331420635360000000401754571851100573_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M85.98,5.02c-1.41,3.06-1.41,6.58,0,9.64c0.65,1.2,1.94,1.91,3.3,1.83c1.36,0.08,2.64-0.63,3.28-1.82c1.38-3.07,1.38-6.59,0-9.66c-0.65-1.19-1.92-1.9-3.28-1.82C87.92,3.11,86.64,3.83,85.98,5.02z M83.83,16.56c-2.41-4.15-2.41-9.28,0-13.43c2.58-3.01,7.12-3.36,10.13-0.78c0.28,0.24,0.54,0.5,0.78,0.78c2.41,4.15,2.41,9.28,0,13.43c-2.58,3.01-7.11,3.37-10.12,0.79C84.33,17.11,84.07,16.84,83.83,16.56z"></path></g><polygon style="${ssrRenderStyle({ fill: unref(fillColor) })}" points="86.04,36.88 92.52,36.88 92.52,54.7 89.66,54.7 89.66,39.56 86.04,39.56"></polygon><g><defs><rect id="SVGID_00000103255162506836486520000017650875200777977277_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000112596064044763917280000011584004474728425883_"><use xlink:href="#SVGID_00000103255162506836486520000017650875200777977277_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M122.69,34.34c4.77,0,8.63,3.87,8.63,8.64c0,4.77-3.87,8.64-8.63,8.64c-4.77,0-8.64-3.87-8.64-8.64C114.05,38.2,117.92,34.34,122.69,34.34z"></path></g><g><defs><rect id="SVGID_00000049939950240894599940000008474060465416699313_" x="-70" y="-173.78" width="1080" height="1080"></rect></defs><clipPath id="SVGID_00000078760841848066930070000005537180860137149878_"><use xlink:href="#SVGID_00000049939950240894599940000008474060465416699313_" style="${ssrRenderStyle({ "overflow": "visible" })}"></use></clipPath><path style="${ssrRenderStyle({ fill: unref(fillColor) })}" d="M55.9,34.27c4.77,0,8.63,3.87,8.63,8.64c0,4.77-3.87,8.64-8.63,8.64c-4.77,0-8.64-3.87-8.64-8.64C47.26,38.14,51.13,34.27,55.9,34.27z"></path></g></svg>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AAS_Logo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$2, { __name: "AASLogo" });
const makeVTooltipProps = propsFactory({
  id: String,
  interactive: Boolean,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: "end",
    locationStrategy: "connected",
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: "auto",
    scrim: false,
    scrollStrategy: "reposition",
    transition: null
  }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"])
}, "VTooltip");
const VTooltip = genericComponent()({
  name: "VTooltip",
  props: makeVTooltipProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    slots
  }) {
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = useId();
    const id = toRef(() => props.id || `v-tooltip-${uid}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(" ").length > 1 ? props.location : props.location + " center";
    });
    const origin = computed(() => {
      return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
    });
    const transition = toRef(() => {
      if (props.transition != null) return props.transition;
      return isActive.value ? "scale-transition" : "fade-transition";
    });
    const activatorProps = computed(() => mergeProps({
      "aria-describedby": id.value
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-tooltip", {
          "v-tooltip--interactive": props.interactive
        }, props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: (...args) => slots.default?.(...args) ?? props.text
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "Startpage"
  },
  __name: "StartPage",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const appStore = useAppStore();
    const { mdAndUp } = useDisplay();
    const links = ref([
      {
        id: 1,
        link: "https://wiki.basyx.org/",
        icon: "mdi-text-box-outline",
        title: "Documentation",
        subtitle: "Learn about all things BaSyx in our documentation.",
        location: "start"
      },
      // { id: 2, link: '/aas-dataspace', icon: 'mdi-cloud-braces', title: 'AAS Dataspace', subtitle: 'The industrial dataspace build on BaSyx', location: 'end' as Anchor },
      {
        link: "https://www.iese.fraunhofer.de/en/solution/dataspace.html",
        icon: "mdi-cloud-braces",
        title: "AAS Dataspace for Everybody",
        subtitle: "The test environment for data spaces based on Asset Administration Shells",
        location: "end"
      },
      {
        id: 3,
        link: "https://hub.docker.com/u/eclipsebasyx",
        icon: "mdi-widgets-outline",
        title: "Components",
        subtitle: "Discover the BaSyx off-the-shelf components.",
        location: "start"
      },
      {
        id: 4,
        link: "https://github.com/eclipse-basyx",
        icon: "mdi-account-group-outline",
        title: "Community",
        subtitle: "Connect with BaSyx developers on GitHub.",
        location: "end"
      }
    ]);
    const isDark = computed(() => theme.global.name.value === "dark");
    function resetStore() {
      appStore.reset();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AAS_Logo = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "h-100 d-flex align-center justify-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-100 w-lg-80 w-xl-50 w-xxl-50 text-center" data-v-d8c62b23${_scopeId}><div class="d-flex justify-center mb-4" data-v-d8c62b23${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              height: unref(mdAndUp) ? 150 : 80,
              width: unref(mdAndUp) ? 150 : 80,
              src: _imports_0,
              alt: "BaSyx Logo",
              "aspect-ratio": "1"
            }, null, _parent2, _scopeId));
            _push2(`</div><h1 class="text-h4 text-md-h2 font-weight-bold my-6" data-v-d8c62b23${_scopeId}>Eclipse BaSyx™</h1>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "py-2",
                          color: "surface-variant",
                          rounded: "lg",
                          variant: "outlined",
                          to: "/get-started/introduction",
                          onClick: ($event) => resetStore()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, {
                                "prepend-icon": "mdi-rocket-launch-outline",
                                class: "text-left py-0",
                                lines: "one"
                              }, {
                                append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AAS_Logo, {
                                      "fill-color": isDark.value ? "#A3A3A3" : "#424242"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AAS_Logo, {
                                        "fill-color": isDark.value ? "#A3A3A3" : "#424242"
                                      }, null, 8, ["fill-color"])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, { class: "text-subtitle-1 text-md-h5 font-weight-bold" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Get Started`);
                                        } else {
                                          return [
                                            createTextVNode("Get Started")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-subtitle-2 text-md-subtitle-1" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span data-v-d8c62b23${_scopeId6}>Start a new project with BaSyx</span>`);
                                          if (unref(mdAndUp)) {
                                            _push7(`<span data-v-d8c62b23${_scopeId6}> - `);
                                            _push7(ssrRenderComponent(VKbd, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Digital Twins`);
                                                } else {
                                                  return [
                                                    createTextVNode("Digital Twins")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(` tailored to your needs.</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode("span", null, "Start a new project with BaSyx"),
                                            unref(mdAndUp) ? (openBlock(), createBlock("span", { key: 0 }, [
                                              createTextVNode(" - "),
                                              createVNode(VKbd, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Digital Twins")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" tailored to your needs.")
                                            ])) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h5 font-weight-bold" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Get Started")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-subtitle-2 text-md-subtitle-1" }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Start a new project with BaSyx"),
                                          unref(mdAndUp) ? (openBlock(), createBlock("span", { key: 0 }, [
                                            createTextVNode(" - "),
                                            createVNode(VKbd, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Digital Twins")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" tailored to your needs.")
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VOverlay, {
                                opacity: ".12",
                                scrim: "primary",
                                contained: "",
                                "model-value": "",
                                persistent: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItem, {
                                  "prepend-icon": "mdi-rocket-launch-outline",
                                  class: "text-left py-0",
                                  lines: "one"
                                }, {
                                  append: withCtx(() => [
                                    createVNode(_component_AAS_Logo, {
                                      "fill-color": isDark.value ? "#A3A3A3" : "#424242"
                                    }, null, 8, ["fill-color"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h5 font-weight-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Get Started")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-subtitle-2 text-md-subtitle-1" }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Start a new project with BaSyx"),
                                        unref(mdAndUp) ? (openBlock(), createBlock("span", { key: 0 }, [
                                          createTextVNode(" - "),
                                          createVNode(VKbd, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Digital Twins")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" tailored to your needs.")
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VOverlay, {
                                  opacity: ".12",
                                  scrim: "primary",
                                  contained: "",
                                  "model-value": "",
                                  persistent: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            class: "py-2",
                            color: "surface-variant",
                            rounded: "lg",
                            variant: "outlined",
                            to: "/get-started/introduction",
                            onClick: ($event) => resetStore()
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItem, {
                                "prepend-icon": "mdi-rocket-launch-outline",
                                class: "text-left py-0",
                                lines: "one"
                              }, {
                                append: withCtx(() => [
                                  createVNode(_component_AAS_Logo, {
                                    "fill-color": isDark.value ? "#A3A3A3" : "#424242"
                                  }, null, 8, ["fill-color"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h5 font-weight-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Get Started")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-subtitle-2 text-md-subtitle-1" }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Start a new project with BaSyx"),
                                      unref(mdAndUp) ? (openBlock(), createBlock("span", { key: 0 }, [
                                        createTextVNode(" - "),
                                        createVNode(VKbd, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Digital Twins")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" tailored to your needs.")
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VOverlay, {
                                opacity: ".12",
                                scrim: "primary",
                                contained: "",
                                "model-value": "",
                                persistent: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(links.value, (link) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: link.id,
                      cols: "12",
                      xs: "12",
                      sm: "12",
                      md: "6",
                      class: unref(mdAndUp) ? "" : "py-1"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (link.id !== 2) {
                            _push4(ssrRenderComponent(VCard, {
                              class: "py-2",
                              color: "surface-variant",
                              href: link.link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              rounded: "lg",
                              variant: "text"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VListItem, {
                                    class: "text-left",
                                    "prepend-icon": link.icon,
                                    "append-icon": "mdi-open-in-new",
                                    lines: "one"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, { class: "text-subtitle-1 text-md-h6 font-weight-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(link.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(link.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-caption text-md-subtitle-2" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(link.subtitle)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(link.subtitle), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h6 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(link.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, { class: "text-caption text-md-subtitle-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(link.subtitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VOverlay, {
                                    opacity: ".06",
                                    scrim: "primary",
                                    contained: "",
                                    "model-value": "",
                                    persistent: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VTooltip, {
                                    activator: "parent",
                                    "open-delay": 600,
                                    location: link.location,
                                    "aria-label": `Tooltip for ${link.title}`
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="font-weight-bold" data-v-d8c62b23${_scopeId5}>${ssrInterpolate(link.title)}</div><div data-v-d8c62b23${_scopeId5}>${ssrInterpolate(link.subtitle)}</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "font-weight-bold" }, toDisplayString(link.title), 1),
                                          createVNode("div", null, toDisplayString(link.subtitle), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VListItem, {
                                      class: "text-left",
                                      "prepend-icon": link.icon,
                                      "append-icon": "mdi-open-in-new",
                                      lines: "one"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h6 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(link.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, { class: "text-caption text-md-subtitle-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(link.subtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["prepend-icon"]),
                                    createVNode(VOverlay, {
                                      opacity: ".06",
                                      scrim: "primary",
                                      contained: "",
                                      "model-value": "",
                                      persistent: ""
                                    }),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      "open-delay": 600,
                                      location: link.location,
                                      "aria-label": `Tooltip for ${link.title}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "font-weight-bold" }, toDisplayString(link.title), 1),
                                        createVNode("div", null, toDisplayString(link.subtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["location", "aria-label"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            link.id !== 2 ? (openBlock(), createBlock(VCard, {
                              key: 0,
                              class: "py-2",
                              color: "surface-variant",
                              href: link.link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              rounded: "lg",
                              variant: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItem, {
                                  class: "text-left",
                                  "prepend-icon": link.icon,
                                  "append-icon": "mdi-open-in-new",
                                  lines: "one"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h6 font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, { class: "text-caption text-md-subtitle-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.subtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["prepend-icon"]),
                                createVNode(VOverlay, {
                                  opacity: ".06",
                                  scrim: "primary",
                                  contained: "",
                                  "model-value": "",
                                  persistent: ""
                                }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  "open-delay": 600,
                                  location: link.location,
                                  "aria-label": `Tooltip for ${link.title}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "font-weight-bold" }, toDisplayString(link.title), 1),
                                    createVNode("div", null, toDisplayString(link.subtitle), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["location", "aria-label"])
                              ]),
                              _: 2
                            }, 1032, ["href"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "py-2",
                          color: "surface-variant",
                          rounded: "lg",
                          variant: "outlined",
                          to: "/get-started/introduction",
                          onClick: ($event) => resetStore()
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-rocket-launch-outline",
                              class: "text-left py-0",
                              lines: "one"
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_AAS_Logo, {
                                  "fill-color": isDark.value ? "#A3A3A3" : "#424242"
                                }, null, 8, ["fill-color"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h5 font-weight-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Get Started")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, { class: "text-subtitle-2 text-md-subtitle-1" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Start a new project with BaSyx"),
                                    unref(mdAndUp) ? (openBlock(), createBlock("span", { key: 0 }, [
                                      createTextVNode(" - "),
                                      createVNode(VKbd, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Digital Twins")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" tailored to your needs.")
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VOverlay, {
                              opacity: ".12",
                              scrim: "primary",
                              contained: "",
                              "model-value": "",
                              persistent: ""
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(links.value, (link) => {
                      return openBlock(), createBlock(VCol, {
                        key: link.id,
                        cols: "12",
                        xs: "12",
                        sm: "12",
                        md: "6",
                        class: unref(mdAndUp) ? "" : "py-1"
                      }, {
                        default: withCtx(() => [
                          link.id !== 2 ? (openBlock(), createBlock(VCard, {
                            key: 0,
                            class: "py-2",
                            color: "surface-variant",
                            href: link.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            rounded: "lg",
                            variant: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItem, {
                                class: "text-left",
                                "prepend-icon": link.icon,
                                "append-icon": "mdi-open-in-new",
                                lines: "one"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h6 font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(link.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "text-caption text-md-subtitle-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(link.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["prepend-icon"]),
                              createVNode(VOverlay, {
                                opacity: ".06",
                                scrim: "primary",
                                contained: "",
                                "model-value": "",
                                persistent: ""
                              }),
                              createVNode(VTooltip, {
                                activator: "parent",
                                "open-delay": 600,
                                location: link.location,
                                "aria-label": `Tooltip for ${link.title}`
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "font-weight-bold" }, toDisplayString(link.title), 1),
                                  createVNode("div", null, toDisplayString(link.subtitle), 1)
                                ]),
                                _: 2
                              }, 1032, ["location", "aria-label"])
                            ]),
                            _: 2
                          }, 1032, ["href"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="v-bg position-absolute top-0 right-0 left-0 bottom-0" data-v-d8c62b23${_scopeId}><div aria-hidden="true" class="overflow-hidden opacity-20 w-100 h-100" data-v-d8c62b23${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-100 w-lg-80 w-xl-50 w-xxl-50 text-center" }, [
                createVNode("div", { class: "d-flex justify-center mb-4" }, [
                  createVNode(VImg, {
                    height: unref(mdAndUp) ? 150 : 80,
                    width: unref(mdAndUp) ? 150 : 80,
                    src: _imports_0,
                    alt: "BaSyx Logo",
                    "aspect-ratio": "1"
                  }, null, 8, ["height", "width"])
                ]),
                createVNode("h1", { class: "text-h4 text-md-h2 font-weight-bold my-6" }, "Eclipse BaSyx™"),
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "py-2",
                          color: "surface-variant",
                          rounded: "lg",
                          variant: "outlined",
                          to: "/get-started/introduction",
                          onClick: ($event) => resetStore()
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-rocket-launch-outline",
                              class: "text-left py-0",
                              lines: "one"
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_AAS_Logo, {
                                  "fill-color": isDark.value ? "#A3A3A3" : "#424242"
                                }, null, 8, ["fill-color"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h5 font-weight-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Get Started")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, { class: "text-subtitle-2 text-md-subtitle-1" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Start a new project with BaSyx"),
                                    unref(mdAndUp) ? (openBlock(), createBlock("span", { key: 0 }, [
                                      createTextVNode(" - "),
                                      createVNode(VKbd, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Digital Twins")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" tailored to your needs.")
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VOverlay, {
                              opacity: ".12",
                              scrim: "primary",
                              contained: "",
                              "model-value": "",
                              persistent: ""
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(links.value, (link) => {
                      return openBlock(), createBlock(VCol, {
                        key: link.id,
                        cols: "12",
                        xs: "12",
                        sm: "12",
                        md: "6",
                        class: unref(mdAndUp) ? "" : "py-1"
                      }, {
                        default: withCtx(() => [
                          link.id !== 2 ? (openBlock(), createBlock(VCard, {
                            key: 0,
                            class: "py-2",
                            color: "surface-variant",
                            href: link.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            rounded: "lg",
                            variant: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItem, {
                                class: "text-left",
                                "prepend-icon": link.icon,
                                "append-icon": "mdi-open-in-new",
                                lines: "one"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-subtitle-1 text-md-h6 font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(link.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "text-caption text-md-subtitle-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(link.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["prepend-icon"]),
                              createVNode(VOverlay, {
                                opacity: ".06",
                                scrim: "primary",
                                contained: "",
                                "model-value": "",
                                persistent: ""
                              }),
                              createVNode(VTooltip, {
                                activator: "parent",
                                "open-delay": 600,
                                location: link.location,
                                "aria-label": `Tooltip for ${link.title}`
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "font-weight-bold" }, toDisplayString(link.title), 1),
                                  createVNode("div", null, toDisplayString(link.subtitle), 1)
                                ]),
                                _: 2
                              }, 1032, ["location", "aria-label"])
                            ]),
                            _: 2
                          }, 1032, ["href"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "v-bg position-absolute top-0 right-0 left-0 bottom-0" }, [
                  createVNode("div", {
                    "aria-hidden": "true",
                    class: "overflow-hidden opacity-20 w-100 h-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StartPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-d8c62b23"]]), { __name: "StartPage" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_StartPage = __nuxt_component_0;
  _push(ssrRenderComponent(_component_StartPage, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B8MQJJRa.mjs.map
