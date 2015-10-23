const vimeo = new (require('vimeo').Vimeo)(
  '7b1f89f3b8da60614a8740db429e723b46271ad9', // process.env.CLIENT_ID,
  'hzyZmVvxO8f4idslthqbd9P9Smbm/1yPKgFOazmfHAxE3eeYNDlw8xAKAGdiQhejYKYy8fT0csamA5H8tLAOYmch9o+zvDJe4bjsXz/oqzgwTB/U37SPDv+EQIURmFMQ', // process.env.CLIENT_SECRET,
  '821790f367a3734d675538f4173f609d' // process.env.ACCESS_TOKEN
);

module.exports = (callback) => {
  vimeo.request({
    path: '/users/ndcconferences/videos',
    query: {
      page: 1,
      per_page: 10
    }
  }, function(error, body) {
    callback(error, body.data);
  });
};
