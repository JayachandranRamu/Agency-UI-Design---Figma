import Logo from "../assets/Logo"

const Navbar = () => {
  return (
    <div className="flex w-[85%] m-auto justify-between items-center h-20">
        <div className="w-[10%]">
<Logo />
        </div>
        <div >
            <ul className="flex justify-between w-[160%] items-center">
                <li>Home</li>
                <li>Service</li>
                <li>Feature</li>
                <li>Product</li>
                <li>Testimonoial</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className="w-[15%] flex justify-around items-center">
<button className="text-Shade_1">Login</button>
<button className="bg-Shade_1 rounded-[6px] px-[20px] py-[10px] text-white">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar