import Image from "next/image";

function Icon() {
  return (
    <Image
      src="/Medcan-logo.png"
      alt="Medcan Logo"
      width={136}
      height={25}
      style={{ width: "136px", height: "25px" }}
      priority
    />
  );
}

export default Icon;
