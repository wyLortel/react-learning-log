type Item = {
  items: string[];
  availableItems:['사과' , "바나나" , "오렌지"]
};

type ReducerAction =
| {type:'ADD_ITEM'}
| {type:'REMOVE_ITEM'; index:number}
