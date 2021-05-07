import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://my-test-reposit.cdn.prismic.io/api/v2';
export const accessToken = '';

export const Client = (req = null) => {


  const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {};
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};

    return {
      ...reqOption,
      ...accessTokenOption,

    }
  }
  return Prismic.client(apiEndpoint, createClientOptions(req, accessToken));
}