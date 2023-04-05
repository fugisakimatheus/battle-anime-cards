import { Card } from "../../components/Card";
import { Logo } from "../../components/Logo";
import { CardEntity } from "../../data/entities/card-entity";
import { CardModel } from "../../data/models/card-model";

export const Arena = () => {
  const cardMock1: CardModel = {
    id: 1,
    name: "Gon Freecss",
    image:
      "data:image/jpeg;base64,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",
    description: `Janjanken ou Pedra Papel Tesoura é uma técnica criada por Gon com 3 usos diferentes:
    Pedra: Gon carrega sua aura em sua mão e descarrega tudo em um soco muito poderoso.
    Papel: Gon "dispara" sua aura como se fosse uma grande esfera de Nen.
    Tesoura: Gon c oncentra sua aura na forma de uma lâmina extremamente afiada.  `,
    attack: 10,
    health: 6,
    cost: 3,
    rarity: "common",
    type: "character",
  };

  const cardMock2: CardModel = {
    id: 2,
    name: "Kurosaki Ichigo",
    image:
      "https://magronime.com.br/wp-content/uploads/2022/11/Hiashi-Hyuuga-7-1-1-1024x576.png",
    description: "",
    attack: 8,
    health: 6,
    cost: 3,
    rarity: "uncommon",
    type: "character",
  };

  const cardMock3: CardModel = {
    id: 3,
    name: "Todoroki Shoto",
    image:
      "https://i.pinimg.com/736x/40/ae/98/40ae987c4ee27e70d128cb54125adfc9.jpg",
    description: "",
    attack: 12,
    health: 14,
    cost: 5,
    rarity: "rare",
    type: "character",
  };

  const cardMock4: CardModel = {
    id: 4,
    name: "Yumeko Jabami",
    image:
      "https://e0.pxfuel.com/wallpapers/349/846/desktop-wallpaper-yumeko-jabami-kirari-momobami-thumbnail.jpg",
    description: "",
    attack: 99,
    health: 99,
    cost: 8,
    rarity: "legendary",
    type: "character",
  };

  const cardMock5: CardModel = {
    id: 5,
    name: "Makima",
    image:
      "https://imagecache.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b00b0fe9-9307-4add-2816-21957ccc1600/width=400/00088.png",
    description: "",
    attack: 99,
    health: 99,
    cost: 12,
    rarity: "epic",
    type: "character",
  };

  const cardMock6: CardModel = {
    id: 6,
    name: "Makima",
    image:
      "https://imagecache.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b00b0fe9-9307-4add-2816-21957ccc1600/width=400/00088.png",
    description: "",
    attack: 99,
    health: 99,
    cost: 12,
    rarity: "legendary",
    type: "character",
  };

  const cardMock7: CardModel = {
    id: 7,
    name: "Makima",
    image:
      "https://imagecache.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b00b0fe9-9307-4add-2816-21957ccc1600/width=400/00088.png",
    description: "",
    attack: 99,
    health: 99,
    cost: 12,
    rarity: "uncommon",
    type: "character",
  };

  const cardMock8: CardModel = {
    id: 8,
    name: "Yumeko Jabami",
    image:
      "https://e0.pxfuel.com/wallpapers/349/846/desktop-wallpaper-yumeko-jabami-kirari-momobami-thumbnail.jpg",
    description: "",
    attack: 99,
    health: 99,
    cost: 8,
    rarity: "epic",
    type: "character",
  };

  const cardMock9: CardModel = {
    id: 9,
    name: "Yumeko Jabami",
    image:
      "https://e0.pxfuel.com/wallpapers/349/846/desktop-wallpaper-yumeko-jabami-kirari-momobami-thumbnail.jpg",
    description: "",
    attack: 99,
    health: 99,
    cost: 8,
    rarity: "common",
    type: "character",
  };

  const cards = [
    cardMock1,
    cardMock2,
    cardMock3,
    cardMock4,
    cardMock5,
    cardMock6,
    cardMock7,
    cardMock8,
    cardMock9,
  ].map((card) => new CardEntity(card));

  return (
    <div className="flex flex-row items-center w-screen h-screen bg-slate-600 overflow-hidden">
      <div className="h-full w-full bg-slate-900/60 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60">
          <Logo />
        </div>

        <div className="flex flex-col h-[50%] w-full bg-red-700/10 items-center">
          <div className="flex flex-row items-center h-[34%] justify-center w-full">
            <div
              className="w-full max-w-[750px] h-full flex flex-row items-center justify-center rounded-b-md"
              style={{ boxShadow: "0px 8px 76px -11px rgba(0,0,0,0.69)" }}
            >
              <div className="-ml-14 flex flex-row items-center justify-center mb-20">
                {cards
                  .filter((char) => ![2, 4].includes(char.id))
                  .map((card) => (
                    <div
                      key={card.id}
                      className="rotate-180"
                      style={{ marginRight: `-${cards.length * 6}px` }}
                    >
                      <Card position="top" card={card} isFlipped />
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-row items-center ml-[180px] mb-20 rotate-180">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  style={{ marginRight: `-142px` }}
                  className={index === 0 ? "rotate-6" : ""}
                >
                  <Card card={card} isFlipped isHoverable={false} />
                </div>
              ))}
            </div>
          </div>

          <div className="h-[66%] flex flex-row items-center justify-center">
            {cards
              .filter((char) => ![3, 5].includes(char.id))
              .map((card) => (
                <div key={card.id} className="mr-4">
                  <Card card={card} />
                </div>
              ))}
          </div>
        </div>

        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          <button
            className="rounded-lg text-neutral-100 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 font-bold border-2 border-neutral-100"
            style={{ boxShadow: "10px 10px 31px -15px rgba(0,0,0,0.75)" }}
          >
            End phase
          </button>
        </div>

        <div className="flex flex-col h-[50%] w-full bg-blue-700/10 items-center">
          <div className="h-[66%] flex flex-row items-center justify-center">
            {cards
              .filter((char) => ![4, 2, 6, 9, 7].includes(char.id))
              .map((card) => (
                <div key={card.id} className="mr-4">
                  <Card card={card} />
                </div>
              ))}
          </div>

          <div className="flex flex-row items-center h-[34%] justify-center w-full">
            <div className="flex flex-row items-center mr-[180px] mt-20">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  style={{ marginRight: `-142px` }}
                  className={index === 0 ? "rotate-6" : ""}
                >
                  <Card card={card} isFlipped isHoverable={false} />
                </div>
              ))}
            </div>

            <div
              className="w-full max-w-[750px] h-full flex flex-row items-center justify-center rounded-t-md"
              style={{ boxShadow: "0px -8px 76px -11px rgba(0,0,0,0.69)" }}
            >
              <div className="-ml-14 flex flex-row items-center justify-center mt-20">
                {cards
                  .filter((char) => ![1, 5, 9, 6].includes(char.id))
                  .map((card) => (
                    <div
                      key={card.id}
                      style={{ marginRight: `-${cards.length * 6}px` }}
                    >
                      <Card position="bottom" card={card} />
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex ml-14 w-[100px] h-[100px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
