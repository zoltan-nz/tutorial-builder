# Tutorial Builder

Live Demo: http://tutorial-builder.surge.sh/sandbox

## Implementation log

Add Sass

Add Bootstrap

Add CodeMirror

    ember install ivy-codemirror
    
CodeMirror configuration challenge
* For `htmlmixed` need `xml`, `javascript`, `css`
* For Solarized theme should use `solarized dark` or `solarized light` in the code. 

    
    //ember-cli-build.js
    codemirror: {
      modes: ['xml', 'javascript', 'css', 'handlebars', 'markdown', 'htmlmixed'],
      keyMaps: ['vim', 'emacs', 'sublime'],
      themes: ['solarized']
    }
    
Using CodeMirror component, the documentation is missleading.

This is working:

        {{ivy-codemirror
              value       = myCode
              lineNumbers = true
              mode        = 'htmlmixed'
              addModeClass= true
              theme       = 'solarized light'}}

Add extra style rules.

Iframe settings.

Sources: 
* [CodeMirror](https://codemirror.net/index.html)

Deployment on surge.sh

    ember build --prod && mv ./dist/index.html ./dist/200.html && surge -p ./dist -d http://tutorial-builder.surge.sh/

Add Firebase adapter

Creating Firebase backend

## Creating a sandbox page

Creating `sandbox` model. Model structure: name:string, source:string

Add create  new sandbox

Save changes to database:

* when rewrite the name of the sandbox
* when update the code

Add delete file option.

## Setting up the database structure

Generating Tutorial model.

Generating Lesson model.

    ember g model lesson name sort:number visited:boolean steps:hasMany tutorial:belongsTo

Generating Step model.

## Creating the Admin Section

* Tutorial CRUD interface
* Lesson CRUD interface
* Building Steps

Route structure:


    /admin (Tutorial index, add tutorial, delete tutorial)
      /tutorial/:id (Lesson index, add lesson, delete lesson)
        /lesson/:id (The tutorial builder screen)



## Tutorial play-back 

# Other challenges

## Adding breadcrumb component

Installing the component:

    ember install ember-crumbly
    
Add this line to the application template:

    {{bread-crumbs tagName="ol" outputStyle="bootstrap" linkable=true}}

Changing separator in bootstrap variables: `>`

Override the teamplate with default `Home` prefix.



# Research topics

* Code editors, comparision

- CodeMirror
- Ace
[Comparison of JavaScript-based source code editors](https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_source_code_editors)

* Sandbox, playground sites (codepen, jsbin, etc.)

CodePen merges html, css and js into one html file.

Babel REPL: https://github.com/babel/babel.github.io/blob/master/scripts/repl.js
