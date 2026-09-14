import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { bz as useSeoMeta, b0 as useAppStore, k as VBtn } from './server.mjs';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
import { V as VBreadcrumbs } from './VBreadcrumbs-Cwgk5YXB.mjs';
import { V as VAlert } from './VAlert-Bcj1ynP6.mjs';
import { a as VList } from './filter-C4RZVAII.mjs';
import { V as VListItem } from './VListItem-DqdlKWJZ.mjs';
import { V as VKbd } from './VKbd-jkyggUsO.mjs';
import { V as VDivider } from './VDivider-D2ayNrXO.mjs';
import { V as VSwitch } from './VSwitch-CzKEuP1X.mjs';
import { a as VSelect } from './VSelect-Dg8iXqNr.mjs';
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
import './ssrBoot-BRsRdwag.mjs';
import './VSelectionControl-BgxnoM3f.mjs';
import './VInput-CF1s2jmS.mjs';
import './VTextField-CmLAcn2i.mjs';
import './autofocus-DXczjZSo.mjs';
import './VField-CBPZxNBP.mjs';
import './VSheet-Cs8-m1MJ.mjs';
import './VChip-hjpRim43.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "UI"
  },
  __name: "ui",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "AAS User Interface | Eclipse BaSyx™",
      ogTitle: "AAS User Interface | Eclipse BaSyx™"
    });
    const appStore = useAppStore();
    const breadcrumbs = ref([
      { title: "Home", to: "/" },
      { title: "Get Started", to: "/get-started/introduction" },
      { title: "AAS User Interface", to: "/get-started/visualization/ui" }
    ]);
    const endpointConfigAvailable = ref(false);
    const allowEditing = ref(true);
    const allowUploading = ref(true);
    const allowLogout = ref(true);
    const smViewerEditor = ref(true);
    const startPageRouteName = ref("AASViewer");
    const basyxConfig = computed(() => appStore.getBasyxConfig);
    const isTimeSeriesDataEnabled = computed(() => appStore.getTimeSeriesData);
    const dockerComposeConfigObject = computed(() => appStore.getDockerComposeConfig);
    watch(
      () => dockerComposeConfigObject.value?.value,
      () => {
        ensureUIService();
        syncBehaviorSettingsFromCompose();
      },
      { immediate: true }
    );
    function syncBehaviorSettingsFromCompose() {
      const compose = dockerComposeConfigObject.value?.value;
      if (compose && typeof compose === "object" && "services" in compose) {
        const services = compose.services;
        const ui = services["aas-ui"];
        if (ui?.environment && !Array.isArray(ui.environment)) {
          endpointConfigAvailable.value = ui.environment.ENDPOINT_CONFIG_AVAILABLE === "true";
          allowEditing.value = ui.environment.ALLOW_EDITING !== "false";
          allowUploading.value = ui.environment.ALLOW_UPLOADING !== "false";
          allowLogout.value = ui.environment.ALLOW_LOGOUT !== "false";
          smViewerEditor.value = ui.environment.SM_VIEWER_EDITOR !== "false";
          startPageRouteName.value = ui.environment.START_PAGE_ROUTE_NAME || "AASViewer";
        }
      }
    }
    function readInfluxTokenFromCompose(services) {
      const influxService = services.influxdb;
      if (!influxService?.environment) {
        return void 0;
      }
      if (Array.isArray(influxService.environment)) {
        const entry = influxService.environment.find(
          (item) => item.startsWith("DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=")
        );
        return entry ? entry.split("=").slice(1).join("=") : void 0;
      }
      return influxService.environment.DOCKER_INFLUXDB_INIT_ADMIN_TOKEN;
    }
    function ensureUIService() {
      if (dockerComposeConfigObject.value?.value && typeof dockerComposeConfigObject.value.value === "object") {
        const localDockerComposeConfig = { ...dockerComposeConfigObject.value };
        const dockerComposeConfig = localDockerComposeConfig.value;
        if (!dockerComposeConfig.services["aas-ui"]) {
          const env = {
            ENDPOINT_CONFIG_AVAILABLE: "false",
            ALLOW_EDITING: "true",
            ALLOW_UPLOADING: "true",
            ALLOW_LOGOUT: "true",
            SM_VIEWER_EDITOR: "true"
          };
          if (isTimeSeriesDataEnabled.value) {
            const token = readInfluxTokenFromCompose(dockerComposeConfig.services);
            if (token) {
              env.INFLUXDB_TOKEN = token;
            }
          }
          dockerComposeConfig.services["aas-ui"] = {
            image: "eclipsebasyx/aas-gui:latest",
            container_name: "aas-web-ui",
            pull_policy: "always",
            ports: ["3000:3000"],
            volumes: ["./basyx-infra.yml:/basyx-infra.yml:ro"],
            environment: env,
            restart: "unless-stopped",
            depends_on: {
              "aas-environment": {
                condition: "service_started"
              }
            }
          };
          localDockerComposeConfig.value = dockerComposeConfig;
          appStore.setDockerComposeConfig(localDockerComposeConfig);
        }
      }
      appStore.updateUserInterface(true);
      const updatedBasyxConfig = [...basyxConfig.value];
      if (!updatedBasyxConfig.some((item) => item.id === "comp-aas-ui")) {
        updatedBasyxConfig.push({
          id: "comp-aas-ui",
          title: "AAS Web UI",
          children: [
            { id: "ovw-aas-ui-summary", title: "Runtime & Access", type: "overview" },
            { id: "ovw-aas-ui-behavior", title: "Behavior Settings", type: "overview" },
            { id: "ovw-aas-ui-branding", title: "Corporate Design", type: "overview" },
            {
              id: "ovw-aas-ui-infra",
              title: "Backend Connections",
              type: "overview"
            },
            { id: "cfg-aas-ui", title: "Docker", type: "config" },
            { id: "cfg-basyx-infra", title: "Infrastructure Config", type: "config" }
          ]
        });
        appStore.updateBasyxConfig(updatedBasyxConfig);
      }
    }
    function applyBehaviorSettings() {
      if (!dockerComposeConfigObject.value?.value || typeof dockerComposeConfigObject.value.value !== "object") {
        return;
      }
      const localDockerComposeConfig = { ...dockerComposeConfigObject.value };
      const dockerComposeConfig = localDockerComposeConfig.value;
      const service = dockerComposeConfig.services["aas-ui"];
      if (!service) {
        return;
      }
      if (!service.environment) {
        service.environment = {};
      }
      if (Array.isArray(service.environment)) {
        service.environment = {};
      }
      service.environment.ENDPOINT_CONFIG_AVAILABLE = String(endpointConfigAvailable.value);
      service.environment.ALLOW_EDITING = String(allowEditing.value);
      service.environment.ALLOW_UPLOADING = String(allowUploading.value);
      service.environment.ALLOW_LOGOUT = String(allowLogout.value);
      service.environment.SM_VIEWER_EDITOR = String(smViewerEditor.value);
      service.environment.START_PAGE_ROUTE_NAME = startPageRouteName.value;
      localDockerComposeConfig.value = dockerComposeConfig;
      appStore.setDockerComposeConfig(localDockerComposeConfig);
    }
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
            _push2(`<h1 class="mb-8 text-header"${_scopeId}>AAS Web User Interface</h1><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> Configure how the BaSyx AAS Web UI behaves at runtime. </p><p class="text-normalText mt-3 mb-2 text-subtitle-1"${_scopeId}> The UI reads backend endpoints from <code${_scopeId}>basyx-infra.yml</code> and behavior flags from Docker environment variables. </p>`);
            _push2(ssrRenderComponent(VAlert, {
              color: "alertCard",
              class: "mt-8 mb-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-weight-medium text-header mb-3"${_scopeId2}>Setting overview</div>`);
                  _push3(ssrRenderComponent(VList, {
                    "bg-color": "transparent",
                    density: "compact",
                    class: "py-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, null, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VKbd, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`ENDPOINT_CONFIG_AVAILABLE`);
                                  } else {
                                    return [
                                      createTextVNode("ENDPOINT_CONFIG_AVAILABLE")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("ENDPOINT_CONFIG_AVAILABLE")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Allow users to add, edit, and delete infrastructure endpoint definitions in the UI. `);
                            } else {
                              return [
                                createTextVNode(" Allow users to add, edit, and delete infrastructure endpoint definitions in the UI. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, null, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VKbd, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`ALLOW_EDITING`);
                                  } else {
                                    return [
                                      createTextVNode("ALLOW_EDITING")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("ALLOW_EDITING")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Enable or disable AAS and Submodel editor capabilities.`);
                            } else {
                              return [
                                createTextVNode("Enable or disable AAS and Submodel editor capabilities.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, null, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VKbd, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`ALLOW_UPLOADING`);
                                  } else {
                                    return [
                                      createTextVNode("ALLOW_UPLOADING")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("ALLOW_UPLOADING")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Control whether users can upload AAS files through the UI.`);
                            } else {
                              return [
                                createTextVNode("Control whether users can upload AAS files through the UI.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, null, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VKbd, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`ALLOW_LOGOUT`);
                                  } else {
                                    return [
                                      createTextVNode("ALLOW_LOGOUT")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("ALLOW_LOGOUT")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Show or hide logout behavior when authentication is configured. `);
                            } else {
                              return [
                                createTextVNode(" Show or hide logout behavior when authentication is configured. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, null, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VKbd, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`SM_VIEWER_EDITOR`);
                                  } else {
                                    return [
                                      createTextVNode("SM_VIEWER_EDITOR")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("SM_VIEWER_EDITOR")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Enable or disable the standalone Submodel Viewer and Editor.`);
                            } else {
                              return [
                                createTextVNode("Enable or disable the standalone Submodel Viewer and Editor.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, null, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VKbd, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`START_PAGE_ROUTE_NAME`);
                                  } else {
                                    return [
                                      createTextVNode("START_PAGE_ROUTE_NAME")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("START_PAGE_ROUTE_NAME")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Select the initial page such as <code${_scopeId4}>AASViewer</code> or <code${_scopeId4}>AASEditor</code>.`);
                            } else {
                              return [
                                createTextVNode("Select the initial page such as "),
                                createVNode("code", null, "AASViewer"),
                                createTextVNode(" or "),
                                createVNode("code", null, "AASEditor"),
                                createTextVNode(".")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, null, {
                            title: withCtx(() => [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("ENDPOINT_CONFIG_AVAILABLE")
                                ]),
                                _: 1
                              })
                            ]),
                            subtitle: withCtx(() => [
                              createTextVNode(" Allow users to add, edit, and delete infrastructure endpoint definitions in the UI. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            title: withCtx(() => [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("ALLOW_EDITING")
                                ]),
                                _: 1
                              })
                            ]),
                            subtitle: withCtx(() => [
                              createTextVNode("Enable or disable AAS and Submodel editor capabilities.")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            title: withCtx(() => [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("ALLOW_UPLOADING")
                                ]),
                                _: 1
                              })
                            ]),
                            subtitle: withCtx(() => [
                              createTextVNode("Control whether users can upload AAS files through the UI.")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            title: withCtx(() => [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("ALLOW_LOGOUT")
                                ]),
                                _: 1
                              })
                            ]),
                            subtitle: withCtx(() => [
                              createTextVNode(" Show or hide logout behavior when authentication is configured. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            title: withCtx(() => [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("SM_VIEWER_EDITOR")
                                ]),
                                _: 1
                              })
                            ]),
                            subtitle: withCtx(() => [
                              createTextVNode("Enable or disable the standalone Submodel Viewer and Editor.")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            title: withCtx(() => [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("START_PAGE_ROUTE_NAME")
                                ]),
                                _: 1
                              })
                            ]),
                            subtitle: withCtx(() => [
                              createTextVNode("Select the initial page such as "),
                              createVNode("code", null, "AASViewer"),
                              createTextVNode(" or "),
                              createVNode("code", null, "AASEditor"),
                              createTextVNode(".")
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
                    createVNode("div", { class: "font-weight-medium text-header mb-3" }, "Setting overview"),
                    createVNode(VList, {
                      "bg-color": "transparent",
                      density: "compact",
                      class: "py-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, null, {
                          title: withCtx(() => [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("ENDPOINT_CONFIG_AVAILABLE")
                              ]),
                              _: 1
                            })
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode(" Allow users to add, edit, and delete infrastructure endpoint definitions in the UI. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, null, {
                          title: withCtx(() => [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("ALLOW_EDITING")
                              ]),
                              _: 1
                            })
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode("Enable or disable AAS and Submodel editor capabilities.")
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, null, {
                          title: withCtx(() => [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("ALLOW_UPLOADING")
                              ]),
                              _: 1
                            })
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode("Control whether users can upload AAS files through the UI.")
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, null, {
                          title: withCtx(() => [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("ALLOW_LOGOUT")
                              ]),
                              _: 1
                            })
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode(" Show or hide logout behavior when authentication is configured. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, null, {
                          title: withCtx(() => [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("SM_VIEWER_EDITOR")
                              ]),
                              _: 1
                            })
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode("Enable or disable the standalone Submodel Viewer and Editor.")
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, null, {
                          title: withCtx(() => [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("START_PAGE_ROUTE_NAME")
                              ]),
                              _: 1
                            })
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode("Select the initial page such as "),
                            createVNode("code", null, "AASViewer"),
                            createTextVNode(" or "),
                            createVNode("code", null, "AASEditor"),
                            createTextVNode(".")
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
            _push2(`<h2 class="text-header"${_scopeId}>Web UI Behavior</h2>`);
            _push2(ssrRenderComponent(VAlert, {
              color: "primary",
              variant: "outlined",
              class: "bg-alertCard mt-8 mb-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: endpointConfigAvailable.value,
                    "onUpdate:modelValue": [($event) => endpointConfigAvailable.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "ENDPOINT_CONFIG_AVAILABLE",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: allowEditing.value,
                    "onUpdate:modelValue": [($event) => allowEditing.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "ALLOW_EDITING",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: allowUploading.value,
                    "onUpdate:modelValue": [($event) => allowUploading.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "ALLOW_UPLOADING",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: allowLogout.value,
                    "onUpdate:modelValue": [($event) => allowLogout.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "ALLOW_LOGOUT",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSwitch, {
                    modelValue: smViewerEditor.value,
                    "onUpdate:modelValue": [($event) => smViewerEditor.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "SM_VIEWER_EDITOR",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: startPageRouteName.value,
                    "onUpdate:modelValue": [($event) => startPageRouteName.value = $event, applyBehaviorSettings],
                    class: "mt-6",
                    variant: "solo-filled",
                    items: ["AASViewer", "AASEditor"],
                    label: "START_PAGE_ROUTE_NAME",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSwitch, {
                      modelValue: endpointConfigAvailable.value,
                      "onUpdate:modelValue": [($event) => endpointConfigAvailable.value = $event, applyBehaviorSettings],
                      color: "primary",
                      label: "ENDPOINT_CONFIG_AVAILABLE",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VSwitch, {
                      modelValue: allowEditing.value,
                      "onUpdate:modelValue": [($event) => allowEditing.value = $event, applyBehaviorSettings],
                      color: "primary",
                      label: "ALLOW_EDITING",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VSwitch, {
                      modelValue: allowUploading.value,
                      "onUpdate:modelValue": [($event) => allowUploading.value = $event, applyBehaviorSettings],
                      color: "primary",
                      label: "ALLOW_UPLOADING",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VSwitch, {
                      modelValue: allowLogout.value,
                      "onUpdate:modelValue": [($event) => allowLogout.value = $event, applyBehaviorSettings],
                      color: "primary",
                      label: "ALLOW_LOGOUT",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VSwitch, {
                      modelValue: smViewerEditor.value,
                      "onUpdate:modelValue": [($event) => smViewerEditor.value = $event, applyBehaviorSettings],
                      color: "primary",
                      label: "SM_VIEWER_EDITOR",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VSelect, {
                      modelValue: startPageRouteName.value,
                      "onUpdate:modelValue": [($event) => startPageRouteName.value = $event, applyBehaviorSettings],
                      class: "mt-6",
                      variant: "solo-filled",
                      items: ["AASViewer", "AASEditor"],
                      label: "START_PAGE_ROUTE_NAME",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    to: "/get-started/behaviour/time-series"
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
                    to: "/get-started/visualization/corporate-design"
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
                      to: "/get-started/behaviour/time-series"
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
                      to: "/get-started/visualization/corporate-design"
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
              createVNode("h1", { class: "mb-8 text-header" }, "AAS Web User Interface"),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, " Configure how the BaSyx AAS Web UI behaves at runtime. "),
              createVNode("p", { class: "text-normalText mt-3 mb-2 text-subtitle-1" }, [
                createTextVNode(" The UI reads backend endpoints from "),
                createVNode("code", null, "basyx-infra.yml"),
                createTextVNode(" and behavior flags from Docker environment variables. ")
              ]),
              createVNode(VAlert, {
                color: "alertCard",
                class: "mt-8 mb-8"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "font-weight-medium text-header mb-3" }, "Setting overview"),
                  createVNode(VList, {
                    "bg-color": "transparent",
                    density: "compact",
                    class: "py-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(VListItem, null, {
                        title: withCtx(() => [
                          createVNode(VKbd, null, {
                            default: withCtx(() => [
                              createTextVNode("ENDPOINT_CONFIG_AVAILABLE")
                            ]),
                            _: 1
                          })
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(" Allow users to add, edit, and delete infrastructure endpoint definitions in the UI. ")
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, null, {
                        title: withCtx(() => [
                          createVNode(VKbd, null, {
                            default: withCtx(() => [
                              createTextVNode("ALLOW_EDITING")
                            ]),
                            _: 1
                          })
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode("Enable or disable AAS and Submodel editor capabilities.")
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, null, {
                        title: withCtx(() => [
                          createVNode(VKbd, null, {
                            default: withCtx(() => [
                              createTextVNode("ALLOW_UPLOADING")
                            ]),
                            _: 1
                          })
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode("Control whether users can upload AAS files through the UI.")
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, null, {
                        title: withCtx(() => [
                          createVNode(VKbd, null, {
                            default: withCtx(() => [
                              createTextVNode("ALLOW_LOGOUT")
                            ]),
                            _: 1
                          })
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(" Show or hide logout behavior when authentication is configured. ")
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, null, {
                        title: withCtx(() => [
                          createVNode(VKbd, null, {
                            default: withCtx(() => [
                              createTextVNode("SM_VIEWER_EDITOR")
                            ]),
                            _: 1
                          })
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode("Enable or disable the standalone Submodel Viewer and Editor.")
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, null, {
                        title: withCtx(() => [
                          createVNode(VKbd, null, {
                            default: withCtx(() => [
                              createTextVNode("START_PAGE_ROUTE_NAME")
                            ]),
                            _: 1
                          })
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode("Select the initial page such as "),
                          createVNode("code", null, "AASViewer"),
                          createTextVNode(" or "),
                          createVNode("code", null, "AASEditor"),
                          createTextVNode(".")
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
              createVNode("h2", { class: "text-header" }, "Web UI Behavior"),
              createVNode(VAlert, {
                color: "primary",
                variant: "outlined",
                class: "bg-alertCard mt-8 mb-8"
              }, {
                default: withCtx(() => [
                  createVNode(VSwitch, {
                    modelValue: endpointConfigAvailable.value,
                    "onUpdate:modelValue": [($event) => endpointConfigAvailable.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "ENDPOINT_CONFIG_AVAILABLE",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VSwitch, {
                    modelValue: allowEditing.value,
                    "onUpdate:modelValue": [($event) => allowEditing.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "ALLOW_EDITING",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VSwitch, {
                    modelValue: allowUploading.value,
                    "onUpdate:modelValue": [($event) => allowUploading.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "ALLOW_UPLOADING",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VSwitch, {
                    modelValue: allowLogout.value,
                    "onUpdate:modelValue": [($event) => allowLogout.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "ALLOW_LOGOUT",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VSwitch, {
                    modelValue: smViewerEditor.value,
                    "onUpdate:modelValue": [($event) => smViewerEditor.value = $event, applyBehaviorSettings],
                    color: "primary",
                    label: "SM_VIEWER_EDITOR",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VSelect, {
                    modelValue: startPageRouteName.value,
                    "onUpdate:modelValue": [($event) => startPageRouteName.value = $event, applyBehaviorSettings],
                    class: "mt-6",
                    variant: "solo-filled",
                    items: ["AASViewer", "AASEditor"],
                    label: "START_PAGE_ROUTE_NAME",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCardActions, { class: "px-0 mb-8" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "tonal",
                    "prepend-icon": "mdi-arrow-left",
                    to: "/get-started/behaviour/time-series"
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
                    to: "/get-started/visualization/corporate-design"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/get-started/visualization/ui.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ui-DRn-pKCY.mjs.map
