import { defineComponent, ref, computed, watch, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useId, createElementVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { bz as useSeoMeta, b0 as useAppStore, m as VIcon, k as VBtn, a5 as genericComponent, bo as useProxiedModel, bp as useRender, a0 as filterInputAttrs, a3 as forwardRefs, aV as propsFactory, I as IconValue, aR as omit } from './server.mjs';
import { e as VSlideYTransition, V as VDivider } from './VDivider-D2ayNrXO.mjs';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
import { V as VBreadcrumbs } from './VBreadcrumbs-Cwgk5YXB.mjs';
import { V as VAlert } from './VAlert-Bcj1ynP6.mjs';
import { V as VInput, a as VLabel, b as makeVInputProps } from './VInput-CF1s2jmS.mjs';
import { V as VSelectionControl, a as VSelectionControlGroup, m as makeSelectionControlGroupProps, b as makeVSelectionControlProps } from './VSelectionControl-BgxnoM3f.mjs';
import { V as VKbd } from './VKbd-jkyggUsO.mjs';
import { a as VRow, V as VCol } from './VRow-DT77qovv.mjs';
import { V as VTextField } from './VTextField-CmLAcn2i.mjs';
import { V as VFileInput } from './VFileInput-qhs4IC6M.mjs';
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
import './autofocus-DXczjZSo.mjs';
import './VField-CBPZxNBP.mjs';
import './VChip-hjpRim43.mjs';

const makeVRadioProps = propsFactory({
  ...makeVSelectionControlProps({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio");
const VRadio = genericComponent()({
  name: "VRadio",
  props: makeVRadioProps(),
  setup(props, {
    slots
  }) {
    useRender(() => {
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "class": ["v-radio", props.class],
        "style": props.style,
        "type": "radio"
      }), slots);
    });
    return {};
  }
});
const makeVRadioGroupProps = propsFactory({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...omit(makeVInputProps(), ["direction"]),
  ...omit(makeSelectionControlGroupProps(), ["multiple"]),
  trueIcon: {
    type: IconValue,
    default: "$radioOn"
  },
  falseIcon: {
    type: IconValue,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup");
const VRadioGroup = genericComponent()({
  name: "VRadioGroup",
  inheritAttrs: false,
  props: makeVRadioGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    attrs,
    slots
  }) {
    const uid = useId();
    const id = computed(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, "modelValue");
    const inputRef = ref();
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode(VInput, mergeProps({
        "ref": inputRef,
        "class": ["v-radio-group", props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: ({
          id: id2,
          messagesId,
          isDisabled,
          isReadonly
        }) => createElementVNode(Fragment, null, [label && createVNode(VLabel, {
          "id": id2.value
        }, {
          default: () => [label]
        }), createVNode(VSelectionControlGroup, mergeProps(controlProps, {
          "id": id2.value,
          "aria-describedby": messagesId.value,
          "defaultsTarget": "VRadio",
          "trueIcon": props.trueIcon,
          "falseIcon": props.falseIcon,
          "type": props.type,
          "disabled": isDisabled.value,
          "readonly": isReadonly.value,
          "aria-labelledby": label ? id2.value : void 0,
          "multiple": false
        }, controlAttrs, {
          "modelValue": model.value,
          "onUpdate:modelValue": ($event) => model.value = $event
        }), slots)])
      });
    });
    return forwardRefs({}, inputRef);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TimeSeries"
  },
  __name: "time-series",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Time Series Data | Eclipse BaSyx™",
      ogTitle: "Time Series Data | Eclipse BaSyx™"
    });
    const INFLUX_DEFAULTS = {
      username: "admin",
      password: "influxpassword",
      org: "basyx",
      bucket: "basyx"
    };
    const appStore = useAppStore();
    const breadcrumbs = ref([
      { title: "Home", to: "/" },
      { title: "Get Started", to: "/get-started/introduction" },
      { title: "Time Series Data", to: "/get-started/behaviour/time-series" }
    ]);
    const selection = computed({
      get: () => appStore.getTimeSeriesData ? "addTSD" : "noTSD",
      set: (value) => {
        appStore.updateTimeSeriesData(value === "addTSD");
      }
    });
    const telegrafConfigFile = ref(void 0);
    const influxInitUsername = ref(INFLUX_DEFAULTS.username);
    const influxInitPassword = ref(INFLUX_DEFAULTS.password);
    const influxInitOrg = ref(INFLUX_DEFAULTS.org);
    const influxInitBucket = ref(INFLUX_DEFAULTS.bucket);
    const influxInitToken = ref("");
    const showInfluxPassword = ref(false);
    const showInfluxToken = ref(false);
    const hasMounted = ref(false);
    const basyxConfig = computed(() => appStore.getBasyxConfig);
    const isUIEnabled = computed(() => appStore.getUserInterface);
    const telegrafConfigStore = computed(() => appStore.getTelegrafConf);
    const dockerComposeConfigObject = computed(() => appStore.getDockerComposeConfig);
    watch(
      () => appStore.getTimeSeriesData,
      (enabled) => {
        updateConfig(enabled);
      },
      { immediate: true }
    );
    watch(
      () => telegrafConfigStore.value,
      (configFile) => {
        if (configFile) {
          telegrafConfigFile.value = configFile;
        }
      },
      { immediate: true }
    );
    watch(
      () => dockerComposeConfigObject.value?.value,
      () => {
        syncInfluxSettingsFromCompose();
      },
      { immediate: true }
    );
    function createInfluxToken() {
      const bytes = new Uint8Array(32);
      if (globalThis.crypto?.getRandomValues) {
        globalThis.crypto.getRandomValues(bytes);
      } else {
        for (let index = 0; index < bytes.length; index += 1) {
          bytes[index] = Math.floor(Math.random() * 256);
        }
      }
      return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    }
    function getEnvVar(env, key, fallback) {
      const prefix = `${key}=`;
      const entry = env.find((item) => item.startsWith(prefix));
      if (!entry) {
        return fallback;
      }
      return entry.slice(prefix.length);
    }
    function setEnvVar(env, key, value) {
      const prefix = `${key}=`;
      const index = env.findIndex((item) => item.startsWith(prefix));
      if (index >= 0) {
        env[index] = `${key}=${value}`;
        return;
      }
      env.push(`${key}=${value}`);
    }
    function getDockerServices() {
      if (!dockerComposeConfigObject.value) {
        return null;
      }
      const localDockerComposeConfig = { ...dockerComposeConfigObject.value };
      const dockerComposeConfig = localDockerComposeConfig.value;
      if (!dockerComposeConfig || typeof dockerComposeConfig === "string" || !dockerComposeConfig.services) {
        return null;
      }
      const typedDockerComposeConfig = dockerComposeConfig;
      return {
        localDockerComposeConfig,
        dockerComposeConfig: typedDockerComposeConfig,
        services: typedDockerComposeConfig.services
      };
    }
    function getInfluxEnvAsArray(service) {
      if (Array.isArray(service.environment)) {
        return service.environment;
      }
      if (service.environment && typeof service.environment === "object") {
        const envArray2 = Object.entries(service.environment).map(([key, value]) => `${key}=${value}`);
        service.environment = envArray2;
        return envArray2;
      }
      const envArray = [];
      service.environment = envArray;
      return envArray;
    }
    function normalizeInfluxSettings() {
      const token = influxInitToken.value.trim();
      influxInitToken.value = token;
      return {
        username: influxInitUsername.value.trim() || INFLUX_DEFAULTS.username,
        password: influxInitPassword.value || INFLUX_DEFAULTS.password,
        org: influxInitOrg.value.trim() || INFLUX_DEFAULTS.org,
        bucket: influxInitBucket.value.trim() || INFLUX_DEFAULTS.bucket,
        token
      };
    }
    function syncAasUiInfluxToken(services, token) {
      if (!isUIEnabled.value || !services["aas-ui"]) {
        return;
      }
      const aasUi = services["aas-ui"];
      if (!aasUi.environment) {
        aasUi.environment = {};
      }
      if (Array.isArray(aasUi.environment)) {
        setEnvVar(aasUi.environment, "INFLUXDB_TOKEN", token);
        return;
      }
      aasUi.environment.INFLUXDB_TOKEN = token;
    }
    function removeAasUiInfluxToken(services) {
      if (!isUIEnabled.value || !services["aas-ui"]?.environment) {
        return;
      }
      const aasUiEnv = services["aas-ui"].environment;
      if (Array.isArray(aasUiEnv)) {
        const tokenVarIndex = aasUiEnv.findIndex((item) => item.startsWith("INFLUXDB_TOKEN="));
        if (tokenVarIndex >= 0) {
          aasUiEnv.splice(tokenVarIndex, 1);
        }
        return;
      }
      delete aasUiEnv.INFLUXDB_TOKEN;
    }
    function upsertInfluxService(services, settings, createFreshTokenIfMissing) {
      if (!services["influxdb"]) {
        if (createFreshTokenIfMissing && hasMounted.value) {
          settings.token = createInfluxToken();
          influxInitToken.value = settings.token;
        }
        services["influxdb"] = {
          image: "influxdb:2",
          container_name: "influxdb",
          ports: ["8086:8086", "9999:9999"],
          volumes: ["./influxdb/data:/var/lib/influxdb2", "./influxdb/config:/etc/influxdb2"],
          environment: [
            "DOCKER_INFLUXDB_INIT_MODE=setup",
            `DOCKER_INFLUXDB_INIT_USERNAME=${settings.username}`,
            `DOCKER_INFLUXDB_INIT_PASSWORD=${settings.password}`,
            `DOCKER_INFLUXDB_INIT_ORG=${settings.org}`,
            `DOCKER_INFLUXDB_INIT_BUCKET=${settings.bucket}`,
            `DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=${settings.token}`
          ],
          restart: "always"
        };
        return;
      }
      const influxdbService = services["influxdb"];
      if (!influxdbService.ports) {
        influxdbService.ports = ["8086:8086", "9999:9999"];
      }
      if (!influxdbService.volumes) {
        influxdbService.volumes = [
          "./influxdb/data:/var/lib/influxdb2",
          "./influxdb/config:/etc/influxdb2"
        ];
      }
      if (!influxdbService.restart) {
        influxdbService.restart = "always";
      }
      const env = getInfluxEnvAsArray(influxdbService);
      const currentToken = getEnvVar(env, "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN", "");
      const finalToken = settings.token || currentToken || (createFreshTokenIfMissing && hasMounted.value ? createInfluxToken() : "");
      influxInitToken.value = finalToken;
      setEnvVar(env, "DOCKER_INFLUXDB_INIT_MODE", "setup");
      setEnvVar(env, "DOCKER_INFLUXDB_INIT_USERNAME", settings.username);
      setEnvVar(env, "DOCKER_INFLUXDB_INIT_PASSWORD", settings.password);
      setEnvVar(env, "DOCKER_INFLUXDB_INIT_ORG", settings.org);
      setEnvVar(env, "DOCKER_INFLUXDB_INIT_BUCKET", settings.bucket);
      setEnvVar(env, "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN", finalToken);
    }
    function syncInfluxSettingsFromCompose() {
      const compose = getDockerServices();
      if (!compose) {
        return;
      }
      const influxService = compose.services["influxdb"];
      if (!influxService) {
        return;
      }
      const env = getInfluxEnvAsArray(influxService);
      influxInitUsername.value = getEnvVar(
        env,
        "DOCKER_INFLUXDB_INIT_USERNAME",
        INFLUX_DEFAULTS.username
      );
      influxInitPassword.value = getEnvVar(
        env,
        "DOCKER_INFLUXDB_INIT_PASSWORD",
        INFLUX_DEFAULTS.password
      );
      influxInitOrg.value = getEnvVar(env, "DOCKER_INFLUXDB_INIT_ORG", INFLUX_DEFAULTS.org);
      influxInitBucket.value = getEnvVar(env, "DOCKER_INFLUXDB_INIT_BUCKET", INFLUX_DEFAULTS.bucket);
      influxInitToken.value = getEnvVar(env, "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN", "");
    }
    function addInfluxDBToDockerCompose(createFreshTokenIfMissing = true) {
      const compose = getDockerServices();
      if (!compose) {
        return;
      }
      const settings = normalizeInfluxSettings();
      upsertInfluxService(compose.services, settings, createFreshTokenIfMissing);
      const influxService = compose.services["influxdb"];
      const env = influxService ? getInfluxEnvAsArray(influxService) : [];
      const token = getEnvVar(env, "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN", settings.token);
      syncAasUiInfluxToken(compose.services, token);
      compose.localDockerComposeConfig.value = compose.dockerComposeConfig;
      appStore.setDockerComposeConfig(compose.localDockerComposeConfig);
    }
    function removeInfluxDBFromDockerCompose() {
      const compose = getDockerServices();
      if (!compose) {
        return;
      }
      if (compose.services["influxdb"]) {
        delete compose.services["influxdb"];
      }
      removeAasUiInfluxToken(compose.services);
      compose.localDockerComposeConfig.value = compose.dockerComposeConfig;
      appStore.setDockerComposeConfig(compose.localDockerComposeConfig);
    }
    function addTelegrafToDockerCompose() {
      const compose = getDockerServices();
      if (!compose) {
        return;
      }
      if (!compose.services["telegraf"]) {
        compose.services["telegraf"] = {
          image: "telegraf:1.29.1",
          container_name: "telegraf",
          volumes: ["./telegraf/telegraf.conf:/etc/telegraf/telegraf.conf:ro"],
          hostname: "basyx_host",
          restart: "always",
          depends_on: ["influxdb"]
        };
        compose.localDockerComposeConfig.value = compose.dockerComposeConfig;
        appStore.setDockerComposeConfig(compose.localDockerComposeConfig);
      }
    }
    function removeTelegrafFromDockerCompose() {
      const compose = getDockerServices();
      if (!compose) {
        return;
      }
      if (compose.services["telegraf"]) {
        delete compose.services["telegraf"];
        compose.localDockerComposeConfig.value = compose.dockerComposeConfig;
        appStore.setDockerComposeConfig(compose.localDockerComposeConfig);
      }
    }
    function applyInfluxSettings() {
      if (!appStore.getTimeSeriesData) {
        appStore.updateTimeSeriesData(true);
      }
      addInfluxDBToDockerCompose(false);
    }
    function regenerateInfluxToken() {
      influxInitToken.value = createInfluxToken();
      if (appStore.getTimeSeriesData) {
        addInfluxDBToDockerCompose(false);
      }
    }
    function resetInfluxDefaults() {
      influxInitUsername.value = INFLUX_DEFAULTS.username;
      influxInitPassword.value = INFLUX_DEFAULTS.password;
      influxInitOrg.value = INFLUX_DEFAULTS.org;
      influxInitBucket.value = INFLUX_DEFAULTS.bucket;
      influxInitToken.value = createInfluxToken();
      if (appStore.getTimeSeriesData) {
        addInfluxDBToDockerCompose(false);
      }
    }
    function addTelegrafConf() {
      appStore.setTelegrafConf(telegrafConfigFile.value);
    }
    function updateConfig(enabled = appStore.getTimeSeriesData) {
      if (enabled) {
        addInfluxDBToDockerCompose(true);
        addTelegrafToDockerCompose();
        const basyxConfigCopy = [...basyxConfig.value];
        if (!basyxConfigCopy.some((item) => item.id === "comp-influxdb")) {
          basyxConfigCopy.push({
            id: "comp-influxdb",
            title: "InfluxDB",
            children: [
              {
                id: "ovw-influxdb-summary",
                title: "Runtime & Storage",
                type: "overview"
              },
              {
                id: "cfg-influxdb",
                title: "Docker",
                type: "config"
              }
            ]
          });
        }
        if (!basyxConfigCopy.some((item) => item.id === "comp-telegraf")) {
          basyxConfigCopy.push({
            id: "comp-telegraf",
            title: "Telegraf",
            children: [
              {
                id: "ovw-telegraf-summary",
                title: "Collector Setup",
                type: "overview"
              },
              {
                id: "cfg-telegraf",
                title: "Docker",
                type: "config"
              }
            ]
          });
        }
        appStore.updateBasyxConfig(basyxConfigCopy);
      } else {
        removeInfluxDBFromDockerCompose();
        removeTelegrafFromDockerCompose();
        let basyxConfigCopy = [...basyxConfig.value];
        basyxConfigCopy = basyxConfigCopy.filter(
          (item) => item.id !== "comp-influxdb"
        );
        basyxConfigCopy = basyxConfigCopy.filter(
          (item) => item.id !== "comp-telegraf"
        );
        appStore.updateBasyxConfig(basyxConfigCopy);
      }
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
            _push2(`<h1 class="mb-8 text-header"${_scopeId}>Time Series Data</h1><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> In the context of Digital Twins and AAS in particular, time series data offers significant advantages in the operation of assets. These include, but are not limited to, gaining insight into patterns, trends and anomalies in asset behaviour. This information is essential for predictive maintenance to minimise downtime and extend asset life. </p><p class="text-normalText mt-3 mb-2 text-subtitle-1"${_scopeId}><a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://industrialdigitaltwin.org/wp-content/uploads/2023/03/IDTA-02008-1-1_Submodel_TimeSeriesData.pdf" target="_blank"${_scopeId}>Time Series Data</a> is also an AAS submodel specification. A distinction is made between data within the AAS (internal segment), data from files (external segment) and data from time series databases (linked segment). The latter requires a database and a tool to collect data from the asset. </p><p class="text-normalText mt-3 mb-2 text-subtitle-1"${_scopeId}> Here, <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://www.influxdata.com/" target="_blank"${_scopeId}>InfluxDB</a> is used as a time series database in conjunction with <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://www.influxdata.com/time-series-platform/telegraf/" target="_blank"${_scopeId}>Telegraf</a> as a tool for the collection of metrics. </p>`);
            _push2(ssrRenderComponent(VAlert, {
              color: "primary",
              variant: "outlined",
              class: "bg-alertCard mt-8 mb-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRadioGroup, {
                    modelValue: selection.value,
                    "onUpdate:modelValue": ($event) => selection.value = $event,
                    color: "primary",
                    "hide-details": "",
                    class: "text-normalText font-weight-medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadio, {
                          label: "Don't include time series data from a linked database",
                          value: "noTSD"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          label: "Include time series data from a linked database",
                          value: "addTSD"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadio, {
                            label: "Don't include time series data from a linked database",
                            value: "noTSD"
                          }),
                          createVNode(VRadio, {
                            label: "Include time series data from a linked database",
                            value: "addTSD"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRadioGroup, {
                      modelValue: selection.value,
                      "onUpdate:modelValue": ($event) => selection.value = $event,
                      color: "primary",
                      "hide-details": "",
                      class: "text-normalText font-weight-medium"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadio, {
                          label: "Don't include time series data from a linked database",
                          value: "noTSD"
                        }),
                        createVNode(VRadio, {
                          label: "Include time series data from a linked database",
                          value: "addTSD"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSlideYTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (selection.value === "addTSD") {
                    _push3(`<div class="mb-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VDivider, { class: "mt-12 mb-8" }, null, _parent3, _scopeId2));
                    _push3(`<h2 class="text-header"${_scopeId2}>InfluxDB Settings</h2><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId2}> Configure the InfluxDB setup values below. They are written to the InfluxDB container initialization environment and mirrored to the BaSyx UI via `);
                    _push3(ssrRenderComponent(VKbd, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`INFLUXDB_TOKEN`);
                        } else {
                          return [
                            createTextVNode("INFLUXDB_TOKEN")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` when the UI component is available. </p>`);
                    _push3(ssrRenderComponent(VAlert, {
                      color: "alertCard",
                      class: "mt-2 mb-8"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VRow, { align: "center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "auto",
                                  class: "pr-0"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { color: "subheader" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`mdi-database-cog`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-database-cog")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { color: "subheader" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-database-cog")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="font-weight-medium text-header"${_scopeId5}>What these settings control</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "font-weight-medium text-header" }, "What these settings control")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, {
                                    cols: "auto",
                                    class: "pr-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { color: "subheader" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-database-cog")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "font-weight-medium text-header" }, "What these settings control")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<ul class="text-subheader font-weight-medium mt-2 ms-6"${_scopeId3}><li${_scopeId3}>`);
                          _push4(ssrRenderComponent(VKbd, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`DOCKER_INFLUXDB_INIT_USERNAME`);
                              } else {
                                return [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_USERNAME")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` and `);
                          _push4(ssrRenderComponent(VKbd, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`DOCKER_INFLUXDB_INIT_PASSWORD`);
                              } else {
                                return [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_PASSWORD")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` define the bootstrap user. </li><li${_scopeId3}>`);
                          _push4(ssrRenderComponent(VKbd, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`DOCKER_INFLUXDB_INIT_ORG`);
                              } else {
                                return [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_ORG")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` and `);
                          _push4(ssrRenderComponent(VKbd, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`DOCKER_INFLUXDB_INIT_BUCKET`);
                              } else {
                                return [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_BUCKET")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` define the default workspace for writes. </li><li${_scopeId3}>`);
                          _push4(ssrRenderComponent(VKbd, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`DOCKER_INFLUXDB_INIT_ADMIN_TOKEN`);
                              } else {
                                return [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_ADMIN_TOKEN")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` is generated and used by integrated consumers such as the BaSyx UI. </li></ul>`);
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
                                        createTextVNode("mdi-database-cog")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "font-weight-medium text-header" }, "What these settings control")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("ul", { class: "text-subheader font-weight-medium mt-2 ms-6" }, [
                              createVNode("li", null, [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("DOCKER_INFLUXDB_INIT_USERNAME")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" and "),
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("DOCKER_INFLUXDB_INIT_PASSWORD")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" define the bootstrap user. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("DOCKER_INFLUXDB_INIT_ORG")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" and "),
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("DOCKER_INFLUXDB_INIT_BUCKET")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" define the default workspace for writes. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(VKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("DOCKER_INFLUXDB_INIT_ADMIN_TOKEN")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" is generated and used by integrated consumers such as the BaSyx UI. ")
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VRow, { density: "compact" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: influxInitUsername.value,
                                  "onUpdate:modelValue": ($event) => influxInitUsername.value = $event,
                                  variant: "solo-filled",
                                  label: "DOCKER_INFLUXDB_INIT_USERNAME",
                                  "hide-details": "auto",
                                  hint: "Bootstrap username for InfluxDB initialization.",
                                  "persistent-hint": ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    modelValue: influxInitUsername.value,
                                    "onUpdate:modelValue": ($event) => influxInitUsername.value = $event,
                                    variant: "solo-filled",
                                    label: "DOCKER_INFLUXDB_INIT_USERNAME",
                                    "hide-details": "auto",
                                    hint: "Bootstrap username for InfluxDB initialization.",
                                    "persistent-hint": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: influxInitPassword.value,
                                  "onUpdate:modelValue": ($event) => influxInitPassword.value = $event,
                                  variant: "solo-filled",
                                  label: "DOCKER_INFLUXDB_INIT_PASSWORD",
                                  type: showInfluxPassword.value ? "text" : "password",
                                  "append-inner-icon": showInfluxPassword.value ? "mdi-eye-off" : "mdi-eye",
                                  "hide-details": "auto",
                                  hint: "Bootstrap password for the configured user.",
                                  "persistent-hint": "",
                                  "onClick:appendInner": ($event) => showInfluxPassword.value = !showInfluxPassword.value
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    modelValue: influxInitPassword.value,
                                    "onUpdate:modelValue": ($event) => influxInitPassword.value = $event,
                                    variant: "solo-filled",
                                    label: "DOCKER_INFLUXDB_INIT_PASSWORD",
                                    type: showInfluxPassword.value ? "text" : "password",
                                    "append-inner-icon": showInfluxPassword.value ? "mdi-eye-off" : "mdi-eye",
                                    "hide-details": "auto",
                                    hint: "Bootstrap password for the configured user.",
                                    "persistent-hint": "",
                                    "onClick:appendInner": ($event) => showInfluxPassword.value = !showInfluxPassword.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: influxInitOrg.value,
                                  "onUpdate:modelValue": ($event) => influxInitOrg.value = $event,
                                  variant: "solo-filled",
                                  label: "DOCKER_INFLUXDB_INIT_ORG",
                                  "hide-details": "auto",
                                  hint: "Default organization created in InfluxDB.",
                                  "persistent-hint": ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    modelValue: influxInitOrg.value,
                                    "onUpdate:modelValue": ($event) => influxInitOrg.value = $event,
                                    variant: "solo-filled",
                                    label: "DOCKER_INFLUXDB_INIT_ORG",
                                    "hide-details": "auto",
                                    hint: "Default organization created in InfluxDB.",
                                    "persistent-hint": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: influxInitBucket.value,
                                  "onUpdate:modelValue": ($event) => influxInitBucket.value = $event,
                                  variant: "solo-filled",
                                  label: "DOCKER_INFLUXDB_INIT_BUCKET",
                                  "hide-details": "auto",
                                  hint: "Default bucket used for time-series data.",
                                  "persistent-hint": ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    modelValue: influxInitBucket.value,
                                    "onUpdate:modelValue": ($event) => influxInitBucket.value = $event,
                                    variant: "solo-filled",
                                    label: "DOCKER_INFLUXDB_INIT_BUCKET",
                                    "hide-details": "auto",
                                    hint: "Default bucket used for time-series data.",
                                    "persistent-hint": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: influxInitToken.value,
                                  "onUpdate:modelValue": ($event) => influxInitToken.value = $event,
                                  variant: "solo-filled",
                                  type: showInfluxToken.value ? "text" : "password",
                                  "append-inner-icon": showInfluxToken.value ? "mdi-eye-off" : "mdi-eye",
                                  label: "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN",
                                  "hide-details": "auto",
                                  hint: "Admin token shared with BaSyx UI as INFLUXDB_TOKEN.",
                                  "persistent-hint": "",
                                  "onClick:appendInner": ($event) => showInfluxToken.value = !showInfluxToken.value
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    modelValue: influxInitToken.value,
                                    "onUpdate:modelValue": ($event) => influxInitToken.value = $event,
                                    variant: "solo-filled",
                                    type: showInfluxToken.value ? "text" : "password",
                                    "append-inner-icon": showInfluxToken.value ? "mdi-eye-off" : "mdi-eye",
                                    label: "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN",
                                    "hide-details": "auto",
                                    hint: "Admin token shared with BaSyx UI as INFLUXDB_TOKEN.",
                                    "persistent-hint": "",
                                    "onClick:appendInner": ($event) => showInfluxToken.value = !showInfluxToken.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: influxInitUsername.value,
                                  "onUpdate:modelValue": ($event) => influxInitUsername.value = $event,
                                  variant: "solo-filled",
                                  label: "DOCKER_INFLUXDB_INIT_USERNAME",
                                  "hide-details": "auto",
                                  hint: "Bootstrap username for InfluxDB initialization.",
                                  "persistent-hint": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: influxInitPassword.value,
                                  "onUpdate:modelValue": ($event) => influxInitPassword.value = $event,
                                  variant: "solo-filled",
                                  label: "DOCKER_INFLUXDB_INIT_PASSWORD",
                                  type: showInfluxPassword.value ? "text" : "password",
                                  "append-inner-icon": showInfluxPassword.value ? "mdi-eye-off" : "mdi-eye",
                                  "hide-details": "auto",
                                  hint: "Bootstrap password for the configured user.",
                                  "persistent-hint": "",
                                  "onClick:appendInner": ($event) => showInfluxPassword.value = !showInfluxPassword.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: influxInitOrg.value,
                                  "onUpdate:modelValue": ($event) => influxInitOrg.value = $event,
                                  variant: "solo-filled",
                                  label: "DOCKER_INFLUXDB_INIT_ORG",
                                  "hide-details": "auto",
                                  hint: "Default organization created in InfluxDB.",
                                  "persistent-hint": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: influxInitBucket.value,
                                  "onUpdate:modelValue": ($event) => influxInitBucket.value = $event,
                                  variant: "solo-filled",
                                  label: "DOCKER_INFLUXDB_INIT_BUCKET",
                                  "hide-details": "auto",
                                  hint: "Default bucket used for time-series data.",
                                  "persistent-hint": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: influxInitToken.value,
                                  "onUpdate:modelValue": ($event) => influxInitToken.value = $event,
                                  variant: "solo-filled",
                                  type: showInfluxToken.value ? "text" : "password",
                                  "append-inner-icon": showInfluxToken.value ? "mdi-eye-off" : "mdi-eye",
                                  label: "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN",
                                  "hide-details": "auto",
                                  hint: "Admin token shared with BaSyx UI as INFLUXDB_TOKEN.",
                                  "persistent-hint": "",
                                  "onClick:appendInner": ($event) => showInfluxToken.value = !showInfluxToken.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      class: "mt-4 mb-2",
                      block: "",
                      variant: "tonal",
                      onClick: ($event) => applyInfluxSettings()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Apply InfluxDB Settings `);
                        } else {
                          return [
                            createTextVNode(" Apply InfluxDB Settings ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      class: "mb-2",
                      block: "",
                      variant: "tonal",
                      color: "secondary",
                      onClick: ($event) => regenerateInfluxToken()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Regenerate InfluxDB Token `);
                        } else {
                          return [
                            createTextVNode(" Regenerate InfluxDB Token ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      class: "mb-8",
                      block: "",
                      color: "secondary",
                      variant: "text",
                      onClick: ($event) => resetInfluxDefaults()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Reset InfluxDB Defaults `);
                        } else {
                          return [
                            createTextVNode(" Reset InfluxDB Defaults ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, { class: "mt-12 mb-8" }, null, _parent3, _scopeId2));
                    _push3(`<h2 class="text-header"${_scopeId2}>Metrics Collection</h2><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId2}> Telegraf is configured using a configuration file. This file contains the necessary information about the asset endpoints that provide data to be stored in the time series database. </p><p class="text-normalText mt-3 mb-6 text-subtitle-1"${_scopeId2}> The <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://docs.influxdata.com/influxdb/latest/write-data/no-code/use-telegraf/" target="_blank"${_scopeId2}>Telegraf configuration file</a> must be created beforehand. This can be done either <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://docs.influxdata.com/influxdb/v2/write-data/no-code/use-telegraf/auto-config/" target="_blank"${_scopeId2}>automatically</a> or by <a class="text-primary" style="${ssrRenderStyle({ "text-decoration": "none" })}" href="https://docs.influxdata.com/influxdb/v2/write-data/no-code/use-telegraf/manual-config/" target="_blank"${_scopeId2}>hand</a>. </p>`);
                    _push3(ssrRenderComponent(VFileInput, {
                      modelValue: telegrafConfigFile.value,
                      "onUpdate:modelValue": [($event) => telegrafConfigFile.value = $event, ($event) => addTelegrafConf()],
                      variant: "solo-filled",
                      "prepend-inner-icon": "$file",
                      "prepend-icon": "",
                      label: "Upload telegraf.conf File",
                      density: "compact",
                      "hide-details": ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    selection.value === "addTSD" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-5"
                    }, [
                      createVNode(VDivider, { class: "mt-12 mb-8" }),
                      createVNode("h2", { class: "text-header" }, "InfluxDB Settings"),
                      createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, [
                        createTextVNode(" Configure the InfluxDB setup values below. They are written to the InfluxDB container initialization environment and mirrored to the BaSyx UI via "),
                        createVNode(VKbd, null, {
                          default: withCtx(() => [
                            createTextVNode("INFLUXDB_TOKEN")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" when the UI component is available. ")
                      ]),
                      createVNode(VAlert, {
                        color: "alertCard",
                        class: "mt-2 mb-8"
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
                                      createTextVNode("mdi-database-cog")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "font-weight-medium text-header" }, "What these settings control")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "text-subheader font-weight-medium mt-2 ms-6" }, [
                            createVNode("li", null, [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_USERNAME")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" and "),
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_PASSWORD")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" define the bootstrap user. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_ORG")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" and "),
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_BUCKET")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" define the default workspace for writes. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(VKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("DOCKER_INFLUXDB_INIT_ADMIN_TOKEN")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" is generated and used by integrated consumers such as the BaSyx UI. ")
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { density: "compact" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: influxInitUsername.value,
                                "onUpdate:modelValue": ($event) => influxInitUsername.value = $event,
                                variant: "solo-filled",
                                label: "DOCKER_INFLUXDB_INIT_USERNAME",
                                "hide-details": "auto",
                                hint: "Bootstrap username for InfluxDB initialization.",
                                "persistent-hint": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: influxInitPassword.value,
                                "onUpdate:modelValue": ($event) => influxInitPassword.value = $event,
                                variant: "solo-filled",
                                label: "DOCKER_INFLUXDB_INIT_PASSWORD",
                                type: showInfluxPassword.value ? "text" : "password",
                                "append-inner-icon": showInfluxPassword.value ? "mdi-eye-off" : "mdi-eye",
                                "hide-details": "auto",
                                hint: "Bootstrap password for the configured user.",
                                "persistent-hint": "",
                                "onClick:appendInner": ($event) => showInfluxPassword.value = !showInfluxPassword.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: influxInitOrg.value,
                                "onUpdate:modelValue": ($event) => influxInitOrg.value = $event,
                                variant: "solo-filled",
                                label: "DOCKER_INFLUXDB_INIT_ORG",
                                "hide-details": "auto",
                                hint: "Default organization created in InfluxDB.",
                                "persistent-hint": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: influxInitBucket.value,
                                "onUpdate:modelValue": ($event) => influxInitBucket.value = $event,
                                variant: "solo-filled",
                                label: "DOCKER_INFLUXDB_INIT_BUCKET",
                                "hide-details": "auto",
                                hint: "Default bucket used for time-series data.",
                                "persistent-hint": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: influxInitToken.value,
                                "onUpdate:modelValue": ($event) => influxInitToken.value = $event,
                                variant: "solo-filled",
                                type: showInfluxToken.value ? "text" : "password",
                                "append-inner-icon": showInfluxToken.value ? "mdi-eye-off" : "mdi-eye",
                                label: "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN",
                                "hide-details": "auto",
                                hint: "Admin token shared with BaSyx UI as INFLUXDB_TOKEN.",
                                "persistent-hint": "",
                                "onClick:appendInner": ($event) => showInfluxToken.value = !showInfluxToken.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "mt-4 mb-2",
                        block: "",
                        variant: "tonal",
                        onClick: ($event) => applyInfluxSettings()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Apply InfluxDB Settings ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        class: "mb-2",
                        block: "",
                        variant: "tonal",
                        color: "secondary",
                        onClick: ($event) => regenerateInfluxToken()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate InfluxDB Token ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        class: "mb-8",
                        block: "",
                        color: "secondary",
                        variant: "text",
                        onClick: ($event) => resetInfluxDefaults()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset InfluxDB Defaults ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VDivider, { class: "mt-12 mb-8" }),
                      createVNode("h2", { class: "text-header" }, "Metrics Collection"),
                      createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, " Telegraf is configured using a configuration file. This file contains the necessary information about the asset endpoints that provide data to be stored in the time series database. "),
                      createVNode("p", { class: "text-normalText mt-3 mb-6 text-subtitle-1" }, [
                        createTextVNode(" The "),
                        createVNode("a", {
                          class: "text-primary",
                          style: { "text-decoration": "none" },
                          href: "https://docs.influxdata.com/influxdb/latest/write-data/no-code/use-telegraf/",
                          target: "_blank"
                        }, "Telegraf configuration file"),
                        createTextVNode(" must be created beforehand. This can be done either "),
                        createVNode("a", {
                          class: "text-primary",
                          style: { "text-decoration": "none" },
                          href: "https://docs.influxdata.com/influxdb/v2/write-data/no-code/use-telegraf/auto-config/",
                          target: "_blank"
                        }, "automatically"),
                        createTextVNode(" or by "),
                        createVNode("a", {
                          class: "text-primary",
                          style: { "text-decoration": "none" },
                          href: "https://docs.influxdata.com/influxdb/v2/write-data/no-code/use-telegraf/manual-config/",
                          target: "_blank"
                        }, "hand"),
                        createTextVNode(". ")
                      ]),
                      createVNode(VFileInput, {
                        modelValue: telegrafConfigFile.value,
                        "onUpdate:modelValue": [($event) => telegrafConfigFile.value = $event, ($event) => addTelegrafConf()],
                        variant: "solo-filled",
                        "prepend-inner-icon": "$file",
                        "prepend-icon": "",
                        label: "Upload telegraf.conf File",
                        density: "compact",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true)
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
                    to: "/get-started/behaviour/eventing"
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
                    to: "/get-started/visualization/ui"
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
                      to: "/get-started/behaviour/eventing"
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
                      to: "/get-started/visualization/ui"
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
              createVNode("h1", { class: "mb-8 text-header" }, "Time Series Data"),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, " In the context of Digital Twins and AAS in particular, time series data offers significant advantages in the operation of assets. These include, but are not limited to, gaining insight into patterns, trends and anomalies in asset behaviour. This information is essential for predictive maintenance to minimise downtime and extend asset life. "),
              createVNode("p", { class: "text-normalText mt-3 mb-2 text-subtitle-1" }, [
                createVNode("a", {
                  class: "text-primary",
                  style: { "text-decoration": "none" },
                  href: "https://industrialdigitaltwin.org/wp-content/uploads/2023/03/IDTA-02008-1-1_Submodel_TimeSeriesData.pdf",
                  target: "_blank"
                }, "Time Series Data"),
                createTextVNode(" is also an AAS submodel specification. A distinction is made between data within the AAS (internal segment), data from files (external segment) and data from time series databases (linked segment). The latter requires a database and a tool to collect data from the asset. ")
              ]),
              createVNode("p", { class: "text-normalText mt-3 mb-2 text-subtitle-1" }, [
                createTextVNode(" Here, "),
                createVNode("a", {
                  class: "text-primary",
                  style: { "text-decoration": "none" },
                  href: "https://www.influxdata.com/",
                  target: "_blank"
                }, "InfluxDB"),
                createTextVNode(" is used as a time series database in conjunction with "),
                createVNode("a", {
                  class: "text-primary",
                  style: { "text-decoration": "none" },
                  href: "https://www.influxdata.com/time-series-platform/telegraf/",
                  target: "_blank"
                }, "Telegraf"),
                createTextVNode(" as a tool for the collection of metrics. ")
              ]),
              createVNode(VAlert, {
                color: "primary",
                variant: "outlined",
                class: "bg-alertCard mt-8 mb-8"
              }, {
                default: withCtx(() => [
                  createVNode(VRadioGroup, {
                    modelValue: selection.value,
                    "onUpdate:modelValue": ($event) => selection.value = $event,
                    color: "primary",
                    "hide-details": "",
                    class: "text-normalText font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadio, {
                        label: "Don't include time series data from a linked database",
                        value: "noTSD"
                      }),
                      createVNode(VRadio, {
                        label: "Include time series data from a linked database",
                        value: "addTSD"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VSlideYTransition, null, {
                default: withCtx(() => [
                  selection.value === "addTSD" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-5"
                  }, [
                    createVNode(VDivider, { class: "mt-12 mb-8" }),
                    createVNode("h2", { class: "text-header" }, "InfluxDB Settings"),
                    createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, [
                      createTextVNode(" Configure the InfluxDB setup values below. They are written to the InfluxDB container initialization environment and mirrored to the BaSyx UI via "),
                      createVNode(VKbd, null, {
                        default: withCtx(() => [
                          createTextVNode("INFLUXDB_TOKEN")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" when the UI component is available. ")
                    ]),
                    createVNode(VAlert, {
                      color: "alertCard",
                      class: "mt-2 mb-8"
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
                                    createTextVNode("mdi-database-cog")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "font-weight-medium text-header" }, "What these settings control")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("ul", { class: "text-subheader font-weight-medium mt-2 ms-6" }, [
                          createVNode("li", null, [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("DOCKER_INFLUXDB_INIT_USERNAME")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" and "),
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("DOCKER_INFLUXDB_INIT_PASSWORD")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" define the bootstrap user. ")
                          ]),
                          createVNode("li", null, [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("DOCKER_INFLUXDB_INIT_ORG")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" and "),
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("DOCKER_INFLUXDB_INIT_BUCKET")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" define the default workspace for writes. ")
                          ]),
                          createVNode("li", null, [
                            createVNode(VKbd, null, {
                              default: withCtx(() => [
                                createTextVNode("DOCKER_INFLUXDB_INIT_ADMIN_TOKEN")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" is generated and used by integrated consumers such as the BaSyx UI. ")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { density: "compact" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: influxInitUsername.value,
                              "onUpdate:modelValue": ($event) => influxInitUsername.value = $event,
                              variant: "solo-filled",
                              label: "DOCKER_INFLUXDB_INIT_USERNAME",
                              "hide-details": "auto",
                              hint: "Bootstrap username for InfluxDB initialization.",
                              "persistent-hint": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: influxInitPassword.value,
                              "onUpdate:modelValue": ($event) => influxInitPassword.value = $event,
                              variant: "solo-filled",
                              label: "DOCKER_INFLUXDB_INIT_PASSWORD",
                              type: showInfluxPassword.value ? "text" : "password",
                              "append-inner-icon": showInfluxPassword.value ? "mdi-eye-off" : "mdi-eye",
                              "hide-details": "auto",
                              hint: "Bootstrap password for the configured user.",
                              "persistent-hint": "",
                              "onClick:appendInner": ($event) => showInfluxPassword.value = !showInfluxPassword.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: influxInitOrg.value,
                              "onUpdate:modelValue": ($event) => influxInitOrg.value = $event,
                              variant: "solo-filled",
                              label: "DOCKER_INFLUXDB_INIT_ORG",
                              "hide-details": "auto",
                              hint: "Default organization created in InfluxDB.",
                              "persistent-hint": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: influxInitBucket.value,
                              "onUpdate:modelValue": ($event) => influxInitBucket.value = $event,
                              variant: "solo-filled",
                              label: "DOCKER_INFLUXDB_INIT_BUCKET",
                              "hide-details": "auto",
                              hint: "Default bucket used for time-series data.",
                              "persistent-hint": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: influxInitToken.value,
                              "onUpdate:modelValue": ($event) => influxInitToken.value = $event,
                              variant: "solo-filled",
                              type: showInfluxToken.value ? "text" : "password",
                              "append-inner-icon": showInfluxToken.value ? "mdi-eye-off" : "mdi-eye",
                              label: "DOCKER_INFLUXDB_INIT_ADMIN_TOKEN",
                              "hide-details": "auto",
                              hint: "Admin token shared with BaSyx UI as INFLUXDB_TOKEN.",
                              "persistent-hint": "",
                              "onClick:appendInner": ($event) => showInfluxToken.value = !showInfluxToken.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      class: "mt-4 mb-2",
                      block: "",
                      variant: "tonal",
                      onClick: ($event) => applyInfluxSettings()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Apply InfluxDB Settings ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VBtn, {
                      class: "mb-2",
                      block: "",
                      variant: "tonal",
                      color: "secondary",
                      onClick: ($event) => regenerateInfluxToken()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Regenerate InfluxDB Token ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VBtn, {
                      class: "mb-8",
                      block: "",
                      color: "secondary",
                      variant: "text",
                      onClick: ($event) => resetInfluxDefaults()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reset InfluxDB Defaults ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VDivider, { class: "mt-12 mb-8" }),
                    createVNode("h2", { class: "text-header" }, "Metrics Collection"),
                    createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, " Telegraf is configured using a configuration file. This file contains the necessary information about the asset endpoints that provide data to be stored in the time series database. "),
                    createVNode("p", { class: "text-normalText mt-3 mb-6 text-subtitle-1" }, [
                      createTextVNode(" The "),
                      createVNode("a", {
                        class: "text-primary",
                        style: { "text-decoration": "none" },
                        href: "https://docs.influxdata.com/influxdb/latest/write-data/no-code/use-telegraf/",
                        target: "_blank"
                      }, "Telegraf configuration file"),
                      createTextVNode(" must be created beforehand. This can be done either "),
                      createVNode("a", {
                        class: "text-primary",
                        style: { "text-decoration": "none" },
                        href: "https://docs.influxdata.com/influxdb/v2/write-data/no-code/use-telegraf/auto-config/",
                        target: "_blank"
                      }, "automatically"),
                      createTextVNode(" or by "),
                      createVNode("a", {
                        class: "text-primary",
                        style: { "text-decoration": "none" },
                        href: "https://docs.influxdata.com/influxdb/v2/write-data/no-code/use-telegraf/manual-config/",
                        target: "_blank"
                      }, "hand"),
                      createTextVNode(". ")
                    ]),
                    createVNode(VFileInput, {
                      modelValue: telegrafConfigFile.value,
                      "onUpdate:modelValue": [($event) => telegrafConfigFile.value = $event, ($event) => addTelegrafConf()],
                      variant: "solo-filled",
                      "prepend-inner-icon": "$file",
                      "prepend-icon": "",
                      label: "Upload telegraf.conf File",
                      density: "compact",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VCardActions, { class: "px-0 mb-8" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "tonal",
                    "prepend-icon": "mdi-arrow-left",
                    to: "/get-started/behaviour/eventing"
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
                    to: "/get-started/visualization/ui"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/get-started/behaviour/time-series.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=time-series-DnfOxqM1.mjs.map
