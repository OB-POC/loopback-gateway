'use strict';

module.exports = function(Offering) {
  Offering.afterRemote('cardBasedOfferings', (ctx, offer, next) => {
    if (ctx.result) {
      console.info('<< -- Offers from Offering Service Rest Connector -- >>');
      console.log(ctx.result);
      console.info('<-----------------------Offers------------------------>');
    } else {
      console.error('No result from card based offers');
    }
    next();
  });

  Offering.afterRemote('advisory', (ctx, advice, next) => {
    if (ctx.result) {
      console.info('<< -- Advices from Offering Service Rest Connector -- >>');
      console.log(ctx.result);
      console.info('<-----------------------Advices------------------------>');
    } else {
      console.error('No result from advisory');
    }
  });
};
