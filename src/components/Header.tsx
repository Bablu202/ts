export default function Header() {
  return (
    <div className="flex justify-between py-2 border-b border-gray-500 border-solid">
      <h3>Here we go..!</h3>
      <ul className="flex ">
        <li className="mr-2 hover:underline ">Home</li>
        <li className="mr-2 hover:underline ">About</li>
        <li className="mr-2 hover:underline ">more</li>
      </ul>
    </div>
  );
}
