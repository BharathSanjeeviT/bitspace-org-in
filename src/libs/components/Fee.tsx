"use client"

const Fee = ({type}:{type:string}) => {
    return ( ( type === 'paid' ) ?
        <div className={`flex items-center bg-red justify-center my-3 rounded-lg w-14 h-7`}>
            {type}
        </div>
    :
        <div className={`flex items-center bg-[#8ae9b0] justify-center my-3 rounded-lg w-14 h-7`}>
            {type}
        </div>
    )
}
export default Fee;
