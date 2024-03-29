module.exports = {
    apps: [{
      name: 'review',
      script: 'server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: "ec2-52-15-94-164.us-east-2.compute.amazonaws.com",
        key: '~/.ssh/review.pem',
        ref: 'origin/master',
        repo: 'https://github.com/seabay-hratx42-fec/reviews.git',
        path: '/home/ubuntu/server/review',
        'post-deploy': 'npm install && npx webpack --config webpack.config.js && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }