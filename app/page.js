import { BsShopWindow } from 'react-icons/bs';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col p-2 bg-black gap-2'>
      <nav className='flex rounded-md h-10 bg-white items-center p-8'>
        <div className='flex items-center gap-2'>
          <BsShopWindow size={32} />
          <h1>Compare Shopping</h1>
        </div>
      </nav>
      <main className='flex gap-2 justify-between w-full text-white'>
        {/* sidebar */}
        <nav className='border border-purple-500 rounded-md p-2 w-1/6 min-h-full'>
          <ul>
            <li>tienda 1</li>
            <li>tienda 2</li>
            <li>tienda 3</li>
          </ul>
        </nav>
        {/* sidebar */}
        <section>section</section>
        <section>extra</section>
      </main>
    </div>
  );
}
