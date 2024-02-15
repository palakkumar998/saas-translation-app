
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image"

function UserAvatar(
    { name, image, className }: { name?: string | null, image?: string | null, className?: string | null }
) {

    return (
        <div>
            <Avatar className={cn("bg-white text-black", className)}>

                {image && (
                    <Image
                        src={image}
                        alt={name || 'User Name'}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                )}

                <AvatarFallback delayMs={1000} className="dark:bg-white  dark:text-black text-lg font-semibold" >
                    {name?.split(" ").map((index) => index[0]).join("")}  {/*// fetching first word of name, surname */}
                </AvatarFallback>

            </Avatar>

        </div>
    )
}

export default UserAvatar