import Reveal from './Reveal'

const fabrics = [
  {
    name: 'Pure Cotton',
    img: 'https://images.unsplash.com/photo-1604287094091-2050a13b57db?q=80&w=1600&auto=format&fit=crop',
    story: 'Breathable and soft against the skin, perfect for everyday elegance.'
  },
  {
    name: 'Chinnon Silk',
    img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop',
    story: 'A delicate sheen with fluid drape — effortless luxury in motion.'
  },
  {
    name: 'Handloom Muslin',
    img: 'https://images.unsplash.com/photo-1596324202629-5a6a1c065d3d?q=80&w=1600&auto=format&fit=crop',
    story: 'Featherlight texture with artisanal charm, woven by masters.'
  }
]

export default function FabricStory() {
  return (
    <section className="bg-[#FDFBF5] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-serif text-4xl text-[#222] text-center mb-8">Fabric Story</h2>
        </Reveal>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {fabrics.map((f) => (
            <div key={f.name} className="snap-start min-w-[80%] md:min-w-[40%] lg:min-w-[33%] relative rounded-2xl overflow-hidden group">
              <img src={f.img} alt={f.name} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF5] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-[#222]">{f.name}</h3>
                <p className="text-[#2E534B] mt-1">{f.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
