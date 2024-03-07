import md5 from "md5";

const generateCredentials = () => {
  const timestamp = new Date().getTime();
  const hash = md5(
    timestamp + process.env.NEXT_PUBLIC_API_PRIVATE_KEY + process.env.NEXT_PUBLIC_API_KEY
  );

  return `ts=${timestamp}&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${hash}`;
}

export default generateCredentials;