<a><img src="https://travis-ci.org/Attrash-Islam/react-infinite-autocomplete.svg?branch=master"/></a>     <a href='https://coveralls.io/github/Attrash-Islam/react-infinite-autocomplete?branch=master'><img src='https://coveralls.io/repos/github/Attrash-Islam/react-infinite-autocomplete/badge.svg?branch=master' alt='Coverage Status' /></a>

# react-infinite-autocomplete

React.js Wrapper for <a href="https://github.com/Attrash-Islam/infinite-autocomplete">infinite-autocomplete</a> library

<b>Note:</b> Whenever I mention the CORE, then I'm targeting the <a href="https://github.com/Attrash-Islam/infinite-autocomplete">infinite-autocomplete</a> library

# Install

via npm:
```
$ npm i --save react-infinite-autocomplete
```

via bower:
```
$ bower i -S react-infinite-autocomplete
```


# Developer section

In the package.json scripts we've 4 basic tasks:

`build` - Build the code once

`build:watch` - Build the code and watch changes

`test` - Run tests once

`test:watch` - Run tests and watch changes

# Usage Example

```js
import * as React from 'react';
import { InfinityAutoComplete } from 'react-infinite-autocomplete';
//or <script src="bower_components/react-infinite-autocomplete/dist/index.js"></script>

<InfinityAutoComplete {...someProps} />
```

# Live Demo (Default Style)

<img src="https://cdn.rawgit.com/Attrash-Islam/assets/749035d3/infi-basic.gif" />

# Override Implementations

See this section on <a href="https://github.com/Attrash-Islam/infinite-autocomplete">CORE</a>, you pass a class via customizedInput, customizedOptions attributes

# Component Inputs/Outputs

```
  /**
   * data static source
   */
  data?:Array<{text:string, value:any}>;
  /**
   * on-select event output handler when choosing an option
   */
  onSelect?:Function($element, $data);
  /**
   * max height for the options
   */
  maxHeight?:string;
  /**
   * data dynamic api source
   */
  getDataFromApi?($text:string, $page:number, $fetchSize:number):es6Promise<Array<any>>;
  /**
   * Chunk fetch size
   */
  fetchSize?:number,
  /**
   * Customized input class to override the default input
   */
  customizedInput?:IInputCompoenentConstructor;
  /**
   * Customized options class to override the default input
   */
  customizedOptions?:IOptionsComponentConstructor;
```

# Restrictions regards Attributes
- You must choose to pass data or getDataFromApi depends on whether the data is static or dynamic
- data attribute must be an array of { text: 'some text', value: 1}, and value can be any type (number, string, object..)
- max-height should be a string
- fetch-size should be a number
- customizedInput should extend InputComponent [For more See <a href="https://github.com/Attrash-Islam/infinite-autocomplete">CORE</a>] (Exposed in import { InputComponent } from 'inifinte-autocomplete')
- customizedOptions should extend OptionsComponent [For more See <a href="https://github.com/Attrash-Islam/infinite-autocomplete">CORE</a>] (Exposed in import { OptionsComponent } from 'inifinte-autocomplete')


# Component Example

```js

  import { InputComponent } from 'infinite-autocomplete';
  
  class CustomInput extends InputComponent {
    render() {
      return <input style="background: red;" />;
    }
  }
  
  class App extends React.Component {
    render(){
      return <div>
                <h1>It's working</h1>
                <InfinityAutoComplete 
                    data={[
                      { text: 'hi', value: 'my buddy' },
                      { text: 'hi2', value: 'my buddy2' }
                    ]}
                    customizedInput={CustomInput}/>
              </div>
    }
  }
```
