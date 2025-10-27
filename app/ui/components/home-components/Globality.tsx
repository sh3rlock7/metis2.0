import Image from "next/image"
import Counter from "../../Counter"

const Globality = () => {
  return (
    <div className="relative mb-2 w-full h-[500px] flex flex-col items-center justify-center text-white overflow-hidden rounded-2xl">
      {/* Imagen de fondo */}
      <Image 
        src="/Rolltreppe.jpg"
        alt="Rolltreppe image - stairs image"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Contenido encima del fondo */}
      <div className="relative flex flex-col  p-6 rounded-2xl bg-black/40 h-full w-full ">
        <h1 className="text-3xl font-bold mb-3 mt-10">Unsere Globalität</h1>
        <p className="mb-4 max-w-xl ">
          Erfahren Sie, wie unsere globale Reichweite und lokale Expertise Ihr Unternehmen weltweit erfolgreich machen können. 
          Wir verbinden internationale Perspektiven mit lokaler Marktkenntnis, um maßgeschneiderte Lösungen zu bieten.
        </p>

        <div className="flex items-center  gap-x-3  text-6xl mt-10 font-semibold">
          <Counter end={290} duration={3000} />
          <p>Millionen</p>
        </div>

        <p className="mt-4">Reichweite unserer</p>
        <p>Kunden pro Monat</p>
      </div>
    </div>
  )
}

export default Globality