"use client"
import { Ghost, MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"


function CreateChatButton() {
    // for navigation
    const router = useRouter();

    const createNewChat = async () => {
        router.push("/chat/abc")

    }
    return (
        <Button onClick={createNewChat} variant={"ghost"} >

            <MessageSquarePlusIcon />

        </Button>


    )
}

export default CreateChatButton