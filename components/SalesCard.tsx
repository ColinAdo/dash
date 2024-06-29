export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

const SalesCard = (props: SalesProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3 p-2">
        <div className="w-12 h-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="hidden sm:block text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-500">
            <p>{props.email}</p>
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  );
};

export default SalesCard;
