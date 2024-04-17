import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiRepost, BiHeart , BiUpload} from "react-icons/bi";

const FeedCard: React.FC = () => {

    return (
        <div className="grid grid-cols-12 gap-3 p-4 border border-l-0 border-r-0 border-t-0 border-gray-600 hover:bg-slate-900">

            <div className=" col-span-1">
                {/* for image putting, use image component (it has Optimizations ), IMPORT IT first and then use it
                height and width are manadatory attribute
                NOTE -> You will get Error becz in NextJS you have to configure from where you are taking the image , 
                in this case -> "avatars.githubusercontent.com"
                Go to next.config.js and configure it
                */}
                <Image src="https://avatars.githubusercontent.com/u/115513580?v=4" alt="User Image" height={50} width={50}
                className=" rounded-full"
                />
            </div>

            <div className=" col-span-11">
                <h5 className=" font-semibold">Himanshu Sharma</h5>
                <p>Finally!! Got an internship as project intern with decent stipends. Dedication paid off.
                    Very very thank you to @kirat_tw bahiya, fairly I didn't know JS before December🥲 Now, I am ready for 1-100 more than ever !!!
                </p>

                <div className=" flex justify-between items-center text-2xl mt-3 p-2 w-[90%]">
                    <div>
                        <BiMessageRounded />
                    </div>
                    <div>
                        <BiRepost />
                    </div>
                    <div>
                        <BiHeart />
                    </div>
                    <div>
                        <BiUpload />
                    </div>
            </div>
                


            </div>

            

        </div>
    )

}

export default FeedCard;