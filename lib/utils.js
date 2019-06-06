'use strict';

const parse = require('url-parse');

module.exports = function extractAuthFromUrl(url) {
  const parsed = parse(url, true);
  const options = {};

  if (parsed.auth) {
    options.auth = parsed.auth;
  }

  return {
    url: url.replace(`${parsed.auth}@`, ''),
    options,
  };
};
