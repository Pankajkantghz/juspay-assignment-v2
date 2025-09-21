export default function TopSellingProducts() {
  const products = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  return (
    <div className="w-[662px] min-w-[662px] bg-[#F7F9FB] rounded-[16px] p-6 flex flex-col gap-1">
      {/* Title */}
      <h3 className="text-[14px] font-semibold leading-[20px] text-[#1C1C1C] w-[614px] h-[20px]">
        Top Selling Products
      </h3>

      {/* Table */}
      <div className="w-[614px] h-[264px] flex flex-col">
        {/* Header Row */}
        <div className="flex border-b border-[#F3F5F7] pb-2 text-[12px] leading-[18px] text-[#1C1C1C]/40 font-normal">
          <div className="w-[224px] text-left">Name</div>
          <div className="w-[130px] text-right">Price</div>
          <div className="w-[130px] text-right">Quantity</div>
          <div className="w-[130px] text-right">Amount</div>
        </div>

        {/* Data Rows */}
        <div className="flex flex-col flex-1 text-[14px] leading-[20px] text-[#1C1C1C]">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="flex h-[40px] items-center border-b border-[#F3F5F7] last:border-none"
            >
              <div className="w-[224px] text-left">{p.name}</div>
              <div className="w-[130px] text-right">{p.price}</div>
              <div className="w-[130px] text-right">{p.quantity}</div>
              <div className="w-[130px] text-right">{p.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}