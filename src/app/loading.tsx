import Image from "next/image";

export default function Loading() {
    return <div className="flex items-center justify-center">
        <Image src="spinner.svg" width={100} height={100} alt="spinner image"/>
    </div>
}