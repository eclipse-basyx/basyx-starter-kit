import { _ as __nuxt_component_0 } from './ContactUs-BNz_IoyV.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { bz as useSeoMeta, b0 as useAppStore, m as VIcon, k as VBtn } from './server.mjs';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
import { V as VBreadcrumbs } from './VBreadcrumbs-Cwgk5YXB.mjs';
import { V as VAlert } from './VAlert-Bcj1ynP6.mjs';
import { a as VRow, V as VCol } from './VRow-DT77qovv.mjs';
import { V as VDivider } from './VDivider-D2ayNrXO.mjs';
import './VCard-BMbud2FD.mjs';
import './VCardActions-_afJsMdG.mjs';
import './VSpacer-D_joSj59.mjs';
import './VChip-hjpRim43.mjs';
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
    name: "Introduction"
  },
  __name: "introduction",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Introduction | Eclipse BaSyx™",
      ogTitle: "Introduction | Eclipse BaSyx™"
    });
    useAppStore();
    const breadcrumbs = ref([
      { title: "Home", to: "/" },
      { title: "Get Started", to: "/get-started/introduction" },
      { title: "Introduction", to: "/get-started/introduction" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactUs = __nuxt_component_0;
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
            _push2(`<h1 class="mb-8 text-header"${_scopeId}>Introduction</h1>`);
            _push2(ssrRenderComponent(VAlert, {
              color: "alertCard",
              class: "mb-6"
            }, {
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
                              _push5(`<div class="font-weight-medium text-header"${_scopeId4}>BaSyx Interactive Configuration</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "font-weight-medium text-header" }, "BaSyx Interactive Configuration")
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
                              createVNode("div", { class: "font-weight-medium text-header" }, "BaSyx Interactive Configuration")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<ul class="ms-6 mt-2"${_scopeId2}><li class="font-weight-medium text-subheader"${_scopeId2}> The Starter Kit now supports BaSyx Go. For migration support from BaSyx Java, send us a <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="mailto:basyx-dev@eclipse.org"${_scopeId2}>mail</a>. </li><li class="font-weight-medium text-subheader"${_scopeId2}>New to BaSyx? You are in the right place!</li></ul>`);
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
                            createVNode("div", { class: "font-weight-medium text-header" }, "BaSyx Interactive Configuration")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("ul", { class: "ms-6 mt-2" }, [
                      createVNode("li", { class: "font-weight-medium text-subheader" }, [
                        createTextVNode(" The Starter Kit now supports BaSyx Go. For migration support from BaSyx Java, send us a "),
                        createVNode("a", {
                          class: "text-primary",
                          style: { "text-decoration": "none" },
                          href: "mailto:basyx-dev@eclipse.org"
                        }, "mail"),
                        createTextVNode(". ")
                      ]),
                      createVNode("li", { class: "font-weight-medium text-subheader" }, "New to BaSyx? You are in the right place!")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ContactUs, { class: "mt-3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "mt-12 mb-8" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-header"${_scopeId}>BaSyx Starter Kit</h2><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> The BaSyx Starter Kit guides you through a short set of decisions and generates a ready-to-run setup with Docker Compose, infrastructure configuration and optional visualization add-ons. </p>`);
            _push2(ssrRenderComponent(VRow, {
              justify: "center",
              class: "mt-5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "tonal",
                          color: "primary",
                          "append-icon": "mdi-rocket-launch",
                          size: "large",
                          to: "/get-started/application"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Let&#39;s start`);
                            } else {
                              return [
                                createTextVNode("Let's start")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "primary",
                            "append-icon": "mdi-rocket-launch",
                            size: "large",
                            to: "/get-started/application"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Let's start")
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
                    createVNode(VCol, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "tonal",
                          color: "primary",
                          "append-icon": "mdi-rocket-launch",
                          size: "large",
                          to: "/get-started/application"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Let's start")
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
            _push2(ssrRenderComponent(VDivider, { class: "mt-12 mb-8" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-header"${_scopeId}>What is BaSyx?</h2><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> Eclipse BaSyx is an Open Source framework designed to facilitate the development and use of Digital Twins in the context of Industry 4.0. At its core, BaSyx serves as a middleware that bridges the gap between assets and their digital representations. </p><p class="text-normalText mt-3 mb-2 text-subtitle-1"${_scopeId}> With a strong focus on interoperability, BaSyx supports the <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://industrialdigitaltwin.org/en/content-hub/aasspecifications" target="_blank"${_scopeId}>Asset Administration Shell (AAS)</a>, a key enabler for the use of standardized Digital Twins. This enables the creation of detailed digital representations that reflect the characteristics and behavior of their real-world counterparts, providing a unified interface for their management and integration into digital ecosystems. </p>`);
            _push2(ssrRenderComponent(VDivider, { class: "mt-12 mb-8" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-header"${_scopeId}>Off-the-Shelf Components</h2><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> Eclipse BaSyx simplifies the journey towards Industry 4.0 with its Off-the-Shelf components, designed to jumpstart the deployment of Digital Twins and their integration into digital ecosystems. Available for direct download from <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://hub.docker.com/u/eclipsebasyx" target="_blank"${_scopeId}>Docker Hub</a>, these components offer a ready-to-use foundation that can be customised to meet your requirements. </p><p class="text-normalText mt-3 mb-8 text-subtitle-1"${_scopeId}> These components are containerised, making them highly portable and easy to deploy in a variety of environments, from local development setups to cloud-based platforms. </p><h2 class="text-header"${_scopeId}>Prerequisites</h2>`);
            _push2(ssrRenderComponent(VAlert, {
              color: "primary",
              variant: "outlined",
              class: "bg-alertCard mb-8 mt-8"
            }, {
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
                              _push5(ssrRenderComponent(VIcon, { color: "primary" }, {
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
                                createVNode(VIcon, { color: "primary" }, {
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
                              _push5(`<div class="font-weight-medium text-header"${_scopeId4}>Docker required</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "font-weight-medium text-header" }, "Docker required")
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
                              createVNode(VIcon, { color: "primary" }, {
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
                              createVNode("div", { class: "font-weight-medium text-header" }, "Docker required")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-subheader font-weight-medium ms-0 ms-sm-12 mt-2"${_scopeId2}> To deploy BaSyx components, install <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://docs.docker.com/get-docker/" target="_blank"${_scopeId2}>Docker</a> first. </p>`);
                } else {
                  return [
                    createVNode(VRow, { align: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "auto",
                          class: "pr-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { color: "primary" }, {
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
                            createVNode("div", { class: "font-weight-medium text-header" }, "Docker required")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-subheader font-weight-medium ms-0 ms-sm-12 mt-2" }, [
                      createTextVNode(" To deploy BaSyx components, install "),
                      createVNode("a", {
                        class: "text-primary",
                        style: { "text-decoration": "none" },
                        href: "https://docs.docker.com/get-docker/",
                        target: "_blank"
                      }, "Docker"),
                      createTextVNode(" first. ")
                    ])
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
              createVNode("h1", { class: "mb-8 text-header" }, "Introduction"),
              createVNode(VAlert, {
                color: "alertCard",
                class: "mb-6"
              }, {
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
                          createVNode("div", { class: "font-weight-medium text-header" }, "BaSyx Interactive Configuration")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("ul", { class: "ms-6 mt-2" }, [
                    createVNode("li", { class: "font-weight-medium text-subheader" }, [
                      createTextVNode(" The Starter Kit now supports BaSyx Go. For migration support from BaSyx Java, send us a "),
                      createVNode("a", {
                        class: "text-primary",
                        style: { "text-decoration": "none" },
                        href: "mailto:basyx-dev@eclipse.org"
                      }, "mail"),
                      createTextVNode(". ")
                    ]),
                    createVNode("li", { class: "font-weight-medium text-subheader" }, "New to BaSyx? You are in the right place!")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ContactUs, { class: "mt-3" }),
              createVNode(VDivider, { class: "mt-12 mb-8" }),
              createVNode("h2", { class: "text-header" }, "BaSyx Starter Kit"),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, " The BaSyx Starter Kit guides you through a short set of decisions and generates a ready-to-run setup with Docker Compose, infrastructure configuration and optional visualization add-ons. "),
              createVNode(VRow, {
                justify: "center",
                class: "mt-5"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "tonal",
                        color: "primary",
                        "append-icon": "mdi-rocket-launch",
                        size: "large",
                        to: "/get-started/application"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Let's start")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "mt-12 mb-8" }),
              createVNode("h2", { class: "text-header" }, "What is BaSyx?"),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, " Eclipse BaSyx is an Open Source framework designed to facilitate the development and use of Digital Twins in the context of Industry 4.0. At its core, BaSyx serves as a middleware that bridges the gap between assets and their digital representations. "),
              createVNode("p", { class: "text-normalText mt-3 mb-2 text-subtitle-1" }, [
                createTextVNode(" With a strong focus on interoperability, BaSyx supports the "),
                createVNode("a", {
                  class: "text-primary",
                  style: { "text-decoration": "none" },
                  href: "https://industrialdigitaltwin.org/en/content-hub/aasspecifications",
                  target: "_blank"
                }, "Asset Administration Shell (AAS)"),
                createTextVNode(", a key enabler for the use of standardized Digital Twins. This enables the creation of detailed digital representations that reflect the characteristics and behavior of their real-world counterparts, providing a unified interface for their management and integration into digital ecosystems. ")
              ]),
              createVNode(VDivider, { class: "mt-12 mb-8" }),
              createVNode("h2", { class: "text-header" }, "Off-the-Shelf Components"),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, [
                createTextVNode(" Eclipse BaSyx simplifies the journey towards Industry 4.0 with its Off-the-Shelf components, designed to jumpstart the deployment of Digital Twins and their integration into digital ecosystems. Available for direct download from "),
                createVNode("a", {
                  class: "text-primary",
                  style: { "text-decoration": "none" },
                  href: "https://hub.docker.com/u/eclipsebasyx",
                  target: "_blank"
                }, "Docker Hub"),
                createTextVNode(", these components offer a ready-to-use foundation that can be customised to meet your requirements. ")
              ]),
              createVNode("p", { class: "text-normalText mt-3 mb-8 text-subtitle-1" }, " These components are containerised, making them highly portable and easy to deploy in a variety of environments, from local development setups to cloud-based platforms. "),
              createVNode("h2", { class: "text-header" }, "Prerequisites"),
              createVNode(VAlert, {
                color: "primary",
                variant: "outlined",
                class: "bg-alertCard mb-8 mt-8"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "auto",
                        class: "pr-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { color: "primary" }, {
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
                          createVNode("div", { class: "font-weight-medium text-header" }, "Docker required")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-subheader font-weight-medium ms-0 ms-sm-12 mt-2" }, [
                    createTextVNode(" To deploy BaSyx components, install "),
                    createVNode("a", {
                      class: "text-primary",
                      style: { "text-decoration": "none" },
                      href: "https://docs.docker.com/get-docker/",
                      target: "_blank"
                    }, "Docker"),
                    createTextVNode(" first. ")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/get-started/introduction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=introduction-jaNvu52W.mjs.map
