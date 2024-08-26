interface IMenuProps {
    alt: string;
    onClick: () => void;
}
export default function Menu({onClick, alt}: IMenuProps) {
    return(
        <div className="flex flex-col gap-1.5" onClick={onClick} title={alt}>
            <div className="h-1.5 w-11 bg-slate-950/80 rounded-tl-[20px] rounded-br-[20px]"></div>
            <div className="h-1.5 w-9 bg-slate-950/80 rounded-tl-[20px] rounded-br-[20px]"></div>
            <div className="h-1.5 w-11 bg-slate-950/80 rounded-tl-[20px] rounded-br-[20px]"></div>
        </div>
    )
}