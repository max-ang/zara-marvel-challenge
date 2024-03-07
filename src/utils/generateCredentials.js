import md5 from "md5";

const generateCredentials = () => {
  const timestamp = new Date().getTime();
  const hash = md5(
    timestamp + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY
  );

  return `ts=${timestamp}&apikey=${process.env.API_PUBLIC_KEY}&hash=${hash}`;
}

export default generateCredentials;