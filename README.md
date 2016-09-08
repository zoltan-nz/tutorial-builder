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

Override the template with default `Home` prefix.

Add dynamic breadcrumbs to subroutes.

## Setup development database with ember-mirage

* Install mirage

    ember install ember-cli-mirage

* Splitting adapter based on the environment (development, production)

* Trying out ember mock server, which is a node.js server.

    ember g http-mock tutorials

These two options mainly for testing purposes and cannot store data.
Finally, I created a rails api server. Repo: https://github.com/zoltan-nz/tutorial-builder-backend

* Removing mirage and mock server from the repo.

* Updating packages: Ember 2.6, EmberFire 2.0, Firebase 3.0

* Updating Firebase configuration in configuration file.

### Database update is too fast and high frequency

Updating the database after each keystroke is overkill and not efficient. Database is still in lock phase, so have to setup a latency updating mechanism.
I did it with using Ember run debounce method.

* I tried to create an addon for adding Emmet support for CodeMirror, I realized, that CodeMirror package updated and changed significantly.
The addon still not working properly.
And meanwhile I had other challenge, the update action isn't fired any more, so I cannot save changes in sandbox.

This changes nicely explained in the addon documentation and basically follows the new frontend pattern: data down, actions up. Instead of the value change automatically, with "two-way" bindings, any change will fire an action which can manage this new changes. So I had to update the `updateSandboxSource` method in the controller.

### Research topics

* Code editors, comparision

- CodeMirror
- Ace
[Comparison of JavaScript-based source code editors](https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_source_code_editors)

* Sandbox, playground sites (codepen, jsbin, etc.)

CodePen merges html, css and js into one html file.

Babel REPL: https://github.com/babel/babel.github.io/blob/master/scripts/repl.js

Codecademy and React: https://www.infoq.com/articles/reactjs-codecademy?utm_source=hacker%2520news&utm_medium=link&utm_campaign=react_js_article

### Step builder

- User creator selects a tutorial, a lesson.
- On the lesson page, the user can add steps.
- The list of the steps on the left side panel.
- A step has to have a name. Default name is the index number and the type.
- On the other part of the screen are: step type selector, content editor text box (code editor), the preview code editor with the content of previous steps and the html page preview page 

### Improvements

- Add eslint code linter, instead of the default jshint.
Instructions: https://github.com/ember-cli/ember-cli-eslint

- Renaming Admin to Dashboard

- Experimenting with defaultValue, user can create new records without adding name to a tutorial or a lesson, it generates a simple name or title based on how many records are there already.

- Content Type?

### UX Concerns:

- Need some default value when user create a new item, record?
- Prepopulate the name field?
- When new record created should redirect to the created page to drive the workflow.

### Challenges during implementation of Step Builder

- CodeMirror instance. The addon doesn't expose the CodeMirror API. Using the service, we can access to the instance of the CodeMirror and directly to the editor.
- Reading the cursor position: watching the event `cursorActivity`, which can invoke a callback. In this case, using `bind` was an important, because we wanted to keep the context of the Ember project. (I should use an illustration for explaining this.)
