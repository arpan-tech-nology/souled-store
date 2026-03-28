export default function Button({children}){
    return(
        <>
        <button className="h-[35px] border border-[#ddd] pt-5 pb-5 pl-[14px] pr-[14px] text-[#58595b] rounded-[15px] text-[18px] flex justify-center items-center whitespace-nowrap ">{children}</button>
        </>
    )
}