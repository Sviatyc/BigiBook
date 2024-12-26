import HeaderNavButton from "../components/HeaderNavButton"

function Header() {
  return (
    <header className="w-screen h-screen flex flex-col">
        <div className="flex  items-center h-[204px] mt-[110px] px-10 gap-[0px]">
            <h1 className="header-font uppercase text-[14.5vw] text-[#171717]">bigibook</h1>
            <img src="/assets/images/book.svg" alt="book-image" className="w-[211px] h-[170px]"/>
        </div>
        <div className="flex items-center justify-center border-y-[2px] border-[#171717] w-full mt-[56px]">
            <HeaderNavButton text='Записник' className="" link='some'/>
            <HeaderNavButton text='Магазин' className="" link='some'/>
            <HeaderNavButton text='Переклад' className="" link='some'/>
            <HeaderNavButton text='Форум' className="" link='some'/>
            <HeaderNavButton text='Тести :)' className="" link='some'/>
            <HeaderNavButton text='Підтримати' className="border-none" link='some'/>
        </div>
    </header>
  )
}

export default Header
