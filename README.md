# Pure Render Function

A tiny module for putting your render function inside a PureRenderComponent.

## Usage

```js
var MyNowPureComponent = PureRenderFunction(function () {
  return <div/>;
});
```

## Why

Less boilerplate in my actual project, the nicer. Also because these functions will just get called over and over otherwise.

## License
MIT
