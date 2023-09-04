import coverImage from "@/libs/assets/svg/coveropt.svg";
import Image from "next/image";

export function Cover() {
    return (
        <section className="flex justify-end h-full overflow-hidden">
            <Image
                src={coverImage}
                alt="cover.svg"
                className="h-[90vh]"
                priority={true}
            />
        </section>
    );
}
