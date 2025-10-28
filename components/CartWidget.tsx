
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCart } from '@/lib/shop';

export default function CartWidget(){
  const [n, setN] = useState(0);
  useEffect(()=>{
    const update = ()=> setN(getCart().reduce((a, b)=>a+b.qty,0));
    update();
    const id = setInterval(update, 800);
    return ()=> clearInterval(id);
  },[]);
  return (
    <Link href="/carrito" className="relative">
      <span className="material-symbols-outlined align-middle">shopping_cart</span>
      <span className="absolute -top-2 -right-2 text-xs bg-blue-600 text-white rounded-full w-5 h-5 grid place-items-center">{n}</span>
    </Link>
  )
}
