interface Items{
    availabeFruites :string[]
}

type Itemaction =
| {type:'addItem'}
|{type:'removeItem', index:number}