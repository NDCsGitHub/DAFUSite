export const Footer = () => {
  return (
    <footer
      className="p-6 fixed bottom-0 left-0 border-t border-gray-300 w-full flex items-center justify-left gap-4 z-10" 
      style={{ backgroundColor: "#FFF3E2" }}
    >
      <div>
        <h2 className="text-lg font-bold">Da Fu Seafood Restaurant</h2>
        <p className="text-sm text-gray-600">5651 Steeles Ave E, Scarborough, ON M1V 5P6</p>
        <p className="text-sm text-gray-600">Phone: (416) 321-6898 | Email: info@dafuseafood.com</p>
      </div>
    </footer>
  );
};
