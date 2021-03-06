function (user, context, callback) {
    var whitelist = ['1.2.3.4', '2.3.4.5', '3.4.5.6', '73.254.1.81', '10.0.0.1']; //authorized IPs
    var userHasAccess = whitelist.some(
      function (ip) {
        return context.request.ip === ip;
      });

    if (!userHasAccess) {
      return callback(new UnauthorizedError('Access denied from this IP address.'));
    }

    return callback(null, user, context);
}
