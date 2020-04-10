export interface Memo {
    id?: number | undefined;
    content: string | undefined;
    createdAt?: number | undefined;
    deleted?: boolean | undefined;
  }

export interface Toast {
  id: number;
  text: string;
}

export interface Dialog {
  type: 'alter' | 'confirm'
  text: string
}