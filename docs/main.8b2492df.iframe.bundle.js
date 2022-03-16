(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "./.storybook/preview.js-generated-config-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          "parameters",
          function () {
            return parameters;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-properties.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js"
        );
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        esm = __webpack_require__(
          "./node_modules/@storybook/client-logger/dist/esm/index.js"
        ),
        parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          previewTabs: { "storybook/docs/panel": { index: -1 } },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
          docs: { source: { state: "open" } },
        };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
          case "argTypes":
            return esm.a.warn(
              "Invalid args/argTypes in config, ignoring.",
              JSON.stringify(value)
            );
          case "decorators":
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case "parameters":
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case "render":
            return Object(ClientApi.g)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./components/style/card.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./components/style/card.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./components/style/switch.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./components/style/switch.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./generated-stories-entry.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      (function (module) {
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"
            ),
            __webpack_require__(
              "./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"
            ),
          ],
          module,
          !1
        );
      }.call(
        this,
        __webpack_require__("./node_modules/webpack/buildin/module.js")(module)
      ));
    },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./components/style/card.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          ".utrecht-card {\r\n  border-radius: 5px !important;\r\n  background-color: #ffffff !important;\r\n  margin-bottom: 30px !important;\r\n  box-shadow: 2px 6px 15px 0px rgb(69 65 78 / 10%) !important;\r\n  border: 0px !important;\r\n}\r\n\r\n.utrecht-card-header {\r\n  padding: 1rem 1.25rem !important;\r\n  background-color: transparent !important;\r\n  border-bottom: 1px solid #ebecec !important;\r\n}\r\n\r\n.utrecht-card-head-row {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n}\r\n",
          "",
        ]),
          (module.exports = exports);
      },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./components/style/switch.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          '.toggle-switch {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 25px;\n}\n.toggle-switch input[type="checkbox"] {\n    display: none;\n}\n.toggle-switch .switch {\n    position: absolute;\n    cursor: pointer;\n    background-color: #DDDDDD;\n    border-radius: 25px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    transition: background-color 0.2s ease;\n}\n.toggle-switch .switch::before {\n    position: absolute;\n    content: "";\n    left: 2px;\n    top: 2px;\n    width: 21px;\n    height: 21px;\n    background-color: white;\n    border-radius: 50%;\n    transition: transform 0.3s ease;\n}\n.toggle-switch input[type="checkbox"]:checked + .switch::before {\n    transform: translateX(25px);\n    background-color: white;\n}\n.toggle-switch input[type="checkbox"]:checked + .switch {\n    background-color: #1269DB;\n}',
          "",
        ]),
          (module.exports = exports);
      },
    "./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./Card/Card.stories.tsx": "./stories/Card/Card.stories.tsx",
          "./Checkbox/Checkbox.stories.tsx":
            "./stories/Checkbox/Checkbox.stories.tsx",
          "./InfoTooltip/InfoTooltip.stories.tsx":
            "./stories/InfoTooltip/InfoTooltip.stories.tsx",
          "./Switch/Switch.stories.tsx": "./stories/Switch/Switch.stories.tsx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$");
      },
    "./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./Introduction.stories.mdx": "./stories/Introduction.stories.mdx",
          "./design.stories.mdx": "./stories/design.stories.mdx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$");
      },
    "./stories/Card/Card.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Component", function () {
          return Component;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./components/style/card.css");
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        card_Card = function Card(_ref) {
          var title = _ref.title,
            cardHeader = _ref.cardHeader,
            cardBody = _ref.cardBody,
            divider = _ref.divider;
          return Object(jsx_runtime.jsx)("div", {
            className: "utrecht-card card",
            children:
              !1 !== divider
                ? Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      Object(jsx_runtime.jsx)("div", {
                        className: "utrecht-card-header card-header",
                        children: Object(jsx_runtime.jsxs)("div", {
                          className: "utrecht-card-head-row card-head-row row",
                          children: [
                            title &&
                              cardHeader &&
                              Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                  Object(jsx_runtime.jsx)("div", {
                                    className: "col-6",
                                    children: Object(jsx_runtime.jsx)("h4", {
                                      className:
                                        "utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start",
                                      children: title,
                                    }),
                                  }),
                                  Object(jsx_runtime.jsx)("div", {
                                    className: "col-6 text-right",
                                    children: cardHeader && cardHeader(),
                                  }),
                                ],
                              }),
                            title &&
                              null === cardHeader &&
                              Object(jsx_runtime.jsx)("div", {
                                className: "col-12",
                                children: Object(jsx_runtime.jsx)("h4", {
                                  className:
                                    "utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start",
                                  children: title,
                                }),
                              }),
                          ],
                        }),
                      }),
                      Object(jsx_runtime.jsx)("div", {
                        className: "utrecht-card-body card-body",
                        children: cardBody && cardBody(),
                      }),
                    ],
                  })
                : Object(jsx_runtime.jsxs)("div", {
                    className: "utrecht-card-body card-body",
                    children: [
                      Object(jsx_runtime.jsx)("h4", {
                        className:
                          "utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start",
                        children: title,
                      }),
                      cardBody && cardBody(),
                    ],
                  }),
          });
        };
      card_Card.displayName = "Card";
      try {
        (card_Card.displayName = "Card"),
          (card_Card.__docgenInfo = {
            description: "This components renders a bootstrap card.",
            displayName: "Card",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
              cardHeader: {
                defaultValue: null,
                description: "",
                name: "cardHeader",
                required: !1,
                type: { name: "(() => Element)" },
              },
              cardBody: {
                defaultValue: null,
                description: "",
                name: "cardBody",
                required: !0,
                type: { name: "() => Element" },
              },
              divider: {
                defaultValue: null,
                description: "",
                name: "divider",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/Card/src/card.tsx#Card"] = {
              docgenInfo: card_Card.__docgenInfo,
              name: "Card",
              path: "components/Card/src/card.tsx#Card",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: "Components/Card",
        component: card_Card,
        argTypes: { backgroundColor: { control: "color" } },
      };
      var Card_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(card_Card, Object.assign({}, args));
      };
      Card_stories_Template.displayName = "Template";
      var Component = Card_stories_Template.bind({});
      Component.parameters = Object.assign(
        { storySource: { source: "(args) => <Card {...args} />" } },
        Component.parameters
      );
    },
    "./stories/Checkbox/Checkbox.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Component", function () {
          return Component;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var lodash = __webpack_require__("./node_modules/lodash/lodash.js"),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        checkbox_Checkbox = function Checkbox(_ref) {
          var type = _ref.type,
            id = _ref.id,
            nameLabel = _ref.nameLabel,
            nameAttribute = _ref.nameAttribute,
            data = _ref.data,
            required = _ref.required,
            defaultValue = _ref.defaultValue;
          return Object(jsx_runtime.jsxs)("div", {
            className: "form-check",
            children: [
              Object(jsx_runtime.jsx)("input", {
                className:
                  "form-check-input utrecht-checkbox utrecht-checkbox--html-input",
                type: type,
                id: id,
                name: nameAttribute,
                defaultChecked: !0 === data,
                defaultValue: "false" === defaultValue ? "false" : "true",
                required: !0 === required,
              }),
              Object(jsx_runtime.jsx)("label", {
                className: "form-check-label",
                htmlFor: id,
                children: lodash.upperFirst(nameLabel),
              }),
            ],
          });
        };
      checkbox_Checkbox.displayName = "Checkbox";
      try {
        (checkbox_Checkbox.displayName = "Checkbox"),
          (checkbox_Checkbox.__docgenInfo = {
            description: "",
            displayName: "Checkbox",
            props: {
              type: {
                defaultValue: null,
                description: "",
                name: "type",
                required: !0,
                type: { name: "string" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !0,
                type: { name: "string" },
              },
              nameLabel: {
                defaultValue: null,
                description: "",
                name: "nameLabel",
                required: !0,
                type: { name: "string" },
              },
              nameAttribute: {
                defaultValue: null,
                description: "",
                name: "nameAttribute",
                required: !0,
                type: { name: "string" },
              },
              data: {
                defaultValue: null,
                description: "",
                name: "data",
                required: !1,
                type: { name: "boolean | null" },
              },
              required: {
                defaultValue: null,
                description: "",
                name: "required",
                required: !1,
                type: { name: "boolean" },
              },
              defaultValue: {
                defaultValue: null,
                description: "",
                name: "defaultValue",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/Checkbox/src/checkbox.tsx#Checkbox"
            ] = {
              docgenInfo: checkbox_Checkbox.__docgenInfo,
              name: "Checkbox",
              path: "components/Checkbox/src/checkbox.tsx#Checkbox",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: "Components/Checkbox",
        component: checkbox_Checkbox,
        argTypes: { backgroundColor: { control: "color" } },
      };
      var Checkbox_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(
          checkbox_Checkbox,
          Object.assign({}, args)
        );
      };
      Checkbox_stories_Template.displayName = "Template";
      var Component = Checkbox_stories_Template.bind({});
      Component.parameters = Object.assign(
        { storySource: { source: "(args) => <Checkbox {...args} />" } },
        Component.parameters
      );
    },
    "./stories/InfoTooltip/InfoTooltip.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Component", function () {
          return Component;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var OverlayTrigger = __webpack_require__(
          "./node_modules/react-bootstrap/esm/OverlayTrigger.js"
        ),
        Tooltip = __webpack_require__(
          "./node_modules/react-bootstrap/esm/Tooltip.js"
        ),
        index_es = __webpack_require__(
          "./node_modules/@fortawesome/react-fontawesome/index.es.js"
        ),
        free_solid_svg_icons_index_es = __webpack_require__(
          "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        InfoTooltip_InfoTooltip = function InfoTooltip(_ref) {
          var content = _ref.content,
            placement = _ref.placement,
            layoutClassName = _ref.layoutClassName,
            _placement = null != placement ? placement : "top";
          return Object(jsx_runtime.jsx)(
            OverlayTrigger.a,
            {
              placement: _placement,
              overlay: Object(jsx_runtime.jsx)(Tooltip.a, {
                id: "tooltip-" + _placement,
                children: content,
              }),
              children: Object(jsx_runtime.jsx)("span", {
                className: layoutClassName,
                children: Object(jsx_runtime.jsx)(index_es.a, {
                  icon: free_solid_svg_icons_index_es.a,
                }),
              }),
            },
            _placement
          );
        };
      InfoTooltip_InfoTooltip.displayName = "InfoTooltip";
      try {
        (InfoTooltip_InfoTooltip.displayName = "InfoTooltip"),
          (InfoTooltip_InfoTooltip.__docgenInfo = {
            description: "",
            displayName: "InfoTooltip",
            props: {
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !0,
                type: { name: "Element" },
              },
              placement: {
                defaultValue: null,
                description: "",
                name: "placement",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"top"' },
                    { value: '"right"' },
                    { value: '"bottom"' },
                    { value: '"left"' },
                  ],
                },
              },
              layoutClassName: {
                defaultValue: null,
                description: "",
                name: "layoutClassName",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/InfoTooltip/InfoTooltip.tsx#InfoTooltip"
            ] = {
              docgenInfo: InfoTooltip_InfoTooltip.__docgenInfo,
              name: "InfoTooltip",
              path: "components/InfoTooltip/InfoTooltip.tsx#InfoTooltip",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: "Components/InfoTooltip",
        component: InfoTooltip_InfoTooltip,
        argTypes: { backgroundColor: { control: "color" } },
      };
      var InfoTooltip_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(
          InfoTooltip_InfoTooltip,
          Object.assign({}, args)
        );
      };
      InfoTooltip_stories_Template.displayName = "Template";
      var Component = InfoTooltip_stories_Template.bind({});
      Component.parameters = Object.assign(
        { storySource: { source: "(args) => <InfoTooltip {...args} />" } },
        Component.parameters
      );
    },
    "./stories/Introduction.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./stories/assets/code-brackets.svg"),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default =
          __webpack_require__.n(
            _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__
          ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          "./stories/assets/colors.svg"
        ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__
          ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          "./stories/assets/comments.svg"
        ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default =
          __webpack_require__.n(
            _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__
          ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__("./stories/assets/direction.svg"),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default =
          __webpack_require__.n(
            _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__
          ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          "./stories/assets/flow.svg"
        ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default =
          __webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          "./stories/assets/plugin.svg"
        ),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(
            _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__
          ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          "./stories/assets/repo.svg"
        ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default =
          __webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__("./stories/assets/stackalt.svg"),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default =
          __webpack_require__.n(
            _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__
          ),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,
            { title: "Conduction/Introduction", mdxType: "Meta" }
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "style",
            null,
            "\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h1",
            { id: "conduction-nl-design-system" },
            "Conduction NL Design System"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Home to our design guidelines, component documentation, and resources for building apps with our components for\nthe NL design system. The NL Design System is a WORK IN PROGRESS, and components are released as alpha versions. Always specify\nexact versions and test for breaking changes before updating to a newer release."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "This project is part of a community initiative to use NL Design System components for projects that need to adhere to\nthe Design System. Teams from the Municipalities of The Netherlands and those they contract to develop websites\nand apps can collaborate via this project."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "getting-started" },
            "Getting started"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Include the Design Token CSS variables:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "pre",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "code",
              { parentName: "pre" },
              '<link\n  rel="stylesheet"\n  type="text/css"\n  href="https://unpkg.com/@utrecht/design-tokens/dist/index.css"\n/>\n'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Combine it with the latest Web Components from the NL Design System community, for\nexample:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "pre",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "code",
              { parentName: "pre" },
              '<script\n  src="https://unpkg.com/@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js"\n  type="module"\n></script>\n'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Then you can go ahead and see the result:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "utrecht-html-content",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "h1",
              null,
              "Page styled with NL Design System"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Copy Avoid automatic upgrades to a new version with breaking changes For all dependencies,\nsee what the version is you use while developing and update the URL without version\nto include a version number, and ensure your page keeps working even when new versions\nare released:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "For alpha, beta and rc versions:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "inlineCode",
              { parentName: "p" },
              "https://unpkg.com/@utrecht/design-tokens/dist/index.css"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Above should become:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "inlineCode",
              { parentName: "p" },
              "https://unpkg.com/@utrecht/design-tokens@1.0.0-alpha.10/dist/index.css"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "For stable versions it would become:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "inlineCode",
              { parentName: "p" },
              "https://unpkg.com/@utrecht/design-tokens@^1.0.0/dist/index.css"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "npm-packages" },
            "npm packages"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "table",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "thead",
              { parentName: "table" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "tr",
                { parentName: "thead" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "th",
                  { parentName: "tr", align: null },
                  "name"
                )
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "tbody",
              { parentName: "table" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "tr",
                { parentName: "tbody" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "td",
                  { parentName: "tr", align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    "a",
                    {
                      parentName: "td",
                      href: "https://www.npmjs.com/package/@conductionnl/nl-design-system",
                      target: "_blank",
                      rel: "nofollow noopener noreferrer",
                    },
                    "@conductionnl/nl-design-system"
                  )
                )
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "contributing" },
            "Contributing"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Install prerequisites\nYou need the following tools installed to run Storybook locally:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "ul",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                "Git"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "a",
                  {
                    parentName: "p",
                    href: "https://nodejs.org/en/",
                    target: "_blank",
                    rel: "nofollow noopener noreferrer",
                  },
                  "Node.js and npm"
                )
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                "Open a terminal and run the following commands to check:"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "inlineCode",
                  { parentName: "p" },
                  "git --version"
                ),
                ": a relatively recent version should be installed (Git 2.28 or later)"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "inlineCode",
                  { parentName: "p" },
                  "node -v"
                ),
                ": should be at least the version defined in the engines section of package.json"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "inlineCode",
                  { parentName: "p" },
                  "npm -v"
                ),
                " : should be at least the version defined in the engines section of package.json"
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Install code editor\nYou can use any editor you'd like, but in case you use ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                parentName: "p",
                href: "https://code.visualstudio.com/",
                target: "_blank",
                rel: "nofollow noopener noreferrer",
              },
              "Visual Studio Code"
            ),
            ", we recommend\nthe following helpful extensions for this project:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "ul",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "a",
                {
                  parentName: "li",
                  href: "https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                },
                "EditorConfig"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "a",
                {
                  parentName: "li",
                  href: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                },
                "ESLint"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "a",
                {
                  parentName: "li",
                  href: "https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint",
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                },
                "markdownlint"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "a",
                {
                  parentName: "li",
                  href: "https://marketplace.visualstudio.com/items?itemName=silvenon.mdx",
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                },
                "MDX"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "a",
                {
                  parentName: "li",
                  href: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                },
                "Prettier - Code formatter"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "a",
                {
                  parentName: "li",
                  href: "https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                },
                "stylelint"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "a",
                {
                  parentName: "li",
                  href: "https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview",
                  target: "_blank",
                  rel: "nofollow noopener noreferrer",
                },
                "Svg Preview"
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "run-storybook-on-your-computer" },
            "Run Storybook on your computer"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "ul",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Open your Terminal."
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Clone this Git repository to ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "inlineCode",
                { parentName: "li" },
                "directory/of/your/choosing"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "inlineCode",
                { parentName: "li" },
                "cd directory/of/your/choosing"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "If you previously worked in this repository, ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "inlineCode",
                { parentName: "li" },
                "git checkout main"
              ),
              " to switch to the main branch."
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "inlineCode",
                { parentName: "li" },
                "git pull"
              ),
              " to get to the latest version of the main branch"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "inlineCode",
                { parentName: "li" },
                "npm install"
              ),
              " to download and install all the dependencies"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "inlineCode",
                { parentName: "li" },
                "npm run storybook"
              ),
              " to start Storybook"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Your main browser opens automatically with your local Storybook.\nPress ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "inlineCode",
              { parentName: "p" },
              "Control + C / Command + C"
            ),
            " in your terminal to stop Storybook."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "code-of-conduct" },
            "Code of Conduct"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read our ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              { parentName: "p", href: "'../CONTRIBUTION.md'" },
              "Code of Conduct"
            ),
            " if you haven't already."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "license" },
            "License"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "This project is free and open-source software licensed under the ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                parentName: "p",
                href: "https://opensource.org/licenses/EUPL-1.2",
                target: "_blank",
                rel: "nofollow noopener noreferrer",
              },
              "European Union Public License (EUPL) v1.2."
            ),
            ". The documentation is licensed as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                parentName: "p",
                href: "https://creativecommons.org/publicdomain/zero/1.0/legalcode",
                target: "_blank",
                rel: "nofollow noopener noreferrer",
              },
              "Creative Commons Zero 1.0 Universal (CC0-1.0)"
            ),
            "."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "div",
            { className: "subheading" },
            "Configure"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "div",
            { className: "link-list" },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs/react/addons/addon-types",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img", {
                src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
                alt: "plugin",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "strong",
                  null,
                  "Presets for popular tools"
                ),
                "Easy setup for TypeScript, SCSS and more."
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs/react/configure/webpack",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img", {
                src: _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
                alt: "Build",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "strong",
                  null,
                  "Build configuration"
                ),
                "How to customize webpack and Babel"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs/react/configure/styling-and-css",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img", {
                src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: "colors",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "strong",
                  null,
                  "Styling"
                ),
                "How to load and configure CSS libraries"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img", {
                src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
                alt: "flow",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "strong",
                  null,
                  "Data"
                ),
                "Providers and mocking for data libraries"
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "div",
            { className: "subheading" },
            "Learn"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "div",
            { className: "link-list" },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img", {
                src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
                alt: "repo",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "strong",
                  null,
                  "Storybook documentation"
                ),
                "Configure, customize, and extend"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/tutorials/",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img", {
                src: _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                alt: "direction",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "strong",
                  null,
                  "In-depth guides"
                ),
                "Best practices from leading teams"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                className: "link-item",
                href: "https://github.com/storybookjs/storybook",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img", {
                src: _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                alt: "code",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "strong",
                  null,
                  "GitHub project"
                ),
                "View the source and add issues"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "a",
              {
                className: "link-item",
                href: "https://discord.gg/storybook",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img", {
                src: _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
                alt: "comments",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "strong",
                  null,
                  "Discord chat"
                ),
                "Chat with maintainers and the community"
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "div",
            { className: "tip-wrapper" },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "span",
              { className: "tip" },
              "Tip"
            ),
            "Edit the Markdown in",
            " ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "code",
              null,
              "src/stories/Introduction.stories.mdx"
            )
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Conduction/Introduction",
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./stories/Switch/Switch.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Component", function () {
          return Component;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        );
      var react = __webpack_require__("./node_modules/react/index.js"),
        jsx_runtime =
          (__webpack_require__(
            "./node_modules/core-js/modules/es.function.name.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.is-array.js"
          ),
          __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
          __webpack_require__(
            "./node_modules/core-js/modules/es.symbol.description.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.object.to-string.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.symbol.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.string.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/web.dom-collections.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.slice.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.from.js"
          ),
          __webpack_require__("./components/style/switch.css"),
          __webpack_require__("./node_modules/react/jsx-runtime.js"));
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function Switch(props) {
        var _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
          isToggled = _useState2[0],
          setIsToggled = _useState2[1];
        return Object(jsx_runtime.jsxs)("div", {
          children: [
            Object(jsx_runtime.jsx)("label", {
              id: props.id,
              children: props.name,
            }),
            Object(jsx_runtime.jsxs)("label", {
              className: "toggle-switch",
              children: [
                Object(jsx_runtime.jsx)("input", {
                  type: "checkbox",
                  checked: isToggled,
                  onChange: function onToggle() {
                    return setIsToggled(!isToggled);
                  },
                }),
                Object(jsx_runtime.jsx)("span", { className: "switch" }),
              ],
            }),
          ],
        });
      }
      Switch.displayName = "Switch";
      try {
        (Switch.displayName = "Switch"),
          (Switch.__docgenInfo = {
            description: "This components renders a switch.",
            displayName: "Switch",
            props: {
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !0,
                type: { name: "string" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/Switch/src/Switch.tsx#Switch"
            ] = {
              docgenInfo: Switch.__docgenInfo,
              name: "Switch",
              path: "components/Switch/src/Switch.tsx#Switch",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: "Components/Switch",
        component: Switch,
        argTypes: { backgroundColor: { control: "color" } },
      };
      var Switch_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(Switch, Object.assign({}, args));
      };
      Switch_stories_Template.displayName = "Template";
      var Component = Switch_stories_Template.bind({});
      Component.parameters = Object.assign(
        { storySource: { source: "(args) => <Switch {...args} />" } },
        Component.parameters
      );
    },
    "./stories/assets/code-brackets.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/code-brackets.2e1112d7.svg";
    },
    "./stories/assets/colors.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/colors.a4bd0486.svg";
    },
    "./stories/assets/comments.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/comments.a3859089.svg";
    },
    "./stories/assets/direction.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/direction.b770f9af.svg";
    },
    "./stories/assets/flow.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports = __webpack_require__.p + "static/media/flow.edad2ac1.svg";
    },
    "./stories/assets/plugin.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/plugin.d494b228.svg";
    },
    "./stories/assets/repo.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports = __webpack_require__.p + "static/media/repo.6d496322.svg";
    },
    "./stories/assets/stackalt.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/stackalt.dba9fbb3.svg";
    },
    "./stories/design.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _excluded =
          (__webpack_require__("./stories/assets/code-brackets.svg"),
          __webpack_require__("./stories/assets/colors.svg"),
          __webpack_require__("./stories/assets/comments.svg"),
          __webpack_require__("./stories/assets/direction.svg"),
          __webpack_require__("./stories/assets/flow.svg"),
          __webpack_require__("./stories/assets/plugin.svg"),
          __webpack_require__("./stories/assets/repo.svg"),
          __webpack_require__("./stories/assets/stackalt.svg"),
          ["components"]);
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,
            { title: "Conduction/Design Choices", mdxType: "Meta" }
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "style",
            null,
            "\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h1",
            { id: "design-choices" },
            "Design Choices"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "The Conduction NL Design System expands the open-source ecosystem as a whole. All our Design Decisions (and history of)\nwill be documented on this page."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "We believe the following bulletpoints are the fastest way to build an independent component library to develop the NL Design System."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "ul",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                "We chose to base our components on the ",
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "a",
                  {
                    parentName: "p",
                    href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-readme--page",
                    target: "_blank",
                    rel: "nofollow noopener noreferrer",
                  },
                  "Utrecht Design System"
                ),
                ".\nWe chose to build further alongside the Municipality of Utrecht, because they are the most developed and agree with many design choices.\nThe components built by Utrecht are also very well documented."
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                "We chose not to include some municipalities' components, because of the dependency of libraries outside of the NL Design ecosystem and believe\nthe ecosystem should develop independently. Relying on external frameworks and libraries are counter-productive."
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "p",
                { parentName: "li" },
                "Any and all required CSS overwrites (rules where no Utrecht- or Conduction- design tokens are available) should be done on implementation level."
              )
            )
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Conduction/Design Choices",
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./storybook-init-framework-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
      ),
        __webpack_require__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_require__("./storybook-init-framework-entry.js"),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.storybook/preview.js-generated-config-entry.js"
        ),
        (module.exports = __webpack_require__("./generated-stories-entry.js"));
    },
    1: function (module, exports) {},
  },
  [[0, 4, 5]],
]);
