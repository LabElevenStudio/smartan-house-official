


module.exports = function(eleventyConfig){
	eleventyConfig.addPassthroughCopy('./src/assets')
	eleventyConfig.addPassthroughCopy('./src/favicon')
	eleventyConfig.addPassthroughCopy('./src/scripts')
	eleventyConfig.addPassthroughCopy('./src/css/')
	return{
		dir: {
			input: "src",
			output: "dist"
		}
	}
}