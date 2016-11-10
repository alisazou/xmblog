var config = require('config-lite');
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);
var moment = require('moment');
var objectIdToTimestamp = require('objectid-to-timestamp');

//我们只存储用户的名称、密码（加密后的）、头像、性别和个人简介这几个字段

exports.User = mongolass.model('User', {
  name: { type: 'string' },
  password: { type: 'string' }
  // avatar: { type: 'string' }

});
exports.User.index({ name: 1 }, { unique: true }).exec();// 根据用户名找到用户，用户名全局唯一




// 根据 id 生成创建时间 created_at
mongolass.plugin('addCreatedAt', {
  afterFind: function (results) {
    results.forEach(function (item) {
      item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
    });
    return results;
  },
  afterFindOne: function (result) {
    if (result) {
      result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
    }
    return result;
  }
});