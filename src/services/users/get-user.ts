import { ApiContext, User } from '@/types/data';
import { fetcher } from '@/utils';

export type GetUserParams = {
  id: number;
};

/**
 * 사용자 API(사용자 조회)
 * @param context API 컨텍스트
 * @param params 파라미터
 * @returns 사용자
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
   *
   {
    "id": 1,
    "username": "충근",
    "displayName": "조충근",
    "email": "chocg@gmail.com",
    "profileImageUrl": "https://avatars.githubusercontent.com/u/50162076?v=4",
    "description": "안녕하세요. 조충근입니다."
   }
   *
   *
   */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
};

export default getUser;
