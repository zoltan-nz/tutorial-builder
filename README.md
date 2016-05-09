# Tutorial Builder

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
