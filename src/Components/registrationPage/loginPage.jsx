import "./loginPage.css"
import Header from "../header/header"
import Footer from "../footer/footer"
export default function LoginPage(){
    return(
        <>
        <Header/>
        <div className="bg-[#e6e7e8] flex justify-center items-center w-full" >
        <div className="bg-white w-[600px]">
            <div className="font-bold text-[25px] w-full flex justify-center items-center">
            <h2>Login with The Souled Store</h2>

            </div>
            <div className="flex w-full justify-center items-center text-[20px]">
                <div className="border bg-[#117a7a] text-white  pt-[20px] pl-[80px] pr-[80px] pb-[20px]">LOGIN</div>
                <div className="border pt-[20px] pl-[80px] pr-[80px] pb-[20px] text-[#58595b]   ">REGISTER</div>
            </div>
            <div className="flex w-full justify-center items-center text-[20px] bg-[#f1f1f2]">
                <div className="border border-[#9c9b9b] p-9 flex gap-5">
                    <div className="flex border rounded-[10px] bg-white border-[#ccc]  gap-1 pl-4 pr-4 ">
                        <div className="w-[30px]  flex items-center">
                        <img src="./images/facebookicon.avif"></img>

                        </div >
                    <p className="border-l border-l-[#ccc] h-[40px] flex items-center pl-1">Facebook</p>
                    </div>
                    <div className="flex border rounded-[10px] bg-white border-[#ccc]  gap-1 pl-4 pr-4 ">
                        <div className="w-[30px]  flex items-center">
                            <img src="./images/googleicon.png"></img>
                        

                        </div >
                    <p className="border-l border-l-[#ccc] h-[40px] flex items-center pl-1">Google</p>
                    </div>

                   
                </div>
                <div className="bg-red-100">
                    <p>-or-</p>
                </div>
                
            </div>


        </div>
        </div>
        <Footer/>

        </>
    )
}