import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { bz as useSeoMeta, m as VIcon, k as VBtn } from './server.mjs';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
import { V as VBreadcrumbs } from './VBreadcrumbs-Cwgk5YXB.mjs';
import { V as VAlert } from './VAlert-Bcj1ynP6.mjs';
import { a as VRow, V as VCol } from './VRow-DT77qovv.mjs';
import { V as VCardActions } from './VCardActions-_afJsMdG.mjs';
import { V as VSpacer } from './VSpacer-D_joSj59.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ABAC"
  },
  __name: "access-control",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Access Control | Eclipse BaSyx™",
      ogTitle: "Access Control | Eclipse BaSyx™"
    });
    const breadcrumbs = ref([
      { title: "Home", to: "/" },
      { title: "Get Started", to: "/get-started/introduction" },
      { title: "Access Control", to: "/get-started/deployment/access-control" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "py-0 px-4 px-sm-8 px-md-12",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBreadcrumbs, {
              class: "px-0 pb-0 text-body-2 mb-3",
              divider: "›",
              items: breadcrumbs.value
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="mb-8 text-header"${_scopeId}>Attribute Based Access Control</h1>`);
            _push2(ssrRenderComponent(VAlert, { color: "alertCard" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { align: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "auto",
                          class: "pr-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { color: "subheader" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-alert-circle-outline`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-alert-circle-outline")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { color: "subheader" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-alert-circle-outline")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="font-weight-medium text-header"${_scopeId4}>Notice</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "font-weight-medium text-header" }, "Notice")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "auto",
                            class: "pr-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { color: "subheader" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-alert-circle-outline")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "font-weight-medium text-header" }, "Notice")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-subheader font-weight-medium ms-0 ms-sm-12 mt-2"${_scopeId2}> This starter does not auto-generate a complete ABAC security policy yet. By default, generated services start with <code${_scopeId2}>ABAC_ENABLED=false</code>. </p>`);
                } else {
                  return [
                    createVNode(VRow, { align: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "auto",
                          class: "pr-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { color: "subheader" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-alert-circle-outline")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "font-weight-medium text-header" }, "Notice")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-subheader font-weight-medium ms-0 ms-sm-12 mt-2" }, [
                      createTextVNode(" This starter does not auto-generate a complete ABAC security policy yet. By default, generated services start with "),
                      createVNode("code", null, "ABAC_ENABLED=false"),
                      createTextVNode(". ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> BaSyx Go supports ABAC-based protection and OIDC trust configuration across core services. Enable ABAC in production by mounting policy/trust files and setting ABAC-related environment variables according to your security model. </p>`);
            _push2(ssrRenderComponent(VCardActions, { class: "px-0 mb-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    "prepend-icon": "mdi-arrow-left",
                    to: "/get-started/deployment/container-config"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Back`);
                      } else {
                        return [
                          createTextVNode("Back")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    color: "primary",
                    "append-icon": "mdi-flag-checkered",
                    to: "/get-started/download"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`finalize`);
                      } else {
                        return [
                          createTextVNode("finalize")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      variant: "tonal",
                      "prepend-icon": "mdi-arrow-left",
                      to: "/get-started/deployment/container-config"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Back")
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "tonal",
                      color: "primary",
                      "append-icon": "mdi-flag-checkered",
                      to: "/get-started/download"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("finalize")
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
              createVNode(VBreadcrumbs, {
                class: "px-0 pb-0 text-body-2 mb-3",
                divider: "›",
                items: breadcrumbs.value
              }, null, 8, ["items"]),
              createVNode("h1", { class: "mb-8 text-header" }, "Attribute Based Access Control"),
              createVNode(VAlert, { color: "alertCard" }, {
                default: withCtx(() => [
                  createVNode(VRow, { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "auto",
                        class: "pr-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { color: "subheader" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-alert-circle-outline")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "font-weight-medium text-header" }, "Notice")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-subheader font-weight-medium ms-0 ms-sm-12 mt-2" }, [
                    createTextVNode(" This starter does not auto-generate a complete ABAC security policy yet. By default, generated services start with "),
                    createVNode("code", null, "ABAC_ENABLED=false"),
                    createTextVNode(". ")
                  ])
                ]),
                _: 1
              }),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, " BaSyx Go supports ABAC-based protection and OIDC trust configuration across core services. Enable ABAC in production by mounting policy/trust files and setting ABAC-related environment variables according to your security model. "),
              createVNode(VCardActions, { class: "px-0 mb-8" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "tonal",
                    "prepend-icon": "mdi-arrow-left",
                    to: "/get-started/deployment/container-config"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back")
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    variant: "tonal",
                    color: "primary",
                    "append-icon": "mdi-flag-checkered",
                    to: "/get-started/download"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("finalize")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/get-started/deployment/access-control.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=access-control-B0HSoQMF.mjs.map
