# grunt-i18next-conv

> Use i18next-conv to convert translation files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-i18next-conv --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-i18next-conv');
```

## The "i18next_conv" task

### Overview
In your project's Gruntfile, add a section named `i18next_conv` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  i18next_conv: {
    your_target: {
    	files: [
    		//Array of file and option objects go here. See below for examples.
    	]
    },
  },
})
```

### Usage Examples


```js
grunt.initConfig({
  i18next_conv: {
    files: [
      {dest: 'folder/en_GB.json',
	   src: 'folder/en_GB.po',
	   domain: 'en',
	  },
	  { dest: 'folder/fr_FR.json',
		src: 'folder/fr_FR.po',
		domain: 'fr'
	  }	
    ],
  },
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 - 0.1.5: Initial realse
