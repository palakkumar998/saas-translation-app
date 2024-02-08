import LogoImage from "@logos/icons8-logo.svg";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";


function Logo() {
    return (
        <Link href="/" prefetch={false} className="overflow-hidden" >
            <div className="flex items-center w-72 h-14" >
                <AspectRatio ratio={16 * 9} className="flex items-center justify-center" >
                    <Image
                        priority
                        src={LogoImage}
                        alt="Logo Images"
                        className="rounded-sm dark:filter dark:invert"
                    />
                </AspectRatio>
            </div>
            Home
        </Link>
    )
}

export default Logo