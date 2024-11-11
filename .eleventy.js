// .eleventy.js
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("dist/styles");
    eleventyConfig.addPassthroughCopy({
        "src/assets/img": "/dist/assets/img/",
    });

    eleventyConfig.addPassthroughCopy({
        "src/assets/files": "/dist/assets/files/",
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};