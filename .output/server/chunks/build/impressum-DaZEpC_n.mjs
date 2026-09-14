import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { be as useHead } from './server.mjs';
import { V as VContainer } from './VContainer-BTz4nlxi.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "impressum",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Impressum | Eclipse BaSyx Starter-Kit",
      meta: [
        {
          name: "description",
          content: "Impressum des Eclipse BaSyx Starter-Kit."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "legal-page py-10 px-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 data-v-5c1fcdde${_scopeId}>Impressum</h1><p data-v-5c1fcdde${_scopeId}> Aaron Zielstorff<br data-v-5c1fcdde${_scopeId}> Ottomar-Geschke Str. 25a<br data-v-5c1fcdde${_scopeId}> 12555 Berlin </p><h2 data-v-5c1fcdde${_scopeId}>Kontakt</h2><p data-v-5c1fcdde${_scopeId}> Telefon: +4916097506280<br data-v-5c1fcdde${_scopeId}> E-Mail: <a href="mailto:aaron.zielstorff@iese.fraunhofer.de" data-v-5c1fcdde${_scopeId}>aaron.zielstorff@iese.fraunhofer.de</a></p><p data-v-5c1fcdde${_scopeId}> Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" data-v-5c1fcdde${_scopeId}>eRecht24</a></p>`);
          } else {
            return [
              createVNode("h1", null, "Impressum"),
              createVNode("p", null, [
                createTextVNode(" Aaron Zielstorff"),
                createVNode("br"),
                createTextVNode(" Ottomar-Geschke Str. 25a"),
                createVNode("br"),
                createTextVNode(" 12555 Berlin ")
              ]),
              createVNode("h2", null, "Kontakt"),
              createVNode("p", null, [
                createTextVNode(" Telefon: +4916097506280"),
                createVNode("br"),
                createTextVNode(" E-Mail: "),
                createVNode("a", { href: "mailto:aaron.zielstorff@iese.fraunhofer.de" }, "aaron.zielstorff@iese.fraunhofer.de")
              ]),
              createVNode("p", null, [
                createTextVNode(" Quelle: "),
                createVNode("a", {
                  href: "https://www.e-recht24.de",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, "eRecht24")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impressum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const impressum = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c1fcdde"]]);

export { impressum as default };
//# sourceMappingURL=impressum-DaZEpC_n.mjs.map
