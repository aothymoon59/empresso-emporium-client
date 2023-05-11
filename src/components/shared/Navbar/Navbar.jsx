const Navbar = () => {
  return (
    <div
      className="flex justify-center px-5 items-center gap-4 py-[15px] rancho-font"
      style={{
        backgroundImage: 'url("https://i.ibb.co/6yR4nHn/15.jpg")',
        backgroundSize: "cover",
      }}
    >
      <img
        src={"https://i.ibb.co/yfXfQf2/logo1.png"}
        className="w-[75px] h-[90px]"
        alt=""
      />
      <h2 className="text-4xl md:text-6xl text-white">Espresso Emporium</h2>
    </div>
  );
};

export default Navbar;
