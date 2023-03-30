import { CardEntity } from "../../data/entities/card-entity";
import { Rarity } from "../../data/models/card-model";

type CardProps = {
  card: CardEntity;
};

type Colors = {
  color: string;
  opacityColor: string;
};

const rarityColors = new Map<Rarity, Colors>([
  ["common", { color: "bg-sky-700", opacityColor: "bg-sky-700/60" }],
  ["uncommon", { color: "bg-stone-500", opacityColor: "bg-stone-500/60" }],
  ["rare", { color: "bg-indigo-800", opacityColor: "bg-indigo-800/60" }],
  ["legendary", { color: "bg-yellow-600", opacityColor: "bg-yellow-600/60" }],
  [
    "epic",
    {
      color:
        "bg-gradient-to-b from-fuchsia-700 via-yellow-500 to-cyan-500 rainbow-borders",
      opacityColor: "bg-cyan-500/50",
    },
  ],
]);

export const Card = (props: CardProps) => {
  const { card } = props;

  const rarityColor = rarityColors.get(card.rarity) as Colors;

  return (
    <div
      className={`${rarityColor.color} flex flex-co w-[200px] h-[240px] p-[10px] rounded-md relative`}
      style={{ boxShadow: "11px 8px 28px -10px rgba(0,0,0,0.75)" }}
    >
      <div className="w-full absolute top-[21px] left-[7px] select-none z-20">
        <div className="flex flex-row w-full items-center justify-between relative">
          <div className="flex flex-row items-center border-2 border-neutral-100 justify-center absolute bg-sky-600 h-[30px] w-[30px] rounded-full">
            <p className="text-lg text-neutral-100 font-medium">{card.cost}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-row items-center justify-center z-10">
        <img
          className="rounded-md h-full w-full object-cover select-none pointer-events-none"
          src={card.image}
          alt={card.name}
        />
      </div>

      <div className="w-full absolute z-20 bottom-[6px] left-[6px] select-none">
        <div className="flex flex-row w-[94%] items-center justify-between relative">
          <div className="left-1 flex flex-row items-center justify-center p-1 bg-amber-500 min-w-[33px] rounded-md">
            <p className="text-lg text-neutral-100 font-medium">
              {card.attack}
            </p>
          </div>

          <div
            className={`${rarityColor.opacityColor} flex flex-row items-center justify-center w-full p-1`}
          >
            <p className="text-neutral-100 text-sm font-medium line-clamp-2 text-center">
              {card.name}
            </p>
          </div>

          <div className="right-1 flex flex-row items-center justify-center p-1 bg-red-700 min-w-[33px] rounded-md">
            <p className="text-lg text-neutral-100 font-medium">
              {card.health}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
