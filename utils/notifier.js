const path = require('path');
const notifier = require('node-notifier');
// package.json配置
const packageConfig = require('../package.json');

exports.createNotifierCallback = () => {
  // 'node-notifier'是一个跨平台系统通知的页面，当遇到错误时，它能用系统原生的推送方式给你推送信息

  return (severity, errors) => {
    if (severity !== 'error') return;

    const error = errors[0];
    const filename = error.file && error.file.split('!').pop();

    notifier.notify({
      title: packageConfig.name,
      message: `${severity}: ${error.name}`,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png'),
    });
  };
};
