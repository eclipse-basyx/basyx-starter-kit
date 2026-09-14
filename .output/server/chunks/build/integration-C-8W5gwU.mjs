import { bz as useSeoMeta, b0 as useAppStore, _ as __nuxt_component_0$1, m as VIcon, k as VBtn, a5 as genericComponent, aX as provideTheme, b5 as useDensity, bp as useRender, J as convertToUnit, aV as propsFactory, aH as makeThemeProps, aG as makeTagProps, aq as makeDensityProps, ao as makeComponentProps } from './server.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, normalizeStyle, normalizeClass, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
import { V as VBreadcrumbs } from './VBreadcrumbs-Cwgk5YXB.mjs';
import { V as VKbd } from './VKbd-jkyggUsO.mjs';
import { V as VAlert } from './VAlert-Bcj1ynP6.mjs';
import { V as VDivider } from './VDivider-D2ayNrXO.mjs';
import { a as VRow, V as VCol } from './VRow-DT77qovv.mjs';
import { V as VCardActions } from './VCardActions-_afJsMdG.mjs';
import { V as VSpacer } from './VSpacer-D_joSj59.mjs';
import { V as VFileInput } from './VFileInput-qhs4IC6M.mjs';
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
import './VField-CBPZxNBP.mjs';
import './VInput-CF1s2jmS.mjs';
import './VChip-hjpRim43.mjs';

const makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  striped: {
    type: String,
    default: null,
    validator: (v) => ["even", "odd"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTable");
const VTable = genericComponent()({
  name: "VTable",
  props: makeVTableProps(),
  setup(props, {
    slots,
    emit
  }) {
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-table", {
        "v-table--fixed-height": !!props.height,
        "v-table--fixed-header": props.fixedHeader,
        "v-table--fixed-footer": props.fixedFooter,
        "v-table--has-top": !!slots.top,
        "v-table--has-bottom": !!slots.bottom,
        "v-table--hover": props.hover,
        "v-table--striped-even": props.striped === "even",
        "v-table--striped-odd": props.striped === "odd"
      }, themeClasses.value, densityClasses.value, props.class]),
      "style": normalizeStyle(props.style)
    }, {
      default: () => [slots.top?.(), slots.default ? createElementVNode("div", {
        "class": "v-table__wrapper",
        "style": {
          height: convertToUnit(props.height)
        }
      }, [createElementVNode("table", null, [slots.default()])]) : slots.wrapper?.(), slots.bottom?.()]
    }));
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Integration"
  },
  __name: "integration",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "AAS Integration | Eclipse BaSyx™",
      ogTitle: "AAS Integration | Eclipse BaSyx™"
    });
    const appStore = useAppStore();
    const breadcrumbs = ref([
      { title: "Home", to: "/" },
      { title: "Get Started", to: "/get-started/introduction" },
      { title: "AAS Integration", to: "/get-started/deployment/integration" }
    ]);
    const aasFilesInput = ref(void 0);
    const uploadedAasFiles = ref([]);
    const aasFilesStore = computed(() => appStore.getAasFiles);
    function areFilesEqual(left, right) {
      return left.name === right.name && left.size === right.size && left.type === right.type && left.lastModified === right.lastModified;
    }
    function areFileListsEqual(left, right) {
      if (!left && !right) {
        return true;
      }
      const leftFiles = left || [];
      const rightFiles = right || [];
      if (leftFiles.length !== rightFiles.length) {
        return false;
      }
      return leftFiles.every((file, index) => {
        const rightFile = rightFiles[index];
        return rightFile ? areFilesEqual(file, rightFile) : false;
      });
    }
    watch(
      uploadedAasFiles,
      (newVal) => {
        const nextStoreFiles = newVal.length > 0 ? [...newVal] : void 0;
        if (!areFileListsEqual(aasFilesStore.value, nextStoreFiles)) {
          appStore.setAasFiles(nextStoreFiles);
        }
      },
      { deep: true }
    );
    watch(
      aasFilesStore,
      (files) => {
        const nextLocalFiles = files ? [...files] : [];
        if (!areFileListsEqual(uploadedAasFiles.value, nextLocalFiles)) {
          uploadedAasFiles.value = nextLocalFiles;
        }
      },
      { immediate: true }
    );
    function uploadAasFiles() {
      if (aasFilesInput.value) {
        uploadedAasFiles.value.push(...aasFilesInput.value);
        aasFilesInput.value = void 0;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
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
            _push2(`<h1 class="mb-8 text-header"${_scopeId}>AAS Integration</h1><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> During this step, you are able to provide your own Asset Administration Shell files. They will be included automatically when you start BaSyx after you finished this setup process. Supported AAS file formats are `);
            _push2(ssrRenderComponent(VKbd, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`AASX`);
                } else {
                  return [
                    createTextVNode("AASX")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, `);
            _push2(ssrRenderComponent(VKbd, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`XML`);
                } else {
                  return [
                    createTextVNode("XML")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` and `);
            _push2(ssrRenderComponent(VKbd, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`JSON`);
                } else {
                  return [
                    createTextVNode("JSON")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`. </p>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAlert, {
                    color: "primary",
                    variant: "outlined",
                    class: "bg-alertCard mt-8 mb-8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Loading AAS upload settings... `);
                      } else {
                        return [
                          createTextVNode(" Loading AAS upload settings... ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAlert, {
                      color: "primary",
                      variant: "outlined",
                      class: "bg-alertCard mt-8 mb-8"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Loading AAS upload settings... ")
                      ]),
                      _: 1
                    })
                  ];
                }
              })
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "mt-12 mb-8" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-header"${_scopeId}>BaSyx Component Integrations</h2><p class="text-normalText mt-8 mb-8 text-subtitle-1"${_scopeId}> One advantage of BaSyx is the integration of components with each other. This includes but is not limited to the automatic registration of Digital Twins after they are added to the environment. </p>`);
            _push2(ssrRenderComponent(VAlert, {
              color: "alertCard",
              class: "mb-8"
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
                              _push5(`<div class="font-weight-medium text-header"${_scopeId4}>Important note</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "font-weight-medium text-header" }, "Important note")
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
                              createVNode("div", { class: "font-weight-medium text-header" }, "Important note")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-subheader font-weight-medium ms-0 ms-sm-12 mt-2"${_scopeId2}> Registry and discovery integrations are configured in the Application step and are enabled by default (opt-out). This page focuses on preloading your AAS files. </p>`);
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
                            createVNode("div", { class: "font-weight-medium text-header" }, "Important note")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-subheader font-weight-medium ms-0 ms-sm-12 mt-2" }, " Registry and discovery integrations are configured in the Application step and are enabled by default (opt-out). This page focuses on preloading your AAS files. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardActions, { class: "px-0 mb-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "tonal",
                    "prepend-icon": "mdi-arrow-left",
                    to: "/get-started/visualization/corporate-design"
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
                    "append-icon": "mdi-arrow-right",
                    to: "/get-started/deployment/container-config"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Next`);
                      } else {
                        return [
                          createTextVNode("Next")
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
                      to: "/get-started/visualization/corporate-design"
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
                      "append-icon": "mdi-arrow-right",
                      to: "/get-started/deployment/container-config"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Next")
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
              createVNode("h1", { class: "mb-8 text-header" }, "AAS Integration"),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, [
                createTextVNode(" During this step, you are able to provide your own Asset Administration Shell files. They will be included automatically when you start BaSyx after you finished this setup process. Supported AAS file formats are "),
                createVNode(VKbd, null, {
                  default: withCtx(() => [
                    createTextVNode("AASX")
                  ]),
                  _: 1
                }),
                createTextVNode(", "),
                createVNode(VKbd, null, {
                  default: withCtx(() => [
                    createTextVNode("XML")
                  ]),
                  _: 1
                }),
                createTextVNode(" and "),
                createVNode(VKbd, null, {
                  default: withCtx(() => [
                    createTextVNode("JSON")
                  ]),
                  _: 1
                }),
                createTextVNode(". ")
              ]),
              createVNode(_component_ClientOnly, null, {
                fallback: withCtx(() => [
                  createVNode(VAlert, {
                    color: "primary",
                    variant: "outlined",
                    class: "bg-alertCard mt-8 mb-8"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Loading AAS upload settings... ")
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(VFileInput, {
                    modelValue: aasFilesInput.value,
                    "onUpdate:modelValue": [($event) => aasFilesInput.value = $event, ($event) => uploadAasFiles()],
                    variant: "solo-filled",
                    "prepend-inner-icon": "$file",
                    "prepend-icon": "",
                    label: "AAS File Upload",
                    density: "compact",
                    multiple: "",
                    accept: [".aasx", ".xml", ".json"]
                  }, {
                    "append-inner": withCtx(() => [
                      createVNode(VBtn, {
                        size: "small",
                        variant: "tonal",
                        color: "primary",
                        style: { "right": "-4px" },
                        onClick: withModifiers(($event) => uploadAasFiles(), ["stop"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Upload")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  uploadedAasFiles.value.length > 0 ? (openBlock(), createBlock(VTable, {
                    key: 0,
                    style: { "border-radius": "4px" }
                  }, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "bg-tableOdd" }, [
                          createVNode("th", { class: "text-subtitle-1" }, "Name"),
                          createVNode("th", { class: "text-subtitle-1" }, "Format"),
                          createVNode("th", {
                            style: { "text-align": "right" },
                            class: "text-subtitle-1"
                          }, "Size"),
                          createVNode("th", { style: { "text-align": "right" } })
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(uploadedAasFiles.value, (aasFile, index) => {
                          return openBlock(), createBlock("tr", {
                            key: aasFile.name,
                            class: index % 2 === 0 ? "tableEven" : "bg-tableOdd"
                          }, [
                            createVNode("td", null, toDisplayString(aasFile?.name.split(".").slice(0, -1).join(".")), 1),
                            createVNode("td", null, toDisplayString(aasFile?.name && aasFile.name.includes(".") ? aasFile.name.split(".").pop()?.toUpperCase() : ""), 1),
                            createVNode("td", { style: { "text-align": "right" } }, toDisplayString(Math.round(aasFile.size / 1024)) + " KB", 1),
                            createVNode("td", { style: { "text-align": "right" } }, [
                              createVNode(VBtn, {
                                icon: "",
                                variant: "plain",
                                size: "small",
                                onClick: ($event) => uploadedAasFiles.value.splice(index, 1)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-delete")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ], 2);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "mt-12 mb-8" }),
              createVNode("h2", { class: "text-header" }, "BaSyx Component Integrations"),
              createVNode("p", { class: "text-normalText mt-8 mb-8 text-subtitle-1" }, " One advantage of BaSyx is the integration of components with each other. This includes but is not limited to the automatic registration of Digital Twins after they are added to the environment. "),
              createVNode(VAlert, {
                color: "alertCard",
                class: "mb-8"
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
                          createVNode("div", { class: "font-weight-medium text-header" }, "Important note")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-subheader font-weight-medium ms-0 ms-sm-12 mt-2" }, " Registry and discovery integrations are configured in the Application step and are enabled by default (opt-out). This page focuses on preloading your AAS files. ")
                ]),
                _: 1
              }),
              createVNode(VCardActions, { class: "px-0 mb-8" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "tonal",
                    "prepend-icon": "mdi-arrow-left",
                    to: "/get-started/visualization/corporate-design"
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
                    "append-icon": "mdi-arrow-right",
                    to: "/get-started/deployment/container-config"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Next")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/get-started/deployment/integration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=integration-C-8W5gwU.mjs.map
