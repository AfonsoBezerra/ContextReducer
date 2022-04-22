import { ObjProduct } from '../interfaces/iProducts';

const Action = (type: string) => {
  function Payload(payload: ObjProduct[]) {
    return {
      type,
      payload
    };
  }
  Payload.type = type;
  return Payload;
};
export default Action;
