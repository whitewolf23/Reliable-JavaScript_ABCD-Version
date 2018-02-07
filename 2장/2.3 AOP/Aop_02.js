﻿Aop = {
  around: function(fnName, advice, fnObj) {
    var originalFn = fnObj[fnName];
    fnObj[fnName] = function () {   // targetObj.targetFn()
      var targetContext = {}; // 잘못된 코드라는 건 알고 있다, 나중에 다시 설명한다.
      advice.call(targetContext, {fn: originalFn});
    };
  }
};