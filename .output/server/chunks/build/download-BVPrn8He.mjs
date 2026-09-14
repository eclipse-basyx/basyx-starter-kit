import { _ as __nuxt_component_0 } from './ContactUs-BNz_IoyV.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import JSZip from 'jszip';
import { bz as useSeoMeta, b0 as useAppStore, bt as useRoute$2, k as VBtn, v as buildAasEnvironmentExternalUrl, D as DEFAULT_AAS_ENVIRONMENT_EXTERNAL_PORT, x as buildExternalServiceUrl, a as DEFAULT_AAS_UI_EXTERNAL_PORT } from './server.mjs';
import { c as VFadeTransition, V as VDivider } from './VDivider-D2ayNrXO.mjs';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
import { V as VBreadcrumbs } from './VBreadcrumbs-Cwgk5YXB.mjs';
import { V as VAlert } from './VAlert-Bcj1ynP6.mjs';
import { a as VRow, V as VCol } from './VRow-DT77qovv.mjs';
import { V as VSpacer } from './VSpacer-D_joSj59.mjs';
import { V as VTextField } from './VTextField-CmLAcn2i.mjs';
import { V as VCardActions } from './VCardActions-_afJsMdG.mjs';
import './VCard-BMbud2FD.mjs';
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
import './autofocus-DXczjZSo.mjs';
import './VField-CBPZxNBP.mjs';
import './VInput-CF1s2jmS.mjs';

const PEM_LINE_LENGTH = 64;
function toPem(encodedKey) {
  const bytes = new Uint8Array(encodedKey);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  const base64 = btoa(binary);
  const body = base64.match(new RegExp(`.{1,${PEM_LINE_LENGTH}}`, "g"))?.join("\n");
  if (!body) {
    throw new Error("Could not encode the generated private key.");
  }
  return `-----BEGIN PRIVATE KEY-----
${body}
-----END PRIVATE KEY-----
`;
}
async function generateRsaPrivateKeyPem() {
  if (!globalThis.crypto?.subtle) {
    throw new Error("Web Crypto is unavailable.");
  }
  const keyPair = await globalThis.crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256"
    },
    true,
    ["sign", "verify"]
  );
  return toPem(await globalThis.crypto.subtle.exportKey("pkcs8", keyPair.privateKey));
}
function createSetupReadme({
  externalBaseUrl,
  aasEnvironmentExternalPort,
  aasEnvironmentContextPath,
  aasUiExternalPort,
  aasUiBasePath
}) {
  const aasEnvironmentUrl = buildAasEnvironmentExternalUrl(
    externalBaseUrl,
    aasEnvironmentExternalPort ?? DEFAULT_AAS_ENVIRONMENT_EXTERNAL_PORT,
    aasEnvironmentContextPath
  );
  const aasWebUiUrl = buildExternalServiceUrl(
    externalBaseUrl,
    aasUiExternalPort ?? DEFAULT_AAS_UI_EXTERNAL_PORT,
    aasUiBasePath
  );
  return `# BaSyx Setup
This setup uses BaSyx Go components and PostgreSQL.

## Start
1. Extract this archive.
2. Open a terminal in the extracted folder.
3. Start the stack:
\`\`\`
docker compose up -d
\`\`\`

## Endpoints
- AAS Environment: ${aasEnvironmentUrl}
- AAS Web UI: ${aasWebUiUrl}

## Notes
- A unique RSA private key is generated in your browser for this setup at \`basyx/rsa-key.pem\`.
- Keep this private key confidential and replace it if you suspect it has been exposed.
- Infrastructure connections for the UI are defined in \`basyx-infra.yml\`.
- Place your own AAS files into the \`aas/\` folder or upload through the UI.`;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Download"
  },
  __name: "download",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Download | Eclipse BaSyx™",
      ogTitle: "Download | Eclipse BaSyx™"
    });
    const appStore = useAppStore();
    const breadcrumbs = ref([
      { title: "Home", to: "/" },
      { title: "Get Started", to: "/get-started/introduction" },
      { title: "Download BaSyx", to: "/get-started/download" }
    ]);
    const readmeFile = ref("");
    const copyIcon = ref("mdi-clipboard-outline");
    const shareConfigLink = ref("");
    const copyConfigLinkIcon = ref("mdi-link-variant");
    const downloadError = ref("");
    const isTimeSeriesDataEnabled = computed(() => appStore.getTimeSeriesData);
    const logoLightStore = computed(() => appStore.getLogoLight);
    const logoDarkStore = computed(() => appStore.getLogoDark);
    const iconStore = computed(() => appStore.getAppIcon);
    const telegrafConfigStore = computed(() => appStore.getTelegrafConf);
    const aasFilesStore = computed(() => appStore.getAasFiles);
    const route = useRoute$2();
    function createReadme() {
      readmeFile.value = createSetupReadme({
        externalBaseUrl: appStore.getExternalBaseUrl,
        aasEnvironmentExternalPort: appStore.getContainerPort("aas-environment"),
        aasEnvironmentContextPath: appStore.getContextPath("aas-environment"),
        aasUiExternalPort: appStore.getContainerPort("aas-ui"),
        aasUiBasePath: appStore.getContextPath("aas-ui")
      });
    }
    async function downloadAsZip() {
      downloadError.value = "";
      try {
        const privateKeyPem = await generateRsaPrivateKeyPem();
        const zip = new JSZip();
        const aasFolder = zip.folder("aas");
        if (aasFilesStore.value && aasFilesStore.value.length > 0) {
          aasFilesStore.value.forEach((file) => {
            aasFolder?.file(file.name, file);
          });
        }
        const basyxFolder = zip.folder("basyx");
        basyxFolder?.file("rsa-key.pem", privateKeyPem);
        if (isTimeSeriesDataEnabled.value) {
          const telegrafFolder = zip.folder("telegraf");
          if (telegrafConfigStore.value) {
            telegrafFolder?.file(telegrafConfigStore.value.name, telegrafConfigStore.value);
          }
        }
        if (logoLightStore.value || logoDarkStore.value || iconStore.value) {
          const logoFolder = zip.folder("logo");
          if (logoLightStore.value) {
            logoFolder?.file(logoLightStore.value.name, logoLightStore.value);
          }
          if (logoDarkStore.value) {
            logoFolder?.file(logoDarkStore.value.name, logoDarkStore.value);
          }
          if (iconStore.value) {
            logoFolder?.file(iconStore.value.name, iconStore.value);
          }
        }
        const dockerComposeConfig = appStore.getDockerComposeConfigAsString.value;
        if (dockerComposeConfig && typeof dockerComposeConfig === "string") {
          zip.file("docker-compose.yml", dockerComposeConfig);
        }
        const basyxInfraConfig = appStore.getBasyxInfraConfigAsString.value;
        if (basyxInfraConfig && typeof basyxInfraConfig === "string") {
          zip.file("basyx-infra.yml", basyxInfraConfig);
        }
        zip.file("README.md", readmeFile.value);
        const content = await zip.generateAsync({ type: "blob" });
        const a = (void 0).createElement("a");
        const url = URL.createObjectURL(content);
        a.href = url;
        a.download = "basyx-setup.zip";
        a.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Could not generate setup archive", error);
        downloadError.value = "Could not generate a unique signing key. Download the setup from a modern browser over HTTPS or localhost.";
      }
    }
    function copyToClipboard() {
      (void 0).clipboard.writeText("docker compose up -d");
      copyIcon.value = "mdi-clipboard-check-outline";
      setTimeout(() => {
        copyIcon.value = "mdi-clipboard-outline";
      }, 2e3);
    }
    function copyConfigLinkToClipboard() {
      if (!shareConfigLink.value) {
        return;
      }
      (void 0).clipboard.writeText(shareConfigLink.value);
      copyConfigLinkIcon.value = "mdi-check";
      setTimeout(() => {
        copyConfigLinkIcon.value = "mdi-link-variant";
      }, 2e3);
    }
    watch(
      () => route.fullPath,
      () => {
      }
    );
    watch(
      () => appStore.createSerializableSnapshot(),
      () => {
        createReadme();
      }
    );
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
            _push2(`<h1 class="mb-8 text-header"${_scopeId}>Download Your BaSyx Setup</h1>`);
            _push2(ssrRenderComponent(_component_ContactUs, null, null, _parent2, _scopeId));
            _push2(`<p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> Your BaSyx setup is now complete. Click on <code class="text-subheader"${_scopeId}>Download</code> and extract the zip file to your device. </p><p class="text-normalText mt-3 mb-2 text-subtitle-1"${_scopeId}> Run the following command in a terminal to start the BaSyx Containers: </p>`);
            _push2(ssrRenderComponent(VAlert, {
              color: "primary",
              variant: "outlined",
              class: "bg-alertCard mt-8 mb-8 pr-1 py-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { align: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<code class="text-subheader font-weight-medium"${_scopeId4}>docker compose up -d</code>`);
                            } else {
                              return [
                                createVNode("code", { class: "text-subheader font-weight-medium" }, "docker compose up -d")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VFadeTransition, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (copyIcon.value === "mdi-clipboard-check-outline") {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "auto",
                                  class: "pr-0"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="text-subheader"${_scopeId5}>copied</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-subheader" }, "copied")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                copyIcon.value === "mdi-clipboard-check-outline" ? (openBlock(), createBlock(VCol, {
                                  key: 0,
                                  cols: "auto",
                                  class: "pr-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subheader" }, "copied")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "plain",
                                icon: copyIcon.value,
                                color: "normalText",
                                onClick: ($event) => copyToClipboard()
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  variant: "plain",
                                  icon: copyIcon.value,
                                  color: "normalText",
                                  onClick: ($event) => copyToClipboard()
                                }, null, 8, ["icon", "onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("code", { class: "text-subheader font-weight-medium" }, "docker compose up -d")
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode(VFadeTransition, null, {
                            default: withCtx(() => [
                              copyIcon.value === "mdi-clipboard-check-outline" ? (openBlock(), createBlock(VCol, {
                                key: 0,
                                cols: "auto",
                                class: "pr-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-subheader" }, "copied")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "plain",
                                icon: copyIcon.value,
                                color: "normalText",
                                onClick: ($event) => copyToClipboard()
                              }, null, 8, ["icon", "onClick"])
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
                    createVNode(VRow, { align: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("code", { class: "text-subheader font-weight-medium" }, "docker compose up -d")
                          ]),
                          _: 1
                        }),
                        createVNode(VSpacer),
                        createVNode(VFadeTransition, null, {
                          default: withCtx(() => [
                            copyIcon.value === "mdi-clipboard-check-outline" ? (openBlock(), createBlock(VCol, {
                              key: 0,
                              cols: "auto",
                              class: "pr-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-subheader" }, "copied")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "auto" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "plain",
                              icon: copyIcon.value,
                              color: "normalText",
                              onClick: ($event) => copyToClipboard()
                            }, null, 8, ["icon", "onClick"])
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
            _push2(ssrRenderComponent(VBtn, {
              class: "mb-8",
              variant: "tonal",
              block: "",
              "append-icon": "mdi-download",
              color: "success",
              onClick: ($event) => downloadAsZip()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Download BaSyx Setup`);
                } else {
                  return [
                    createTextVNode("Download BaSyx Setup")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (downloadError.value) {
              _push2(ssrRenderComponent(VAlert, {
                class: "mb-8",
                type: "error",
                variant: "tonal"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(downloadError.value)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(downloadError.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VDivider, { class: "mb-8" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-header"${_scopeId}>Share Current Configuration</h2><p class="text-normalText mt-8 mb-5 text-subtitle-1"${_scopeId}> Copy the current configuration link to reproduce setups, report issues, or share your configuration with teammates. </p>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: shareConfigLink.value,
              "onUpdate:modelValue": ($event) => shareConfigLink.value = $event,
              class: "mb-3",
              variant: "solo-filled",
              readonly: "",
              label: "Current configuration URL",
              "hide-details": ""
            }, {
              "append-inner": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "plain",
                    icon: copyConfigLinkIcon.value,
                    color: "normalText",
                    onClick: ($event) => copyConfigLinkToClipboard()
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      variant: "plain",
                      icon: copyConfigLinkIcon.value,
                      color: "normalText",
                      onClick: withModifiers(($event) => copyConfigLinkToClipboard(), ["stop"])
                    }, null, 8, ["icon", "onClick"])
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
                    to: "/get-started/deployment/access-control"
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
                } else {
                  return [
                    createVNode(VBtn, {
                      variant: "tonal",
                      "prepend-icon": "mdi-arrow-left",
                      to: "/get-started/deployment/access-control"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Back")
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
              createVNode("h1", { class: "mb-8 text-header" }, "Download Your BaSyx Setup"),
              createVNode(_component_ContactUs),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, [
                createTextVNode(" Your BaSyx setup is now complete. Click on "),
                createVNode("code", { class: "text-subheader" }, "Download"),
                createTextVNode(" and extract the zip file to your device. ")
              ]),
              createVNode("p", { class: "text-normalText mt-3 mb-2 text-subtitle-1" }, " Run the following command in a terminal to start the BaSyx Containers: "),
              createVNode(VAlert, {
                color: "primary",
                variant: "outlined",
                class: "bg-alertCard mt-8 mb-8 pr-1 py-1"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("code", { class: "text-subheader font-weight-medium" }, "docker compose up -d")
                        ]),
                        _: 1
                      }),
                      createVNode(VSpacer),
                      createVNode(VFadeTransition, null, {
                        default: withCtx(() => [
                          copyIcon.value === "mdi-clipboard-check-outline" ? (openBlock(), createBlock(VCol, {
                            key: 0,
                            cols: "auto",
                            class: "pr-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-subheader" }, "copied")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            variant: "plain",
                            icon: copyIcon.value,
                            color: "normalText",
                            onClick: ($event) => copyToClipboard()
                          }, null, 8, ["icon", "onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VBtn, {
                class: "mb-8",
                variant: "tonal",
                block: "",
                "append-icon": "mdi-download",
                color: "success",
                onClick: ($event) => downloadAsZip()
              }, {
                default: withCtx(() => [
                  createTextVNode("Download BaSyx Setup")
                ]),
                _: 1
              }, 8, ["onClick"]),
              downloadError.value ? (openBlock(), createBlock(VAlert, {
                key: 0,
                class: "mb-8",
                type: "error",
                variant: "tonal"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(downloadError.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(VDivider, { class: "mb-8" }),
              createVNode("h2", { class: "text-header" }, "Share Current Configuration"),
              createVNode("p", { class: "text-normalText mt-8 mb-5 text-subtitle-1" }, " Copy the current configuration link to reproduce setups, report issues, or share your configuration with teammates. "),
              createVNode(VTextField, {
                modelValue: shareConfigLink.value,
                "onUpdate:modelValue": ($event) => shareConfigLink.value = $event,
                class: "mb-3",
                variant: "solo-filled",
                readonly: "",
                label: "Current configuration URL",
                "hide-details": ""
              }, {
                "append-inner": withCtx(() => [
                  createVNode(VBtn, {
                    variant: "plain",
                    icon: copyConfigLinkIcon.value,
                    color: "normalText",
                    onClick: withModifiers(($event) => copyConfigLinkToClipboard(), ["stop"])
                  }, null, 8, ["icon", "onClick"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VCardActions, { class: "px-0 mb-8" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    variant: "tonal",
                    "prepend-icon": "mdi-arrow-left",
                    to: "/get-started/deployment/access-control"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/get-started/download.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=download-BVPrn8He.mjs.map
