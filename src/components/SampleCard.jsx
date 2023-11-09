export function SimpleCard({ title, discription, techStach }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-card-bg-color py-5 px-10 text-center rounded-2xl border border-card-border-color md:hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className=" text-2xl text-font-color my-2">{title}</div>

      <div className="text-subtext-color my-1">{discription}</div>
      <div className="text-subtext-color">Tech Stack - {techStach}</div>
    </div>
  );
}
