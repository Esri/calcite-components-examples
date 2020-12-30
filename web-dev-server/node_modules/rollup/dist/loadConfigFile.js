/*
  @license
	Rollup.js v2.35.1
	Mon, 14 Dec 2020 14:00:58 GMT - commit 1378cae13b33838de9c8ba9ef9152354f6eed27b


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

require('./shared/rollup.js');
require('fs');
require('path');
require('./shared/mergeOptions.js');
var loadConfigFile_js = require('./shared/loadConfigFile.js');
require('crypto');
require('events');
require('url');



module.exports = loadConfigFile_js.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
