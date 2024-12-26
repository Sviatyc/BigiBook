import { useNavigate } from "react-router-dom"

type Props = {
    text: string
    className: string
    link: string
}

function HeaderNavButton({text, className, link} : Props) {
    const nav = useNavigate()
  return (
    <button className={`${className} text-[#171717] montserrat-alternates-medium text-[24px] h-[78px] flex-1 border-r-[2px] border-[#171717] hover:bg-[#DD551A] hover:text-[#EEE5DA] duration-200 ease-in-out`} onClick={()=>nav(link)}>{text}</button>
  )
}

export default HeaderNavButton
