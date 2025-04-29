import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold text-[#89b3e0]'> 𝐑乇𝓈υм𝑒Μ卂Ťc𝐇   🅰🅸</h1>
        <div>
          <ul className='flex gap-4 text-[#89b3e0] font-bold' >
            <li><a href='#' className='text-xl'>нσмє </a></li>
            <li><a href='#' className='text-xl'>αвσυт</a></li>
            <li><a href='#' className='text-xl'>¢σηтα¢т</a></li>
            <li><a href='#' className='text-xl'>ℓσgιη</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar
