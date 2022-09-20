import React from "react";
import flatten from "lodash/flatten";
import find from "lodash/find";

export const categorizedRoutes = [
  {
    category: "HTML",
    content: [
      {
        label: "to JSX",
        path: "/"
      }
    ]
  },
  {
    category: "JSON",
    content: [
      {
        label: "to React PropTypes",
        path: "/json-to-proptypes",
        title: "Transform | All important transforms at one place."
      },
      {
        label: "to GraphQL",
        path: "/json-to-graphql",
      },
      {
        label: "to TypeScript",
        path: "/json-to-typescript",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm"
      },
      {
        label: "to MobX-State-Tree Model",
        path: "/json-to-mobx-state-tree"
      },
      {
        label: "to io-ts",
        path: "/json-to-io-ts",
        packageName: "transform-json-types",
        packageUrl: "https://github.com/transform-it/transform-json-types"
      },
      {
        label: "to Rust Serde",
        path: "/json-to-rust-serde",
        desc: "An online REPL for converting JSON to Rust Serde Structs."
      },
      {
        label: "to Mongoose Schema",
        path: "/json-to-mongoose",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "to MySQL",
        path: "/json-to-mysql",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "to Scala Case Class",
        path: "/json-to-scala-case-class"
      },
      {
        label: "to Go Struct",
        path: "/json-to-go",
      },
      {
        label: "to YAML",
        path: "/json-to-yaml",
      },
      {
        label: "to JSDoc",
        path: "/json-to-jsdoc"
      },
      {
        label: "to JSON Schema",
        path: "/json-to-json-schema",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm"
      },
      {
        label: "to TOML",
        path: "/json-to-toml",
        packageUrl: "https://www.npmjs.com/package/@iarna/toml",
        packageName: "@iarna/toml"
      }
    ]
  },
  {
    category: "JavaScript",
    content: [
      {
        label: "to JSON",
        path: "/js-object-to-json",
        desc: "An online REPL for converting JS Object to JSON."
      }
    ]
  },
  {
    category: "Others",
    iconName: "",
    content: [
      {
        label: "XML to JSON",
        path: "/xml-to-json",
        packageName: "xml-js",
        packageUrl: "https://github.com/nashwaan/xml-js"
      },
      {
        label: "YAML to JSON",
        path: "/yaml-to-json",
        packageName: "yaml",
        packageUrl: "https://github.com/tj/js-yaml"
      },
      {
        label: "YAML to TOML",
        path: "/yaml-to-toml"
      },
      {
        label: "Markdown to HTML",
        path: "/markdown-to-html",
        packageName: "markdown",
        packageUrl: "https://github.com/evilstreak/markdown-js"
      },
      {
        label: "TOML to JSON",
        path: "/toml-to-json",
        packageUrl: "https://www.npmjs.com/package/@iarna/toml",
        packageName: "@iarna/toml"
      },
      {
        label: "TOML to YAML",
        path: "/toml-to-yaml"
      }
    ]
  }
];

export interface Route {
  path: string;
  label: string;
  desc: string;
}

export const routes = flatten(
  categorizedRoutes.map(a =>
    // @ts-ignore
    a.content.map(x => {
      const _label =
        a.category.toLowerCase() !== "others"
          ? `${a.category} ${x.label}`
          : x.label;
      return {
        ...x,
        category: a.category,
        searchTerm: _label,
        desc: x.desc || `An online playground to convert ${_label}`
      };
    })
  )
);

export function activeRouteData(
  pathname
): {
  label: string;
  path: string;
  searchTerm: string;
  desc: string;
  packageUrl?: string;
  packageName?: string;
} {
  return find(routes, o => o.path === pathname);
}
