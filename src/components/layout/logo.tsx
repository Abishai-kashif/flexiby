import Link from "next/link";
import Image from "next/image";

function logo() {
    return (
        <Link href={"/"}>
            <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-1">
                <div>
                    Flexi<span className="text-primary">Buy</span>
                </div>
                <div>
                    <Image
                        src="/logo_icon.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="object-contain object-center"
                    />
                </div>
            </h1>
        </Link>
    );
}

export default logo;
