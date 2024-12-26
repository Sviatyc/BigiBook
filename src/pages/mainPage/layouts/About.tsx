
function About() {
  return (
    <div className="flex justify-between mt-[0px]">
        <div className="flex-1">
            <div className="w-full h-[284px] relative border-2 border-b-[#171717] flex flex-col">
                <h2 className="header-font w-full h-full text-[32px] text-[#171717] pl-10 mt-[60px]">DigiBook – де кожна сторінка <br /> – це новий світ, а кожне <br /> слово – це можливість <br /> відкриття!</h2>
                <img src="assets/images/planet.svg" alt="decorImage" className="absolute right-[28px] bottom-[28px]"/>
            </div>
            <div className="w-full h-[228px] border-2 border-b-[#171717]">
                <p className="text-[20px] text-[#171717] montserrat-alternates-medium pl-10 mt-[42px]">Відтепер ти можеш зберігати свої улюблені цитати та найяскравіші моменти з книжок у власному записнику. Створи свій унікальний космос літературних вражень!</p>
            </div>
        </div>
        <div className="w-[640px] h-[511px] flex justify-center items-center overflow-hidden">
            <img src="/assets/images/middleImage.svg" alt="middleImage" className="ml-[px]"/>
        </div>
      <div className="flex-1">
        <div className="w-full h-[192px] border-2 border-b-[#171717]"> 
            <p className="text-[28px] text-[#171717] mt-[45px] pl-[24px] montserrat-alternates-medium leading-[34.4px]">Зареєструйся чи увійди, і почни <br /> свою літературну подорож <br /> вже зараз!</p>
        </div>
        <div>
          <p>Зареєструватися</p>
        </div>
      </div>
    </div>
  )
}

export default About
