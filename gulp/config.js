'use strict'

var bower_config = require('./bower_config')

module.exports = {
  serverport: 6008,

  styles: {
    src: 'app/sass/**/*.scss',
    minifysrc:'app/sass/**/*.scss',
    dest: 'dist/css',
    dest_theme: 'dist/css/themes',
    src_extra: 'css/**/*.scss',
    themes_combiner: 'app/sass/themes/_*.scss'
  },
  css: {
    src: 'app/css/**/*.css',
    dest: 'dist/css',
    watch: 'app/css/**/*.css'
  },

  scripts: {
    src: 'app/scripts/**/**/*.js',
    dest: 'dist/js'
  },

  images: {
    src: 'app/img/**/*',
    dest: 'public/images'
  },

  assets: {
    src: 'app/assets/**/**',
    dest: 'dist/assets'
  },
  docs: {
    src: 'docs/**/**/*',
    dest: 'dist/docs'
  },
  views: {
    watch: 'app/pug/*.pug',
    src: 'app/pug/**/*.pug',
    watch_base:['app/pug/{mixin,parts,ui-kits,menu,config,components,data,layouts}/*.pug'],
  },

  copy: {
    overrides: bower_config.bower_conf
  },

  dist: {
    root: 'dist',
    img:"dist/img"
  }
}
