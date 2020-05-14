import axios from "axios";

// 비동기 함수 선언
export const getData = async () => {
  const response = await axios.get("http://api.newzensolution.co.kr/gridtest");
  return JSON.stringify(response.data); // string형으로 반환처리 위함
};