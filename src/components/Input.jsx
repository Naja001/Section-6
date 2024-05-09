export default function Input({ label, invalid, ...props }) {
  let labelClasses =
    "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";
  if (invalid) {
    labelClasses =
      "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400";
  }

  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow "
  //we could add and for labelClasses here but I just do this to demonstrate
  if(invalid){
    inputClasses+=" text-red-500 bg-red-100 border-red-300"
  }else{
    inputClasses+= " bg-stone-300 text-gray-700 "}

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input
        className={inputClasses}
        {...props}
      />
    </p>
  );
}
