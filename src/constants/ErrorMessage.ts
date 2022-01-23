// 使いたいファイルでimport { ErrorMessage } from './constant/ErrorMessage'をして利用
export namespace ErrorMessage {
  export const NO_INPUT = 'が未入力です';
  export const OVER_LENGTH = 'の文字数が超過しています';
  export const OVER_TODO_LENGTH = 'の数が超過しています。削除してから再度追加してください。';
}

/** この方法でも定数管理と呼び出しができる */
// export class Errors {
//   static readonly ERROR = "test";
// }

// メッセージと項目名を連結する ex) state.errorMessages.push(MessageManager(ErrorMessage.NO_INPUT, "Todo"));
export const MessageManager = (message: string, literal: string): string => {
  return literal + message;
}