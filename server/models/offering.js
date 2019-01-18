'use strict';

module.exports = function(Offering) {
  Offering.afterRemote('cardBasedOfferings', (ctx, offer, next) => {
    if (ctx.result) {
      console.info('<< -- Offers from Offering Service Rest Connector -- >>');
      console.log(ctx.result);
      console.info('<-----------------------Offers------------------------>');
    }
  });
};
