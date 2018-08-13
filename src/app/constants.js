const Constants = {
  SocketEvents: {
    Hello: 'hello',
    Message: 'message',
    OnlineStatus: 'onlineStatus',
    TypingStatus: 'typingStatus',
    Disconnect: 'disconnect',
    Users: 'users',
    Connected: 'connected',
  },
  ServerUrl: process.env.ENVIRONMENT_LEVEL === 1 ? 'http://localhost:5000' : 'https://chat-project-be.herokuapp.com',
};

module.exports = Constants;
