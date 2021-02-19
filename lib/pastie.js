const qs = require('qs');
const axios = require('axios');

const PASTIE_BASE_URL = 'http://pastie.org';
const PASTIE_CREATE_URL = `${PASTIE_BASE_URL}/pastes/create`;

exports.createPaste = async (language, content) => {
  const response = await axios({
    url: PASTIE_CREATE_URL,
    method: 'post',
    data: qs.stringify({ language, content }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    maxRedirects: 0,
    validateStatus: status => status === 302,
  });

  return PASTIE_BASE_URL + response.headers.location;
};
