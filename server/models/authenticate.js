'use strict';

module.exports = function(Authenticate) {
  Authenticate.afterRemote('login', (ctx, auth, next) => {
    if (ctx.result) {
      console.info('<< -- Offers from Authenticate Service Rest Connector -- >>');
      console.log(ctx.result);
      console.info('<---------------------Authenticated----------------------->');
    } else {
      console.error('No result from Authenticate Service');
    }
    next();
  });
};
