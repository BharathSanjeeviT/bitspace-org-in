export const Bullet = (props: { name: string; color: string }) => {
    return (
        <div className="flex justify-center items-center gap-3 mx-2 text-sm">
            <div style={{ background: props.color }} className={"w-4 h-4 rounded-full"}></div>
            <span className="font-inter font-bold">{props.name}</span>
        </div>
    );
};
