export interface GetHistoryChatMshParams {
  chatRoomId: string;
  day: string;
  name: string;
  isManager?: string;
  memberId?: string;
  orderby?: string;
  pageNum?: number;
  pageSize?: number;
}

export interface GetChatMshParams {
  chatRoomId: string;
  pageNum: number;
  name: string;
  pageSize?: number;
  orderby?: string;
  isManager?: string;
  fromMemberId?: string;
  riskChat?: string;
}
