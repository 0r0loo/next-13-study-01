import { ApiContext, User } from '@/types/data';
import { fetcher } from '@/utils';

export type SigninParams = {
  username: string;
  password: string;
};

/**
 * 인증 API(로그인)
 * @param context API 컨텍스트
 * @param params 파라미터
 * @returns 로그인 사용자
 */
const siginin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(params),
    },
  );
};

export default siginin;
