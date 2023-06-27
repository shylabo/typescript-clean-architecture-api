db = db.getSiblingDB('nosqldb');

db.createCollection('messages');

db.messages.insertMany([
  {
    conversationId: ObjectId(),
    senderId: 1,
    recipientId: 2,
    content: 'Hi, Leonard.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    conversationId: ObjectId(),
    senderId: 2,
    recipientId: 1,
    content: 'Hi, Sheldon.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    conversationId: ObjectId(),
    senderId: 1,
    recipientId: 2,
    content: 'Baziga!',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);
