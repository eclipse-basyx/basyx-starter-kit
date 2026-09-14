import { defineComponent, ref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as VRow, V as VCol } from './VRow-DT77qovv.mjs';
import { V as VCard } from './VCard-BMbud2FD.mjs';
import { V as VSpacer } from './VSpacer-D_joSj59.mjs';
import { k as VBtn } from './server.mjs';
import { V as VChip } from './VChip-hjpRim43.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    const mailtoSupport = ref(
      `mailto:anfrage@iese.fraunhofer.de,frank.schnicke@iese.fraunhofer.de?subject=Commercial Support Request&body=Hello,%0D%0A%0D%0AWe are reaching out to inquire about commercial support for <Eclipse BaSyx / the Asset Administration Shell>. We'd love to learn more about your offerings.%0D%0A%0D%0AName: <Insert Your Name>%0D%0ARole: <Insert Your Role>%0D%0ACompany: <Insert Company Name>%0D%0AContact: <Insert Your Contact Info>%0D%0A%0D%0A<Please add any additional details or specific requests here>%0D%0A%0D%0ABest regards,%0D%0A<Your Name>`
    );
    const mailtoResearch = ref(
      `mailto:anfrage@iese.fraunhofer.de,frank.schnicke@iese.fraunhofer.de?subject=Research Collaboration Inquiry&body=Hello,%0D%0A%0D%0AWe are reaching out to explore potential research collaboration involving <Digital Twins/AAS/Dataspaces>. We'd love to discuss how we can work together.%0D%0A%0D%0AResearch Area/Interest: <Insert your focus>%0D%0AContact Info: <Insert your contact details>%0D%0A%0D%0ALooking forward to hearing from you on how we can proceed!%0D%0A%0D%0ABest regards,%0D%0A<Your Name>`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    border: "",
                    class: "d-flex flex-column h-100"
                  }, {
                    text: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h6 d-flex align-center text-success"${_scopeId3}> Get Commercial Support `);
                        _push4(ssrRenderComponent(VChip, {
                          class: "text-none ms-3",
                          size: "x-small",
                          variant: "outlined",
                          "prepend-icon": "mdi-face-agent"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-medium-emphasis"${_scopeId4}>Help</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-medium-emphasis" }, "Help")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="mt-4"${_scopeId3}><p class="text-caption text-medium-emphasis mb-2"${_scopeId3}> Need help with your own project using Ecipse BaSyx and the Asset Administration Shell? </p><strong class="text-body-2 d-inline-block"${_scopeId3}> Our team of experts is here to help you advance your project to the next level! </strong></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h6 d-flex align-center text-success" }, [
                            createTextVNode(" Get Commercial Support "),
                            createVNode(VChip, {
                              class: "text-none ms-3",
                              size: "x-small",
                              variant: "outlined",
                              "prepend-icon": "mdi-face-agent"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-medium-emphasis" }, "Help")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("p", { class: "text-caption text-medium-emphasis mb-2" }, " Need help with your own project using Ecipse BaSyx and the Asset Administration Shell? "),
                            createVNode("strong", { class: "text-body-2 d-inline-block" }, " Our team of experts is here to help you advance your project to the next level! ")
                          ])
                        ];
                      }
                    }),
                    actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "text-none ms-2 text-buttonText ma-2",
                          color: "success",
                          rounded: "lg",
                          text: "Contact us!",
                          variant: "flat",
                          href: mailtoSupport.value
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            class: "text-none ms-2 text-buttonText ma-2",
                            color: "success",
                            rounded: "lg",
                            text: "Contact us!",
                            variant: "flat",
                            href: mailtoSupport.value
                          }, null, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      border: "",
                      class: "d-flex flex-column h-100"
                    }, {
                      text: withCtx(() => [
                        createVNode("div", { class: "text-h6 d-flex align-center text-success" }, [
                          createTextVNode(" Get Commercial Support "),
                          createVNode(VChip, {
                            class: "text-none ms-3",
                            size: "x-small",
                            variant: "outlined",
                            "prepend-icon": "mdi-face-agent"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-medium-emphasis" }, "Help")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("p", { class: "text-caption text-medium-emphasis mb-2" }, " Need help with your own project using Ecipse BaSyx and the Asset Administration Shell? "),
                          createVNode("strong", { class: "text-body-2 d-inline-block" }, " Our team of experts is here to help you advance your project to the next level! ")
                        ])
                      ]),
                      actions: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          class: "text-none ms-2 text-buttonText ma-2",
                          color: "success",
                          rounded: "lg",
                          text: "Contact us!",
                          variant: "flat",
                          href: mailtoSupport.value
                        }, null, 8, ["href"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    border: "",
                    class: "d-flex flex-column h-100"
                  }, {
                    text: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h6 d-flex align-center text-primary"${_scopeId3}> Research Collaboration `);
                        _push4(ssrRenderComponent(VChip, {
                          class: "text-none ms-3",
                          size: "x-small",
                          variant: "outlined",
                          "prepend-icon": "mdi-school"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-medium-emphasis"${_scopeId4}>Open</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-medium-emphasis" }, "Open")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="mt-4"${_scopeId3}><p class="text-caption text-medium-emphasis mb-2"${_scopeId3}> Exploring AAS, Digital Twins, or Dataspaces? </p><strong class="text-body-2 d-inline-block"${_scopeId3}> Our researchers can enhance your project with cutting-edge insights and hands-on expertise. Let&#39;s partner to make your research a success! </strong></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h6 d-flex align-center text-primary" }, [
                            createTextVNode(" Research Collaboration "),
                            createVNode(VChip, {
                              class: "text-none ms-3",
                              size: "x-small",
                              variant: "outlined",
                              "prepend-icon": "mdi-school"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-medium-emphasis" }, "Open")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("p", { class: "text-caption text-medium-emphasis mb-2" }, " Exploring AAS, Digital Twins, or Dataspaces? "),
                            createVNode("strong", { class: "text-body-2 d-inline-block" }, " Our researchers can enhance your project with cutting-edge insights and hands-on expertise. Let's partner to make your research a success! ")
                          ])
                        ];
                      }
                    }),
                    actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "text-none ms-2 text-buttonText ma-2",
                          color: "primary",
                          rounded: "lg",
                          text: "Connect with us!",
                          variant: "flat",
                          href: mailtoResearch.value
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            class: "text-none ms-2 text-buttonText ma-2",
                            color: "primary",
                            rounded: "lg",
                            text: "Connect with us!",
                            variant: "flat",
                            href: mailtoResearch.value
                          }, null, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      border: "",
                      class: "d-flex flex-column h-100"
                    }, {
                      text: withCtx(() => [
                        createVNode("div", { class: "text-h6 d-flex align-center text-primary" }, [
                          createTextVNode(" Research Collaboration "),
                          createVNode(VChip, {
                            class: "text-none ms-3",
                            size: "x-small",
                            variant: "outlined",
                            "prepend-icon": "mdi-school"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-medium-emphasis" }, "Open")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("p", { class: "text-caption text-medium-emphasis mb-2" }, " Exploring AAS, Digital Twins, or Dataspaces? "),
                          createVNode("strong", { class: "text-body-2 d-inline-block" }, " Our researchers can enhance your project with cutting-edge insights and hands-on expertise. Let's partner to make your research a success! ")
                        ])
                      ]),
                      actions: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          class: "text-none ms-2 text-buttonText ma-2",
                          color: "primary",
                          rounded: "lg",
                          text: "Connect with us!",
                          variant: "flat",
                          href: mailtoResearch.value
                        }, null, 8, ["href"])
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
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    border: "",
                    class: "d-flex flex-column h-100"
                  }, {
                    text: withCtx(() => [
                      createVNode("div", { class: "text-h6 d-flex align-center text-success" }, [
                        createTextVNode(" Get Commercial Support "),
                        createVNode(VChip, {
                          class: "text-none ms-3",
                          size: "x-small",
                          variant: "outlined",
                          "prepend-icon": "mdi-face-agent"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-medium-emphasis" }, "Help")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("p", { class: "text-caption text-medium-emphasis mb-2" }, " Need help with your own project using Ecipse BaSyx and the Asset Administration Shell? "),
                        createVNode("strong", { class: "text-body-2 d-inline-block" }, " Our team of experts is here to help you advance your project to the next level! ")
                      ])
                    ]),
                    actions: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        class: "text-none ms-2 text-buttonText ma-2",
                        color: "success",
                        rounded: "lg",
                        text: "Contact us!",
                        variant: "flat",
                        href: mailtoSupport.value
                      }, null, 8, ["href"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    border: "",
                    class: "d-flex flex-column h-100"
                  }, {
                    text: withCtx(() => [
                      createVNode("div", { class: "text-h6 d-flex align-center text-primary" }, [
                        createTextVNode(" Research Collaboration "),
                        createVNode(VChip, {
                          class: "text-none ms-3",
                          size: "x-small",
                          variant: "outlined",
                          "prepend-icon": "mdi-school"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-medium-emphasis" }, "Open")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("p", { class: "text-caption text-medium-emphasis mb-2" }, " Exploring AAS, Digital Twins, or Dataspaces? "),
                        createVNode("strong", { class: "text-body-2 d-inline-block" }, " Our researchers can enhance your project with cutting-edge insights and hands-on expertise. Let's partner to make your research a success! ")
                      ])
                    ]),
                    actions: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        class: "text-none ms-2 text-buttonText ma-2",
                        color: "primary",
                        rounded: "lg",
                        text: "Connect with us!",
                        variant: "flat",
                        href: mailtoResearch.value
                      }, null, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "ContactUs" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ContactUs-BNz_IoyV.mjs.map
