export interface Memo {
    id?: number ;
    content: string ;
    createdAt?: number | undefined;
    lastEditAt? : number      //최종수정일
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