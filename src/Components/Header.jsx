import React from 'react'
const users = [
  {
    name: "Farrux Mengboyev",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Nizommiddin Rahimberdiyev",
    role: "Web Design",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Ilyosbek",
    role: "Web Developer",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Murodbek Fayzikhanov",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    name: "Mirfazil Mirsharipov",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Temur Alixanov",
    role: "Bloger",
    image: "https://i.pravatar.cc/150?img=6"
  },
  {
    name: "dili.me",
    role: "Bloger",
    image: "https://i.pravatar.cc/150?img=7"
  },
  {
    name: "Aslamboy",
    role: "PUBG",
    image: "https://i.pravatar.cc/150?img=8"
  },
  {
    name: "Omonxon",
    role: "Bloger",
    image: "https://i.pravatar.cc/150?img=9"
  },
  {
    name: "Isomtv",
    role: "YouTuber",
    image: "https://i.pravatar.cc/150?img=10"
  }
];
const Header = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
        <h1 className='text-3xl font-bold mb-6'>Users</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {users.map((user, index) =>(
        <div
        key={index}
        className='flex rounded-full items-center gap-4 p-4 shadow hover:shadow-md transition-all'
        >
    <img src={user.image} alt="user.name"
    className='w-14 h-14 rounded-full object-cover'
     />
     <div>
        <h2 className='font-semibold text-lg'>{user.name}</h2>
        <p className='text-sm text-gray-500'>{user.role}</p>
     </div>
        </div>
          ))}
        </div>
  
      </div>
  )
}

export default Header