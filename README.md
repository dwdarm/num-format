[![Build Status](https://app.travis-ci.com/dwdarm/num-format.svg?branch=master)](https://app.travis-ci.com/dwdarm/num-format)
<br />
# num-format
Convert numbers like 1,000, 1,000,000, and 1,000,000,000 into the form of "1k", "1m", and "1b".

## installation
```
npm install @dwdarm/num-format
```

## usage
```javascript
const numFormat = require('@dwdarm/num-format') 

// BASIC USAGE

// covert number 1000 to '1k'
numFormat(1000)
// '1k'

// covert number 1535 to '1.5k'
numFormat(1535)
// '1.5k'

// covert number 18000 to '18k'
numFormat(18000)
// '18k'

// covert number 180000 to '180k'
numFormat(180000)
// '180k'

// covert number 2000000 to '2m'
numFormat(2000000)
// '2m'

// covert number 5000000000 to '2b'
numFormat(2000000000)
// '2b'

// WITH OPTION

const option = {
  format: {
    k: ' thousand',
    m: ' million'
    b: ' billion'
  }
}

numFormat(1000, option) // '1 thousand'

numFormat(1000000, option) // '1 million'

numFormat(1000000000, option) // '1 billion'

```
