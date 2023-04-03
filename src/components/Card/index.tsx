import { useEffect, useState } from "react";
import { CardEntity } from "../../data/entities/card-entity";
import { Rarity } from "../../data/models/card-model";
import { Logo } from "../Logo";

type CardProps = {
  card: CardEntity;
  isFlipped?: boolean;
  isHoverable?: boolean;
  position: "top" | "bottom" | "none";
};

type Colors = {
  container: string;
  nameContainer: string;
};

const rarityClasses = new Map<Rarity, Colors>([
  ["common", { container: "bg-sky-700", nameContainer: "bg-sky-700/60" }],
  ["uncommon", { container: "bg-stone-500", nameContainer: "bg-stone-500/60" }],
  ["rare", { container: "bg-indigo-800", nameContainer: "bg-indigo-800/60" }],
  [
    "legendary",
    { container: "bg-yellow-600", nameContainer: "bg-yellow-600/60" },
  ],
  [
    "epic",
    {
      container:
        "bg-gradient-to-b from-fuchsia-700 via-yellow-500 to-cyan-500 rainbow-borders",
      nameContainer: "bg-white/30",
    },
  ],
]);

const positionClasses = new Map<"top" | "bottom" | "none", string>([
  ["bottom", "-top-[100px] scale-[1.4]"],
  ["top", "scale-[1.1]"],
  ["none", "scale-[1.1]"],
]);

export const Card = (props: CardProps) => {
  const { card, position, isFlipped = false, isHoverable = true } = props;

  const [isHovered, setIsHovered] = useState(false);

  const rarityClass = rarityClasses.get(card.rarity) as Colors;
  const positionClass = positionClasses.get(position) as string;
  const canReseizeFont = card.name.length > 15;
  const fontSizeClass = canReseizeFont ? "text-[8px]" : "text-[10px]";

  const hoverClass = isHovered ? `z-40 ${positionClass}` : "z-30";
  const flipClass = isFlipped ? "border-4 border-neutral-400" : "p-[7px]";

  return (
    <div
      className={`${rarityClass.container} ${hoverClass} ${flipClass} flex flex-col w-[140px] h-[180px] rounded-md relative transition-all ease-in duration-150`}
      style={{ boxShadow: "11px 8px 28px -10px rgba(0,0,0,0.75)" }}
      onMouseEnter={() => isHoverable && setIsHovered(true)}
      onMouseLeave={() => isHoverable && setIsHovered(false)}
    >
      {isFlipped && (
        <div className="h-full w-full bg-slate-900 z-30">
          <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-40">
            <Logo size="130px" color="#fff" />
          </div>
        </div>
      )}

      {!isFlipped && (
        <>
          <div className="w-full absolute top-[18px] left-[5px] select-none z-20">
            <div className="flex flex-row w-full items-center justify-between relative">
              <div className="flex flex-row items-center border-2 border-neutral-100 justify-center absolute bg-gradient-to-r from-cyan-500 to-blue-500 h-[26px] w-[26px] rounded-full">
                <p className="text-sm text-neutral-100 font-bold">
                  {card.cost}
                </p>
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

          <div className="w-full absolute z-20 bottom-[5px] left-[4px] select-none">
            <div className="flex flex-row w-[94%] items-center justify-between relative">
              <div className="left-1 flex flex-row items-center justify-center p-1 bg-gradient-to-r from-amber-400 to-amber-600 min-w-[30px] rounded-md border-2 border-neutral-100">
                <p className="text-sm text-neutral-100 font-bold">
                  {card.attack}
                </p>
              </div>

              <div
                className={`${rarityClass.nameContainer} flex flex-row items-center justify-center w-[71px] p-1 h-[28px]`}
              >
                <p
                  className={`${fontSizeClass} text-neutral-100 font-medium line-clamp-2 text-center`}
                  style={{ lineHeight: "1.2" }}
                >
                  {card.name}
                </p>
              </div>

              <div className="right-1 flex flex-row items-center justify-center p-1 bg-gradient-to-r from-red-500 to-red-700 min-w-[30px] rounded-md border-2 border-neutral-100">
                <p className="text-sm text-neutral-100 font-bold">
                  {card.health}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
