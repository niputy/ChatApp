import PocketBase from 'pocketbase';
import { dbUrl } from '../config/config';

export const pb = new PocketBase(dbUrl);

export const API = {
  getChats: async (): Promise<Chat[]> => {
    const records = await pb.collection('chats').getFullList(200, {
      sort: '-created',
    });
    return records as unknown as Chat[];
  },
  getMessages: async (chatId: string): Promise<any[]> => {
    const records = await pb.collection('messages').getFullList(200 /* batch size */, {
      sort: '-created',
      filter: `chat_id = '${chatId}'`,
      expand: 'send_by',
    });
    const messages = records.map((message) => ({
      _id: message.id,
      text: message.text,
      createdAt: message.created,
      user: {
        _id: message.send_by,
        name: message.send_by,
      },
    }));
    return messages;
  },
};
