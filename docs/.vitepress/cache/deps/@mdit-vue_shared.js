// node_modules/.pnpm/registry.npmmirror.com+@mdit-vue+shared@0.12.0/node_modules/@mdit-vue/shared/dist/index.mjs
var htmlEscapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var htmlEscapeRegexp = /[&<>'"]/g;
var htmlEscape = (str) => str.replace(
  htmlEscapeRegexp,
  (char) => htmlEscapeMap[char]
);
var htmlUnescapeMap = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"'
};
var htmlUnescapeRegexp = /&(amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
var htmlUnescape = (str) => str.replace(
  htmlUnescapeRegexp,
  (char) => htmlUnescapeMap[char]
);
var resolveTitleFromToken = (token, { shouldAllowHtml, shouldEscapeText }) => {
  const children = token.children ?? [];
  const titleTokenTypes = ["text", "emoji", "code_inline"];
  if (shouldAllowHtml) {
    titleTokenTypes.push("html_inline");
  }
  const titleTokens = children.filter(
    (item) => {
      var _a;
      return titleTokenTypes.includes(item.type) && // filter permalink symbol that generated by markdown-it-anchor
      !((_a = item.meta) == null ? void 0 : _a.isPermalinkSymbol);
    }
  );
  return titleTokens.reduce((result, item) => {
    if (shouldEscapeText) {
      if (item.type === "code_inline" || item.type === "text") {
        return `${result}${htmlEscape(item.content)}`;
      }
    }
    return `${result}${item.content}`;
  }, "").trim();
};
var resolveHeadersFromTokens = (tokens, {
  level,
  shouldAllowHtml,
  shouldAllowNested,
  shouldEscapeText,
  slugify: slugify2,
  format
}) => {
  const headers = [];
  const stack = [];
  const push = (header) => {
    while (stack.length !== 0 && header.level <= stack[0].level) {
      stack.shift();
    }
    if (stack.length === 0) {
      headers.push(header);
      stack.push(header);
    } else {
      stack[0].children.push(header);
      stack.unshift(header);
    }
  };
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if ((token == null ? void 0 : token.type) !== "heading_open") {
      continue;
    }
    if ((token == null ? void 0 : token.level) !== 0 && !shouldAllowNested) {
      continue;
    }
    const headerLevel = Number.parseInt(token.tag.slice(1), 10);
    if (!level.includes(headerLevel)) {
      continue;
    }
    const nextToken = tokens[i + 1];
    if (!nextToken) {
      continue;
    }
    const title = resolveTitleFromToken(nextToken, {
      shouldAllowHtml,
      shouldEscapeText
    });
    const slug = token.attrGet("id") ?? slugify2(title);
    push({
      level: headerLevel,
      title: (format == null ? void 0 : format(title)) ?? title,
      slug,
      link: `#${slug}`,
      children: []
    });
  }
  return headers;
};
var rControl = /[\u0000-\u001f]/g;
var rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
var rCombining = /[\u0300-\u036F]/g;
var slugify = (str) => str.normalize("NFKD").replace(rCombining, "").replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
export {
  htmlEscape,
  htmlUnescape,
  resolveHeadersFromTokens,
  resolveTitleFromToken,
  slugify
};
//# sourceMappingURL=@mdit-vue_shared.js.map
