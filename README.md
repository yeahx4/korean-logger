# korean-logger
> Korean Logger Modules

### Author
- khjkr <khj@kkutu.co> (KHJKR#9298)

### License
- MIT

#### Special Thanks
- ZEONPLEX

### Installation
```
npm install korean-logger
```

## Examples
```js
const klog = require('korean-logger')

klog.log('text') // Result: [로그] text
klog.info('text') // Result: [정보] text
klog.success('text') // Result: [성공] text
klog.alert('text') // Result: [알림] text
klog.warn('text') // Result: [경고] text
klog.error('text') // Result: [에러] text
```
