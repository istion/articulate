"use strict";

var _constants = require("../../../util/constants");

var _redis = _interopRequireDefault(require("../../errors/redis.error-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = async function ({
  data,
  parent = null,
  returnModel = false
}) {
  const redis = this.server.app.redis;
  const PostFormatModel = await redis.factory(_constants.MODEL_POST_FORMAT);

  try {
    await PostFormatModel.createInstance({
      data
    });
    await parent.link(PostFormatModel, _constants.MODEL_POST_FORMAT);
    await parent.save();
    return returnModel ? PostFormatModel : PostFormatModel.allProperties();
  } catch (error) {
    throw (0, _redis.default)({
      error
    });
  }
};
//# sourceMappingURL=post-format.create.service.js.map