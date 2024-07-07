import React from 'react'
import Title from '../../common/Title'
import { useForm } from "react-hook-form";
const Booking = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className=' w-1/2 m-auto space-y-10'>
        <Title head='book your table'></Title>
        <form action="" onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-2 gap-10'>
           <input className=' border-b-[1px] outline-none ps-4 capitalize' type="text" {...register('fastname')} placeholder='fast name' />
           <input className=' border-b-[1px] outline-none ps-4 capitalize' type="text" {...register('lastname')} placeholder='last name' />
           <input className=' border-b-[1px] outline-none ps-4 capitalize' type="email" {...register('email')} placeholder='email' />
           <input className=' border-b-[1px] outline-none ps-4 capitalize' type="time" {...register('time')}  placeholder='time'/>
           <input className=' border-b-[1px] outline-none ps-4 capitalize' type="date" {...register('date')} placeholder='date' />
           <input className=' border-b-[1px] outline-none ps-4 capitalize' type="number" {...register('number')} placeholder=' members'/>
           <input className=' border-b-[1px] outline-none ps-4 capitalize col-span-2 w-full' type=" textarea" {...register('textarea')} placeholder='your comment' />
           <input className=' bg-red-400 rounded-full p-3' type="submit" value='submit' />
        </form>
    </div>
  )
}

export default Booking