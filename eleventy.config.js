"use strict";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "blog-src/assets": "assets" });

  eleventyConfig.addFilter("readableDate", (date) => {
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  });

  eleventyConfig.addFilter("isoDate", (date) => {
    return date.toISOString().slice(0, 10);
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "blog-src",
      output: "blog",
      includes: "_includes",
      data: "_data"
    },
    pathPrefix: "/blog/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
