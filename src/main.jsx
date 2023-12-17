import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
 <div>


<Header/>
<div className='flex justify-evenly'>
<Menu image="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?size=626&ext=jpg&uid=R130577194&ga=GA1.1.1359195911.1683602290&semt=ais" h1="Somalian Food" para="Paid Delivery" button="Order Now" />
<Menu image="https://img.freepik.com/premium-photo/plate-rice-with-duck-leg-greens_141438-2.jpg?size=626&ext=jpg&uid=R130577194&ga=GA1.1.1359195911.1683602290&semt=ais" h1="Somalian Food" para="Paid Delivery" button="Order Now"/>
</div>

<div className='flex justify-evenly mt-6'>
<Menu2 image="https://img.freepik.com/free-photo/high-angle-nigerian-people-with-delicious-food_23-2149603491.jpg?w=360&t=st=1702409267~exp=1702409867~hmac=1b0e9c001996bb87d118ba436961c4b54735fd3334297a6938c99e2f8469c3fa" h1="Keynyan Food" para="Delivery"  button="Order Now" />
<Menu2 image="https://t3.ftcdn.net/jpg/02/23/81/46/240_F_223814606_X69bxu24kNLn8pxlV0NF3tcJ8Y0yrR7F.jpg" h1="Keynyan Food" para="Delivery"  button="Order Now" />
</div>

<div className='flex justify-evenly mt-6'>
<Menu3 image="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&uid=R130577194&ga=GA1.1.1359195911.1683602290&semt=ais" h1="American Pizaa"  button="Order Now" />
<Menu3 image="https://img.freepik.com/free-photo/imeretian-khachapuri-cheese-lemon-side-view_140725-11276.jpg?size=626&ext=jpg&uid=R130577194&ga=GA1.1.1359195911.1683602290&semt=ais" h1="American Pizaa"  button="Order Now" />

</div>

<Footer />
</div>
)

function Header(){
  return <h1 className="bg-teal-500 text-3xl text-white p-6 text-center">Our Menu </h1>
}

function Menu(props){
  return <div className='mt-10 flex gap-6'>
    <img className='w-[300px] h-[150px]' src={props.image} />
    <div>
    <h1 className='font-bold'> {props.h1} </h1>
    <p> {props.para} </p> <br />
    <button className="bg-orange-400 p-2 rounded-xl"> {props.button} </button>
    </div>
  </div>
}

function Menu2(props){
  return <div className="flex gap-6">
      <img className='w-[300px] h-[150px]' src={props.image} />
   <div>
    <h1 className='font-bold'> {props.h1} </h1>
    <p> {props.para} </p> <br />
    <button className="bg-orange-400 p-2 rounded-xl"> {props.button} </button>
    </div>


  </div>
}

function Menu3(props){
  return <div className='flex gap-6'>
    <img className='w-[300px] h-[150px]' src={props.image} />
   <div>
    <h1 className='font-bold'> {props.h1} </h1>
    <p> {props.para} </p> <br />
    <button className="bg-orange-400 p-2 rounded-xl"> {props.button} </button>
    </div>

    </div>
}

function Footer (){
  return <h1 className="text-center bg-teal-500 text-white p-6 mt-20 text-3xl">All Right Reserved </h1>
}