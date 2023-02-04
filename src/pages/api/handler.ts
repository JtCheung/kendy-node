import { getHeaders } from '@/utils';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { name, ...params } = request.body;

  if (name === 'getChatMsg') {
    const res = await axios.post(
      'https://live.azavt.com/chatroom/v2/msgPage',
      {
        pageSize: 20,
        orderby: 'SEND_TIMESTAMP~DESC',
        isManager: '',
        fromMemberId: '',
        riskChat: '',
        ...params,
      },
      {
        headers: getHeaders(),
      },
    );

    return response.status(200).json(res.data);
  }

  if (name === 'getHistoryChatMsg') {
    const res = await axios.post(
      'https://live.azavt.com/chatroom/v2/historyMsgPage',
      {
        pageSize: 20,
        orderby: 'SEND_TIMESTAMP~ASC',
        isManager: '',
        fromMemberId: '',
        riskChat: '',
        ...params,
      },
      {
        headers: getHeaders(),
      },
    );
    return response.status(200).json(res.data);
  }

  return response.status(200).send('hi!');
}
