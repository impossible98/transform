import React from "react";
import flatten from "lodash/flatten";
import find from "lodash/find";

export const categorizedRoutes = [
  {
    category: "JSON",
    content: [
      {
        label: "to Go Struct",
        path: "/",
      },
      {
        label: "to GraphQL",
        path: "/json-to-graphql",
      },
      {
        label: "to TypeScript",
        path: "/json-to-typescript",
      },
      {
        label: "to Rust Serde",
        path: "/json-to-rust-serde",
      },
      {
        label: "to MySQL",
        path: "/json-to-mysql",
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
      },
      {
        label: "to TOML",
        path: "/json-to-toml",
      }
    ]
  },
  {
    category: "JavaScript",
    content: [
      {
        label: "to JSON",
        path: "/js-object-to-json",
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
      },
      {
        label: "YAML to JSON",
        path: "/yaml-to-json",
      },
      {
        label: "YAML to TOML",
        path: "/yaml-to-toml"
      },
      {
        label: "Markdown to HTML",
        path: "/markdown-to-html",
      },
      {
        label: "TOML to JSON",
        path: "/toml-to-json",
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
